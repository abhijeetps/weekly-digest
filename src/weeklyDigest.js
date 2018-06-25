var markdownIssues = require('./markdown/markdownIssues')
var markdownPullRequests = require('./markdown/markdownPullRequests')
var markdownContributors = require('./markdown/markdownContributors')
var markdownStargazers = require('./markdown/markdownStargazers')
var markdownCommits = require('./markdown/markdownCommits')
var markdownReleases = require('./markdown/markdownReleases')

var getLongMonth = require('./markdown/getLongMonth')

var getAllIssues = require('./bin/getAllIssues')
var getAllPullRequests = require('./bin/getAllPullRequests')
var getStargazers = require('./bin/getStargazers')
var getCommits = require('./bin/getCommits')
var getReleases = require('./bin/getReleases')

var postCreateIssues = require('./bin/postCreateIssues')

module.exports = async (context, {owner, repo, headDate, tailDate}, config) => {
  console.log('In weeklyDigest.js...')
  let fromDate = new Date(tailDate)
  let toDate = new Date(headDate)
  var title = `Weekly Digest (${fromDate.getDate()} ${getLongMonth(fromDate.getMonth())}, ${fromDate.getFullYear()} - ${toDate.getDate()} ${getLongMonth(toDate.getMonth())}, ${toDate.getFullYear()})`
  var body = `Here's the Weekly Digest for [${owner}/${repo}](https://github.com/${owner}/${repo}):\n`
  var issuesString = ``
  var contributorsString = ``
  var pullRequestsString = ``
  var stargazersString = ``
  var commitsString = ``
  var releasesString = ``
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
  // console.log(`${title} \n${labels} \n${body}`)
  postCreateIssues(context, {owner, repo, title, body, labels})
}
