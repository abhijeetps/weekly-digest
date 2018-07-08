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

// const postCreateIssues = require('./bin/postCreateIssues')

module.exports = async (context, {owner, repo, headDate, tailDate}, config) => {
  console.log('In weeklyDigest.js...')
  let fromDate = new Date(tailDate)
  let toDate = new Date(headDate)
  let title = `Weekly Digest (${fromDate.getDate()} ${getLongMonth(fromDate.getMonth())}, ${fromDate.getFullYear()} - ${toDate.getDate()} ${getLongMonth(toDate.getMonth())}, ${toDate.getFullYear()})`
  let body = `Here's the Weekly Digest for [${owner}/${repo}](https://github.com/${owner}/${repo}):\n`
  let issuesString = ``
  let contributorsString = ``
  let pullRequestsString = ``
  let stargazersString = ``
  let commitsString = ``
  let releasesString = ``
  if (config.canPublishIssues || config.canPublishContributors) {
    const issues = await getAllIssues(context, {owner, repo, tailDate})
    if (config.canPublishIssues) {
      issuesString = markdownIssues(issues)
    }
    if (config.canPublishContributors) {
      contributorsString = markdownContributors(issues)
    }
  }
  if (config.canPublishPullRequests) {
    const pullRequests = await getAllPullRequests(context, {owner, repo})
    pullRequestsString = markdownPullRequests(pullRequests, tailDate)
  }
  if (config.canPublishStargazers) {
    const stargazers = await getStargazers(context, {owner, repo})
    stargazersString = markdownStargazers(stargazers, tailDate)
  }
  if (config.canPublishCommits) {
    const commits = await getCommits(context, {owner, repo, tailDate})
    commitsString = markdownCommits(commits)
  }
  if (config.canPublishReleases) {
    const releases = await getReleases(context, {owner, repo})
    releasesString = await markdownReleases(releases, tailDate)
  }
  body += `${issuesString}\n${pullRequestsString}\n${contributorsString}\n${stargazersString}\n${commitsString}\n ${releasesString}`
  body += `That's all for this week, please watch :eyes: and star :star: [${owner}/${repo}](https://github.com/${owner}/${repo}) to receive next weekly updates. :smiley:`
  const labels = ['weekly-digest']
  console.log(`${title} \n${labels} \n${body}`)
  // postCreateIssues(context, {owner, repo, title, body, labels})
}
