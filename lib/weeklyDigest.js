var markdownIssues = require('./markdown/markdownIssues')
var markdownPullRequests = require('./markdown/markdownPullRequests')
var markdownContributors = require('./markdown/markdownContributors')

const defaultConfig = require('./markdown/defaultConfig')

var getAllIssues = require('./bin/getAllIssues')
var getAllPullRequests = require('./bin/getAllPullRequests')

var postCreateIssues = require('./bin/postCreateIssues')

module.exports = async (context, {owner, repo}, config) => {
  console.log('In weeklyDigest.js')
  if (config == null) {
    config = defaultConfig
  }
  var title = `Weekly Digest`
  var body = `Here's the Weekly Digest for [${owner}/${repo}](https://github.com/${owner}/${repo}):\n`
  var issuesString = ``
  var contributorsString = ``
  var pullRequestsString = ``
  if (config.canPublishIssues || config.canPublishContributors) {
    const issues = await getAllIssues(context, {owner, repo})
    if (config.canPublishIssues) {
      issuesString = markdownIssues(context, {issues})
    }
    if (config.canPublishContributors) {
      contributorsString = markdownContributors(context, {issues})
    }
  }
  if (config.canPublishPullRequests) {
    const pullRequests = await getAllPullRequests(context, {owner, repo})
    pullRequestsString = markdownPullRequests(context, {pullRequests})
  }
  body += issuesString + '\n' + pullRequestsString + '\n' + contributorsString + '\n'
  body += `That's all for this week, please watch :eyes: and star :star: [${owner}/${repo}](https://github.com/${owner}/${repo}) to receive next weekly updates. :smiley:'`
  const labels = ['weekly-digest']
  console.log(body)
  postCreateIssues(context, {owner, repo, title, body, labels})
}
