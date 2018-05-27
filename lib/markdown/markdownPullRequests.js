module.exports = (context, {pullRequests}) => {
  // console.log(pullRequests)
  console.log('In markdownPullRequests')
  var pullRequestsString = ''
  var countPullRequestsOpen = 0
  var countPullRequestsMerged = 0
  const data = pullRequests.data
  var i
  for (i = 0; i < data.length; i++) {
    if (data[i].merged_at !== null) {
      countPullRequestsMerged++
    }
    if (data[i].state === 'open') {
      countPullRequestsOpen++
    }
  }
  pullRequestsString = '# PULL REQUESTS \n'
  pullRequestsString += 'Now, talking about pull requests, this week, ' + countPullRequestsOpen + ' have been proposed of which ' + countPullRequestsMerged + ' has been merged. \n'
  var pullRequestsOpenString = '## OPEN PRs \n'
  var pullRequestsMergedString = '## MERGED PRs \n'
  for (i = 0; i < data.length; i++) {
    if (data[i].merged_at !== null) {
      countPullRequestsMerged++
      pullRequestsMergedString += ':purple_heart: #' + data[i].number + ' [' + data[i].title + '](' + data[i].html_url + ') \n'
    }
    if (data[i].state === 'open') {
      countPullRequestsOpen++
      pullRequestsOpenString += ':green_heart: #' + data[i].number + ' [' + data[i].title + '](' + data[i].html_url + ') \n'
    }
  }
  pullRequestsString += pullRequestsOpenString + pullRequestsMergedString
  return pullRequestsString
}
