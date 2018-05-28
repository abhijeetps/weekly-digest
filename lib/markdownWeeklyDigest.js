var markdownIssues = require('./markdown/markdownIssues')
var markdownPullRequests = require('./markdown/markdownPullRequests')
var markdownContributors = require('./markdown/markdownContributors')

var postCreateIssues = require('./bin/postCreateIssues')

function markdownWeeklyDigest (context, {owner, repo, issues, pullRequests}) {
  var title = 'Weekly Digest'
  console.log('In postWeeklyDigest.js')
  var body = 'Here\'s the Weekly Digest for repository ' + repo + ' owned by ' + owner + ':\n'
  const issuesString = markdownIssues(context, {issues})
  const pullRequestsString = markdownPullRequests(context, {pullRequests})
  const contributorsString = markdownContributors(context, {issues})
  body += issuesString + '\n' + pullRequestsString + '\n' + contributorsString + '\n'
  body += 'That\'s all for this week, please watch :eyes: and star :star: ' + owner + '/' + repo + ' to receive next weekly updates. :simple_smile:'
  var labels = ['weekly-digest']
  console.log(owner + '\n' + repo + '\n' + title + '\n' + body + '\n' + labels)
  return postCreateIssues(context, {owner, repo, title, body, labels})
}
module.exports = markdownWeeklyDigest
