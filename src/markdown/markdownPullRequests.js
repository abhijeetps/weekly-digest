
const moment = require('moment');

module.exports = (pullRequests, headDate, tailDate) => {
  let pullRequestsString = '# PULL REQUESTS\n';
  let data = pullRequests;
  if (!data) {
    data = [];
  }
  data = data.filter((item) => (
    (moment(item.created_at).isBetween(tailDate, headDate) && item.state === 'open' && !item.merged_at && moment(item.created_at).isSame(item.updated_at) && item.user.login !== 'weekly-digest[bot]')
    || (moment(item.updated_at).isBetween(tailDate, headDate) && item.state === 'open' && !item.merged_at && item.user.login !== 'weekly-digest[bot]')
    || (moment(item.merged_at).isBetween(tailDate, headDate) && item.state === 'closed' && item.user.login !== 'weekly-digest[bot]')
  ));

  if (data.length === 0) {
    pullRequestsString += 'Last week, no pull requests were created, updated or merged.\n';
  } else {
    pullRequestsString += `Last week, ${data.length} pull request${data.length > 1 ? 's were' : ' was'} created, updated or merged.\n`;
    const openPullRequest = data.filter((item) => (moment(item.created_at).isBetween(tailDate, headDate) && moment(item.created_at).isSame(item.updated_at) && !item.merged_at));
    const updatedPullRequest = data.filter((item) => (moment(item.updated_at).isBetween(tailDate, headDate) && !moment(item.updated_at).isSame(item.created_at) && !item.merged_at));
    const mergedPullRequest = data.filter((item) => (item.merged_at && moment(item.merged_at).isBetween(tailDate, headDate)));
    let mergedPullRequestString;
    let openPullRequestString;
    let updatedPullRequestString;
    if (mergedPullRequest.length > 0) {
      mergedPullRequestString = '## MERGED PULL REQUEST\n';
      mergedPullRequestString += `Last week, ${mergedPullRequest.length} pull request${(mergedPullRequest.length > 1) ? 's were' : ' was'} merged.\n`;
      mergedPullRequest.forEach((item) => {
        mergedPullRequestString += `:purple_heart: #${item.number} [${item.title.replace(/\n/g, ' ')}](${item.html_url}), by [${item.user.login}](${item.user.html_url})\n`;
      });
    }
    if (openPullRequest.length > 0) {
      openPullRequestString = '## OPEN PULL REQUEST\n';
      openPullRequestString += `Last week, ${openPullRequest.length} pull request${(openPullRequest.length > 1) ? 's were' : ' was'} opened.\n`;
      openPullRequest.forEach((item) => {
        openPullRequestString += `:green_heart: #${item.number} [${item.title.replace(/\n/g, ' ')}](${item.html_url}), by [${item.user.login}](${item.user.html_url})\n`;
      });
    }
    if (updatedPullRequest.length > 0) {
      updatedPullRequestString = '## UPDATED PULL REQUEST\n';
      updatedPullRequestString += `Last week, ${updatedPullRequest.length} pull request${(updatedPullRequest.length > 1) ? 's were' : ' was'} updated.\n`;
      updatedPullRequest.forEach((item) => {
        updatedPullRequestString += `:yellow_heart: #${item.number} [${item.title.replace(/\n/g, ' ')}](${item.html_url}), by [${item.user.login}](${item.user.html_url})\n`;
      });
    }
    if (typeof openPullRequestString !== 'undefined') {
      pullRequestsString += openPullRequestString;
    }
    if (typeof updatedPullRequestString !== 'undefined') {
      pullRequestsString += updatedPullRequestString;
    }
    if (typeof mergedPullRequestString !== 'undefined') {
      pullRequestsString += mergedPullRequestString;
    }
  }
  return pullRequestsString;
};
