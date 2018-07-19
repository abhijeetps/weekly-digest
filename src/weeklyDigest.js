
const moment = require('moment')

const markdownIssues = require('./markdown/markdownIssues')
const markdownPullRequests = require('./markdown/markdownPullRequests')
const markdownContributors = require('./markdown/markdownContributors')
const markdownStargazers = require('./markdown/markdownStargazers')
const markdownCommits = require('./markdown/markdownCommits')
const markdownReleases = require('./markdown/markdownReleases')
const getLongMonth = require('./markdown/getLongMonth')

const getAllIssues = require('./bin/getAllIssues')
const getAllPullRequests = require('./bin/getAllPullRequests')
const getStargazers = require('./bin/getStargazers')
const getCommits = require('./bin/getCommits')
const getReleases = require('./bin/getReleases')

const postCreateIssues = require('./bin/postCreateIssues')

module.exports = async (context, {owner, repo, headDate, tailDate}, config) => {
  console.log('In weeklyDigest.js...')
  let headDateObject = moment(headDate).toObject()
  let tailDateObject = moment(tailDate).toObject()
  let title = `Weekly Digest (${tailDateObject.date} ${getLongMonth(tailDateObject.months)}, ${tailDateObject.years} - ${headDateObject.date} ${getLongMonth(headDateObject.months)}, ${headDateObject.years})`
  let body = `Here's the Weekly Digest for [${owner}/${repo}](https://github.com/${owner}/${repo}):\n`
  let issuesString
  let contributorsString
  let pullRequestsString
  let stargazersString
  let commitsString
  let releasesString
  if (config.canPublishIssues) {
    const issues = await getAllIssues(context, {owner, repo, tailDate})
    issuesString = markdownIssues(issues, headDate, tailDate)
  }
  if (config.canPublishPullRequests) {
    const pullRequests = await getAllPullRequests(context, {owner, repo})
    pullRequestsString = markdownPullRequests(pullRequests, headDate, tailDate)
  }
  if (config.canPublishCommits || config.canPublishContributors) {
    const commits = await getCommits(context, {owner, repo, tailDate})
    if (config.canPublishCommits) {
      commitsString = markdownCommits(commits, headDate, tailDate)
    }
    if (config.canPublishContributors) {
      contributorsString = markdownContributors(commits, headDate, tailDate)
    }
  }
  if (config.canPublishStargazers) {
    const stargazers = await getStargazers(context, {owner, repo})
    stargazersString = markdownStargazers(stargazers, headDate, tailDate)
  }
  if (config.canPublishReleases) {
    const releases = await getReleases(context, {owner, repo})
    releasesString = markdownReleases(releases, headDate, tailDate)
  }
  if (issuesString) {
    body += issuesString
  }
  if (pullRequestsString) {
    body += pullRequestsString
  }
  if (commitsString) {
    body += commitsString
  }
  if (contributorsString) {
    body += contributorsString
  }
  if (stargazersString) {
    body += stargazersString
  }
  if (releasesString) {
    body += releasesString
  }
  body += '\n'
  body += `That's all for this week, please watch :eyes: and star :star: [${owner}/${repo}](https://github.com/${owner}/${repo}) to receive next weekly updates.\n\n`
  body += `You can also [view all Weekly Digests by clicking here](https://github.com/${owner}/${repo}/issues?q=is:open+is:issue+label:weekly-digest). :smiley:\n\n`
  body += `Your [Weekly Digest](https://github.com/apps/weekly-digest) bot. :calendar:\n`
  const labels = ['weekly-digest']
  // console.log(`${title} \n${labels} \n${body}`)
  postCreateIssues(context, {owner, repo, title, body, labels})
}
