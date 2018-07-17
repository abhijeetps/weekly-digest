module.exports = (pullRequests, headDate, tailDate) => {
  console.log('In markdownPullRequests.js...')
  let pullRequestsString = `# PULL REQUESTS\n`
  let data = pullRequests.data
  if (data == null) {
    data = []
  }
  data = data.filter((item) => {
    if ((item.merged_at >= tailDate && item.merged_at < headDate) && (item.user.login !== 'weekly-digest[bot]') && (item.state === 'open') && (item.merged_at != null)) {
      return true
    } else if ((item.created_at >= tailDate && item.created_at < headDate) && (item.merged_at == null) && (item.updated_at == null) && (item.user.login !== 'weekly-digest[bot]') && (item.state === 'open')) {
      return true
    } else if ((item.updated_at >= tailDate && item.updated_at < headDate) && (item.merged_at == null) && (item.user.login !== 'weekly-digest[bot]') && (item.state === 'open')) {
      return true
    } else {
      return false
    }
  })
  if (data.length === 0) {
    pullRequestsString += 'Last week, no pull requests were created, updated or merged.\n'
  } else {
    pullRequestsString += `Last week, ${data.length} pull request${data.length > 1 ? 's were' : ' was'} created, updated or merged.\n`
    let mergedPullRequest = data.filter((item) => ((item.merged_at >= tailDate && item.merged_at < headDate) && (item.merged_at != null)))
    let openPullRequest = data.filter((item) => ((item.created_at >= tailDate && item.created_at < headDate) && (item.merged_at == null) && (item.updated_at == null)))
    let updatedPullRequest = data.filter((item) => ((item.updated_at >= tailDate && item.updated_at < headDate) && (item.merged_at == null)))
    let mergedPullRequestString
    let openPullRequestString
    let updatedPullRequestString
    if (mergedPullRequest.length > 0) {
      mergedPullRequestString = '## MERGED PULL REQUEST\n'
      mergedPullRequestString += `Last week, ${mergedPullRequest.length} pull request${(mergedPullRequest.length > 1) ? 's were' : ' was'} merged.\n`
      mergedPullRequest.forEach((item) => {
        mergedPullRequestString += `:purple_heart: #${item.number} [${item.title}](${item.html_url}), by [${item.user.login}](${item.user.html_url})\n`
      })
    }
    if (openPullRequest.length > 0) {
      openPullRequestString = '## OPEN PULL REQUEST\n'
      openPullRequestString += `Last week, ${openPullRequest.length} pull request${(openPullRequest.length > 1) ? 's were' : ' was'} opened.\n`
      openPullRequest.forEach((item) => {
        openPullRequestString += `:green_heart: #${item.number} [${item.title}](${item.html_url}), by [${item.user.login}](${item.user.html_url})\n`
      })
    }
    if (updatedPullRequest.length > 0) {
      updatedPullRequestString = '## UPDATED PULL REQUEST\n'
      updatedPullRequestString += `Last week, ${updatedPullRequest.length} pull request${(updatedPullRequest.length > 1) ? 's were' : ' was'} updated.\n`
      updatedPullRequest.forEach((item) => {
        updatedPullRequestString += `:yellow_heart: #${item.number} [${item.title}](${item.html_url}), by [${item.user.login}](${item.user.html_url})\n`
      })
    }
    if (typeof openPullRequestString !== 'undefined') {
      pullRequestsString += openPullRequestString
    }
    if (typeof updatedPullRequestString !== 'undefined') {
      pullRequestsString += updatedPullRequestString
    }
    if (typeof mergedPullRequestString !== 'undefined') {
      pullRequestsString += mergedPullRequestString
    }
  }
  return pullRequestsString
}
