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
  // New implementation above
  // const data = pullRequests.data
  // let pullRequestsString = `# PULL REQUESTS\n`
  // let countPullRequests = 0
  // let countPullRequestsOpen = 0
  // let countPullRequestsMerged = 0
  // let i
  // if (typeof data !== 'undefined' && data !== null && data.length != null && data.length > 0) {
  //   for (i = 0; i < data.length; i++) {
  //     if (data[i].created_at > tailDate) {
  //       countPullRequests++
  //       if (data[i].state === 'open' && data[i].merged_at === null) {
  //         countPullRequestsOpen++
  //       }
  //       if (data[i].state === 'open' && data[i].merged_at !== null) {
  //         countPullRequestsMerged++
  //       }
  //     }
  //   }
  // }
  // let pullRequestsOpenString = `## OPEN PRs \n`
  // let pullRequestsMergedString = `## MERGED PRs \n`
  // if (!countPullRequestsOpen) {
  //   pullRequestsOpenString = ``
  // }
  // if (!countPullRequestsMerged) {
  //   pullRequestsMergedString = ``
  // }
  // if (countPullRequests > 1) {
  //   pullRequestsString += `This week, ${countPullRequests} pull requests were proposed. Of these, ${countPullRequestsMerged} pull requests have been merged and ${countPullRequestsOpen} are still open.\n`
  //   if (typeof data !== 'undefined' && data !== null && data.length != null && data.length > 0) {
  //     for (i = 0; i < data.length; i++) {
  //       if (data[i].created_at > tailDate) {
  //         if (data[i].state === 'open' && data[i].merged_at === null) {
  //           countPullRequestsOpen++
  //           pullRequestsOpenString += `:green_heart: #${data[i].number} [${data[i].title}](${data[i].html_url}), by [${data[i].user.login}](${data[i].user.html_url})\n`
  //         }
  //         if (data[i].state === 'open' && data[i].merged_at !== null) {
  //           countPullRequestsMerged++
  //           pullRequestsMergedString += `:purple_heart: #${data[i].number} [${data[i].title}](${data[i].html_url}), by [${data[i].user.login}](${data[i].user.html_url})\n`
  //         }
  //       }
  //     }
  //   }
  //   pullRequestsString += pullRequestsOpenString + pullRequestsMergedString
  // } else if (countPullRequests === 1) {
  //   if (data[0].state === 'open' && data[0].merged_at === null) {
  //     pullRequestsString += `This week, 1 pull request has been proposed, which is still open. \n`
  //     pullRequestsOpenString += `:green_heart: #${data[0].number} [${data[0].title}](${data[0].html_url}), by [${data[0].user.login}](${data[0].user.html_url})\n`
  //     pullRequestsString += pullRequestsOpenString
  //   } else if (data[0].state === 'open' && data[0].merged_at !== null) {
  //     pullRequestsString += `This week, 1 pull request has been proposed, which has been merged. \n`
  //     pullRequestsMergedString += `:purple_heart: #${data[0].number} [${data[0].title}](${data[0].html_url}), by [${data[0].user.login}](${data[0].user.html_url})\n`
  //     pullRequestsString += pullRequestsMergedString
  //   }
  // } else {
  //   pullRequestsString += `This week, no pull requests has been proposed by the users. \n`
  // }
  // return pullRequestsString
}
