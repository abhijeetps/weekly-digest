var markdownIssues = require('./markdown/markdownIssues')
var markdownPullRequests = require('./markdown/markdownPullRequests')
var markdownContributors = require('./markdown/markdownContributors')

var getAllIssues = require('./bin/getAllIssues')
var getAllPullRequests = require('./bin/getAllPullRequests')

// var postCreateIssues = require('./bin/postCreateIssues')

module.exports = async (context, {owner, repo, headDate, tailDate}, config) => {
  console.log('In weeklyDigest.js')
  let fromDate = new Date(tailDate)
  let toDate = new Date(headDate)
  var title = `Weekly Digest (${fromDate.getDate()}/${fromDate.getMonth() + 1}/${fromDate.getFullYear()} - ${toDate.getDate()}/${toDate.getMonth() + 1}/${toDate.getFullYear()})`
  var body = `Here's the Weekly Digest for [${owner}/${repo}](https://github.com/${owner}/${repo}):\n`
  var issuesString = ``
  var contributorsString = ``
  var pullRequestsString = ``
  if (config.canPublishIssues || config.canPublishContributors) {
    const issues = await getAllIssues(context, {owner, repo, tailDate})
    if (config.canPublishIssues) {
      issuesString = markdownIssues(context, {issues})
    }
    if (config.canPublishContributors) {
      contributorsString = markdownContributors(context, {issues})
    }
  }
  if (config.canPublishPullRequests) {
    console.log(tailDate.slice(0, -5))
    const pullRequests = await getAllPullRequests(context, {owner, repo})
    // console.log(pullRequests)
    pullRequestsString = markdownPullRequests(context, {pullRequests, tailDate})
  }
  body += issuesString + '\n' + pullRequestsString + '\n' + contributorsString + '\n'
  body += `That's all for this week, please watch :eyes: and star :star: [${owner}/${repo}](https://github.com/${owner}/${repo}) to receive next weekly updates. :smiley:`
  const labels = ['weekly-digest']
  console.log(`${title} \n${labels} \n${body}`)
  // postCreateIssues(context, {owner, repo, title, body, labels})
}
