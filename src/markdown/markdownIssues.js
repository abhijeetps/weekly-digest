
const moment = require('moment');

module.exports = (issues, headDate, tailDate) => {
  let issuesString = '# ISSUES\n';
  let data = issues;
  if (!data) {
    data = [];
  }
  data = data.filter((item) => {
    if (moment(item.created_at).isBetween(tailDate, headDate) && (item.user.login !== 'weekly-digest[bot]')) {
      return true;
    }
    return false;
  });
  if (data.length === 0) {
    issuesString += 'Last week, no issues were created.\n';
  } else {
    let openIssueString;
    let closedIssueString;
    let likedIssueString;
    let noisyIssueString;
    if (data.length === 1) {
      issuesString += `Last week ${data.length} issue was created.\n`;
    } else {
      issuesString += `Last week ${data.length} issues were created.\n`;
    }
    const openIssue = data.filter((item) => item.state === 'open');
    if (openIssue.length > 0) {
      openIssueString = '## OPEN ISSUES\n';
    }
    const closedIssue = data.filter((item) => item.state === 'closed');
    if (closedIssue.length > 0) {
      closedIssueString = '## CLOSED ISSUES\n';
    }
    if (data.length === 1 && openIssue.length === 1) {
      issuesString += 'It is still open.\n';
    } else if (data.length === 1 && closedIssue.length === 1) {
      issuesString += 'It is closed now.\n';
    } else {
      issuesString += `Of these, ${closedIssue.length} issues have been closed and ${openIssue.length} issues are still open.\n`;
    }
    openIssue.forEach((item) => {
      openIssueString += `:green_heart: #${item.number} [${item.title.replace(/\n/g, ' ')}](${item.html_url}), by [${item.user.login}](${item.user.html_url})\n`;
    });
    closedIssue.forEach((item) => {
      closedIssueString += `:heart: #${item.number} [${item.title.replace(/\n/g, ' ')}](${item.html_url}), by [${item.user.login}](${item.user.html_url})\n`;
    });
    if (openIssueString) {
      issuesString += openIssueString;
    }
    if (closedIssueString) {
      issuesString += closedIssueString;
    }
    // To get the most recent liked or noisy issue
    data.reverse();
    // For Liked issue
    const likedIssue = data.filter((item) => (item.reactions['+1'] + item.reactions.laugh + item.reactions.hooray + item.reactions.heart) > 0);
    if (likedIssue.length > 0) {
      likedIssueString = '## LIKED ISSUE\n';
      let likedIssueItem = likedIssue[0];
      likedIssue.forEach((item) => {
        if ((item.reactions['+1'] + item.reactions.laugh + item.reactions.hooray + item.reactions.heart) > (likedIssueItem.reactions['+1'] + likedIssueItem.reactions.laugh + likedIssueItem.reactions.hooray + likedIssueItem.reactions.heart)) {
          likedIssueItem = item;
        }
      });
      likedIssueString += `:+1: #${likedIssueItem.number} [${likedIssueItem.title.replace(/\n/g, ' ')}](${likedIssueItem.html_url}), by [${likedIssueItem.user.login}](${likedIssueItem.user.html_url})\n`;
      likedIssueString += `It received :+1: x${likedIssueItem.reactions['+1']}, :smile: x${likedIssueItem.reactions.laugh}, :tada: x${likedIssueItem.reactions.hooray} and :heart: x${likedIssueItem.reactions.heart}.\n`;
    }
    if (likedIssueString) {
      issuesString += likedIssueString;
    }
    // For Noisy issue
    const noisyIssue = data.filter((item) => (item.comments > 0));
    if (noisyIssue.length > 0) {
      noisyIssueString = '## NOISY ISSUE\n';
      let noisyIssueItem = noisyIssue[0];
      noisyIssue.forEach((item) => {
        if ((item.comments) > (noisyIssueItem.comments)) {
          noisyIssueItem = item;
        }
      });
      noisyIssueString += `:speaker: #${noisyIssueItem.number} [${noisyIssueItem.title.replace(/\n/g, ' ')}](${noisyIssueItem.html_url}), by [${noisyIssueItem.user.login}](${noisyIssueItem.user.html_url})\n`;
      noisyIssueString += `It received ${noisyIssueItem.comments} comments.\n`;
    }
    if (noisyIssueString) {
      issuesString += noisyIssueString;
    }
  }
  return issuesString;
};
