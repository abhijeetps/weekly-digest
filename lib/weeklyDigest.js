var markdownIssues = require('./markdown/markdownIssues')
var markdownPullRequests = require('./markdown/markdownPullRequests')
var markdownContributors = require('./markdown/markdownContributors')

var getAllIssues = require('./bin/getAllIssues')
var getAllPullRequests = require('./bin/getAllPullRequests')
var postCreateIssues = require('./bin/postCreateIssues')

module.exports = async (context, {owner, repo}) => {
  console.log('In weeklyDigest.js')
  var title = `Weekly Digest`
  const issues = await getAllIssues(context, {owner, repo})
  console.log(issues)
  const pullRequests = await getAllPullRequests(context, {owner, repo})
  console.log(pullRequests)
  var body = `Here's the Weekly Digest for ${owner}/${repo}:\n`
  const issuesString = markdownIssues(context, {issues})
  const pullRequestsString = markdownPullRequests(context, {pullRequests})
  const contributorsString = markdownContributors(context, {issues})
  body += issuesString + '\n' + pullRequestsString + '\n' + contributorsString + '\n'
  body += `That's all for this week, please watch :eyes: and star :star: ${owner}/${repo} to receive next weekly updates. :smiley:'`
  const labels = ['weekly-digest']
  console.log(body)
  postCreateIssues(context, {owner, repo, title, body, labels})
}
