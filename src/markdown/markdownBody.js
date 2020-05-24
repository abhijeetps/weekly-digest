
const markdownIssues = require('./markdownIssues');
const markdownPullRequests = require('./markdownPullRequests');
const markdownContributors = require('./markdownContributors');
const markdownStargazers = require('./markdownStargazers');
const markdownCommits = require('./markdownCommits');
const markdownReleases = require('./markdownReleases');

const getAllIssues = require('../bin/getAllIssues');
const getAllPullRequests = require('../bin/getAllPullRequests');
const getStargazers = require('../bin/getStargazers');
const getCommits = require('../bin/getCommits');
const getReleases = require('../bin/getReleases');

module.exports = async (context, {
  owner, repo, headDate, tailDate,
}, config) => {
  let body = `Here's the **Weekly Digest** for [*${owner}/${repo}*](https://github.com/${owner}/${repo}):\n`;
  let issuesString;
  let contributorsString;
  let pullRequestsString;
  let stargazersString;
  let commitsString;
  let releasesString;
  if (config.canPublishIssues) {
    const issues = await getAllIssues(context, { owner, repo, tailDate });
    issuesString = markdownIssues(issues, headDate, tailDate);
  }
  if (config.canPublishPullRequests) {
    const pullRequests = await getAllPullRequests(context, { owner, repo });
    pullRequestsString = markdownPullRequests(pullRequests, headDate, tailDate);
  }
  if (config.canPublishCommits || config.canPublishContributors) {
    const commits = await getCommits(context, { owner, repo, tailDate });
    if (config.canPublishCommits) {
      commitsString = markdownCommits(commits, headDate, tailDate);
    }
    if (config.canPublishContributors) {
      contributorsString = markdownContributors(commits, headDate, tailDate);
    }
  }
  if (config.canPublishStargazers) {
    const stargazers = await getStargazers(context, { owner, repo });
    stargazersString = markdownStargazers(stargazers, headDate, tailDate);
  }
  if (config.canPublishReleases) {
    const releases = await getReleases(context, { owner, repo });
    releasesString = markdownReleases(releases, headDate, tailDate);
  }
  if (issuesString) {
    body += '\n - - - \n';
    body += issuesString;
  }
  if (pullRequestsString) {
    body += '\n - - - \n';
    body += pullRequestsString;
  }
  if (commitsString) {
    body += '\n - - - \n';
    body += commitsString;
  }
  if (contributorsString) {
    body += '\n - - - \n';
    body += contributorsString;
  }
  if (stargazersString) {
    body += '\n - - - \n';
    body += stargazersString;
  }
  if (releasesString) {
    body += '\n - - - \n';
    body += releasesString;
  }
  body += '\n - - - \n';
  body += '\n';
  body += `That's all for last week, please <kbd>:eyes: **Watch**</kbd> and <kbd>:star: **Star**</kbd> the repository [*${owner}/${repo}*](https://github.com/${owner}/${repo}) to receive next weekly updates. :smiley:\n\n`;
  body += `*You can also [view all Weekly Digests by clicking here](https://github.com/${owner}/${repo}/issues?q=is:open+is:issue+label:weekly-digest).* \n\n`;
  body += '> Your [**Weekly Digest**](https://github.com/apps/weekly-digest) bot. :calendar:\n';
  context.log.debug(body);
  return body;
};
