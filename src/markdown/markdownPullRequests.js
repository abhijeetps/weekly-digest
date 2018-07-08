module.exports = (pullRequests, tailDate) => {
  console.log('In markdownPullRequests.js...')
  const data = pullRequests.data
  let pullRequestsString = `# PULL REQUESTS\n`
  let countPullRequests = 0
  let countPullRequestsOpen = 0
  let countPullRequestsMerged = 0
  let i
  if (typeof data !== 'undefined' && data !== null && data.length != null && data.length > 0) {
    for (i = 0; i < data.length; i++) {
      if (data[i].created_at > tailDate) {
        countPullRequests++
        if (data[i].state === 'open' && data[i].merged_at === null) {
          countPullRequestsOpen++
        }
        if (data[i].state === 'open' && data[i].merged_at !== null) {
          countPullRequestsMerged++
        }
      }
    }
  }
  let pullRequestsOpenString = `## OPEN PRs \n`
  let pullRequestsMergedString = `## MERGED PRs \n`
  if (!countPullRequestsOpen) {
    pullRequestsOpenString = ``
  }
  if (!countPullRequestsMerged) {
    pullRequestsMergedString = ``
  }
  if (countPullRequests > 1) {
    pullRequestsString += `This week, ${countPullRequests} pull requests were proposed. Of these, ${countPullRequestsMerged} pull requests have been merged and ${countPullRequestsOpen} are still open.\n`
    if (typeof data !== 'undefined' && data !== null && data.length != null && data.length > 0) {
      for (i = 0; i < data.length; i++) {
        if (data[i].created_at > tailDate) {
          if (data[i].state === 'open' && data[i].merged_at === null) {
            countPullRequestsOpen++
            pullRequestsOpenString += `:green_heart: #${data[i].number} [${data[i].title}](${data[i].html_url}), by [${data[i].user.login}](${data[i].user.html_url})\n`
          }
          if (data[i].state === 'open' && data[i].merged_at !== null) {
            countPullRequestsMerged++
            pullRequestsMergedString += `:purple_heart: #${data[i].number} [${data[i].title}](${data[i].html_url}), by [${data[i].user.login}](${data[i].user.html_url})\n`
          }
        }
      }
    }
    pullRequestsString += pullRequestsOpenString + pullRequestsMergedString
  } else if (countPullRequests === 1) {
    if (data[0].state === 'open' && data[0].merged_at === null) {
      pullRequestsString += `This week, 1 pull request has been proposed, which is still open. \n`
      pullRequestsOpenString += `:green_heart: #${data[0].number} [${data[0].title}](${data[0].html_url}), by [${data[0].user.login}](${data[0].user.html_url})\n`
      pullRequestsString += pullRequestsOpenString
    } else if (data[0].state === 'open' && data[0].merged_at !== null) {
      pullRequestsString += `This week, 1 pull request has been proposed, which has been merged. \n`
      pullRequestsMergedString += `:purple_heart: #${data[0].number} [${data[0].title}](${data[0].html_url}), by [${data[0].user.login}](${data[0].user.html_url})\n`
      pullRequestsString += pullRequestsMergedString
    }
  } else {
    pullRequestsString += `This week, no pull requests has been proposed by the users. \n`
  }
  return pullRequestsString
}
