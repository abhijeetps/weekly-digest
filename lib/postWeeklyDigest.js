var markdownIssues = require('./markdown/markdownIssues')
var markdownPullRequests = require('./markdown/markdownPullRequests')

function postWeeklyDigest (context, {issues, pullRequests}) {
  // console.log(issues)
  // console.log(pullRequests)
  console.log('In postWeeklyDigest.js')
  const issuesString = markdownIssues(context, {issues})
  const pullRequestsString = markdownPullRequests(context, {pullRequests})
  console.log(issuesString + '\n' + pullRequestsString)
}

module.exports.postWeeklyDigest = postWeeklyDigest
