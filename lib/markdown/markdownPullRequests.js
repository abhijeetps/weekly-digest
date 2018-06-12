module.exports = (context, {pullRequests, tailDate}) => {
  console.log('In markdownPullRequests...')
  const data = pullRequests.data
  var pullRequestsString = `# PULL\n`
  var countPullRequests = 0
  var countPullRequestsOpen = 0
  var countPullRequestsMerged = 0
  var i
  for (i = 0; i < data.length; i++) {
    if (data[i].updated_at > tailDate) {
      countPullRequests++
      if (data[i].merged_at !== null) {
        countPullRequestsMerged++
      }
      if (data[i].state === 'open') {
        countPullRequestsOpen++
      }
    }
  }
  pullRequestsString = ``
  var pullRequestsOpenString = `## OPEN PRs \n`
  var pullRequestsMergedString = `## MERGED PRs \n`
  if (countPullRequests > 1) {
    pullRequestsString += `This week, ${countPullRequests} pull requests were proposed. Of these, ${countPullRequestsMerged} pull requests have been merged and ${countPullRequestsOpen} are still open.\n`
    for (i = 0; i < data.length; i++) {
      if (data[i].updated_at > tailDate) {
        if (data[i].state === 'open') {
          countPullRequestsOpen++
          pullRequestsOpenString += `:green_heart: #${data[i].number} [${data[i].title}](${data[i].html_url}), by [${data[i].user.login}](${data[i].user.html_url})\n`
        }
        if (data[i].merged_at != null) {
          countPullRequestsMerged++
          pullRequestsMergedString += `:purple_heart: #${data[i].number} [${data[i].title}](${data[i].html_url}), by [${data[i].user.login}](${data[i].user.html_url})\n`
        }
      }
    }
    pullRequestsString += pullRequestsOpenString + pullRequestsMergedString
  } else if (countPullRequests === 1) {
    if (data[0].state === 'open') {
      pullRequestsString += `This week, 1 pull request has been proposed, which is still open. \n`
      pullRequestsOpenString += `:green_heart: #${data[0].number} [${data[0].title}](${data[0].html_url}), by [${data[0].user.login}](${data[0].user.html_url})\n`
      pullRequestsString += pullRequestsOpenString
    } else if (data[0].merged_at != null) {
      pullRequestsString += `This week, 1 pull request has been proposed, which has been merged. \n`
      pullRequestsMergedString += `:purple_heart: #${data[0].number} [${data[0].title}](${data[0].html_url}), by [${data[0].user.login}](${data[0].user.html_url})\n`
      pullRequestsString += pullRequestsMergedString
    }
  } else {
    pullRequestsString += `This week, no pull requests has been proposed by the users. \n`
  }
  return pullRequestsString
}
