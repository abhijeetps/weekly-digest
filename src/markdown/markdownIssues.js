module.exports = (issues, headDate, tailDate) => {
  console.log('In markdownIssues.js...')
  let issuesString = `# ISSUES\n`
  let data = issues.data
  if (typeof data === 'undefined' && data === null) {
    data = []
  }
  data = data.filter((item) => {
    if ((item.created_at >= tailDate && item.created_at < headDate) && (item.user.login !== 'weekly-digest[bot]')) {
      return true
    } else {
      return false
    }
  })
  if (data.length === 0) {
    issuesString += `Last week, no issues were created.\n`
  } else {
    let openIssueString
    let closedIssueString
    let likedIssueString
    let noisyIssueString
    if (data.length === 1) {
      issuesString += `Last week ${data.length} issue was created.\n`
    } else {
      issuesString += `Last week ${data.length} issues were created.\n`
    }
    let openIssue = data.filter((item) => item.state === 'open')
    if (openIssue.length > 0) {
      openIssueString = `## OPEN ISSUES\n`
    }
    let closedIssue = data.filter((item) => item.state === 'closed')
    if (closedIssue.length > 0) {
      closedIssueString = `## CLOSED ISSUES\n`
    }
    if (data.length === 1 && openIssue.length === 1) {
      issuesString += `It is still open.\n`
    } else if (data.length === 1 && closedIssue.length === 1) {
      issuesString += `It is closed now.\n`
    } else {
      issuesString += `Of these, ${closedIssue.length} issues have been closed and ${openIssue.length} issues are still open.\n`
    }
    openIssue.forEach((item) => {
      openIssueString += `:green_heart: #${item.number} [${item.title}](${item.html_url}), by [${item.user.login}](${item.user.html_url})\n`
    })
    closedIssue.forEach((item) => {
      closedIssueString += `:heart: #${item.number} [${item.title}](${item.html_url}), by [${item.user.login}](${item.user.html_url})\n`
    })
    if (typeof openIssueString !== 'undefined') {
      issuesString += openIssueString
    }
    if (typeof closedIssueString !== 'undefined') {
      issuesString += closedIssueString
    }
    // To get the most recent liked or noisy issue
    data.reverse()
    // For Liked issue
    let likedIssue = data.filter((item) => (item.reactions['+1'] + item.reactions.laugh + item.reactions.hooray + item.reactions.heart) > 0)
    if (likedIssue.length > 0) {
      likedIssueString = '## LIKED ISSUE\n'
      let likedIssueItem = likedIssue[0]
      likedIssue.forEach((item) => {
        if ((item.reactions['+1'] + item.reactions.laugh + item.reactions.hooray + item.reactions.heart) > (likedIssueItem.reactions['+1'] + likedIssueItem.reactions.laugh + likedIssueItem.reactions.hooray + likedIssueItem.reactions.heart)) {
          likedIssueItem = item
        }
      })
      likedIssueString += `:+1: #${likedIssueItem.number} [${likedIssueItem.title}](${likedIssueItem.html_url}), by [${likedIssueItem.user.login}](${likedIssueItem.user.html_url})\n`
      likedIssueString += `It received :+1: x${likedIssueItem.reactions['+1']}, :smile: x${likedIssueItem.reactions.laugh}, :tada: x${likedIssueItem.reactions.hooray} and :heart: x${likedIssueItem.reactions.heart}.\n`
      if (typeof likedIssueString !== 'undefined') {
        issuesString += likedIssueString
      }
    }
    // For Noisy issue
    let noisyIssue = data.filter((item) => (item.comments > 0))
    if (noisyIssue.length > 0) {
      noisyIssueString = '## NOISY ISSUE\n'
      let noisyIssueItem = noisyIssue[0]
      noisyIssue.forEach((item) => {
        if ((item.comments) > (noisyIssueItem.comments)) {
          noisyIssueItem = item
        }
      })
      noisyIssueString += `:speaker: #${noisyIssueItem.number} [${noisyIssueItem.title}](${noisyIssueItem.html_url}), by [${noisyIssueItem.user.login}](${noisyIssueItem.user.html_url})\n`
      noisyIssueString += `It received ${noisyIssueItem.comments} comments.\n`
      if (typeof noisyIssueString !== 'undefined') {
        issuesString += noisyIssueString
      }
    }
  }

  // // New implementation :point_up:
  // let issuesOpenString = `## OPEN ISSUES \n`
  // let issuesClosedString = `## CLOSED ISSUES \n`
  // let issuesLikedString = `## LIKED ISSUE \n`
  // let issuesNoisyString = `## NOISY ISSUE \n`
  // // const data = issues.data
  // let likedData, noisyData
  // let countIssue = 0
  // let countIssueOpen = 0
  // let countIssueClosed = 0
  // let i
  // if (typeof data !== 'undefined' && data !== null && data.length != null && data.length > 0) {
  //   for (i = 0; i < data.length; i++) {
  //     if (data[i].state === 'open' && data[i].user.type !== 'Bot') {
  //       countIssueOpen++
  //     } else if (data[i].state === 'closed' && data[i].user.type !== 'Bot') {
  //       countIssueClosed++
  //     }
  //     if (typeof likedData === 'undefined') {
  //       if (data[i].reactions.total_count > 0 && data[i].user.type !== 'Bot') {
  //         likedData = data[i]
  //       }
  //     } else if (typeof likedData !== 'undefined') {
  //       if (data[i].reactions.total_count > likedData.reactions.total_count && data[i].user.type !== 'Bot') {
  //         likedData = data[i]
  //       }
  //     }
  //     if (typeof noisyData === 'undefined') {
  //       if (data[i].comments > 0 && data[i].user.type !== 'Bot') {
  //         noisyData = data[i]
  //       }
  //     } else if (typeof noisyData !== 'undefined') {
  //       if (data[i].comments > noisyData.comments && data[i].user.type !== 'Bot') {
  //         noisyData = data[i]
  //       }
  //     }
  //   }
  // }
  // countIssue = countIssueOpen + countIssueClosed
  // if (!countIssueOpen) {
  //   issuesOpenString = ``
  // }
  // if (!countIssueClosed) {
  //   issuesClosedString = ``
  // }
  // if (countIssue > 1) {
  //   issuesString += `This week, ${countIssue} issues were created. Of these, ${countIssueClosed} issues have been closed and ${countIssueOpen} issues are still open. \n`
  //   for (i = 0; i < data.length; i++) {
  //     if (data[i].state === 'open' && data[i].user.type !== 'Bot') {
  //       issuesOpenString += `:green_heart: #${data[i].number} [${data[i].title}](${data[i].html_url}), by [${data[i].user.login}](${data[i].user.html_url})\n`
  //     } else if (data[i].state === 'closed' && data[i].user.type !== 'Bot') {
  //       issuesClosedString += `:heart: #${data[i].number} [${data[i].title}](${data[i].html_url}), by [${data[i].user.login}](${data[i].user.html_url})\n`
  //     }
  //   }
  //   issuesString += issuesOpenString + issuesClosedString
  // } else if (countIssue === 1) {
  //   if (data[0].state === 'open' && data[0].user.type !== 'Bot') {
  //     issuesString += `This week 1 issue is created.\n`
  //     issuesClosedString = `## OPEN ISSUE \n`
  //     issuesOpenString += `:green_heart: #${data[0].number} [${data[0].title}](${data[0].html_url}), by [${data[0].user.login}](${data[0].user.html_url})\n`
  //     issuesString += issuesOpenString
  //   } else if (data[0].state === 'closed' && data[0].user.type !== 'Bot') {
  //     issuesString += `This week 1 issue is closed.\n`
  //     issuesClosedString = `## CLOSED ISSUE \n`
  //     issuesClosedString += `:heart: #${data[0].number} [${data[0].title}](${data[0].html_url}), by [${data[0].user.login}](${data[0].user.html_url})\n`
  //     issuesString += issuesClosedString
  //   }
  // } else {
  //   issuesString += `This week, no issues have been created or closed.\n`
  // }
  // if (typeof likedData !== 'undefined') {
  //   issuesLikedString += `The issue most liked this week has been:\n`
  //   issuesLikedString += `:+1: #${likedData.number} [${likedData.title}](${likedData.html_url}), by [${likedData.user.login}](${likedData.user.html_url})\n`
  //   issuesLikedString += `It received :+1: x${likedData.reactions['+1']}, :smile: x${likedData.reactions.laugh}, :tada: x${likedData.reactions.hooray} and :heart: x${likedData.reactions.heart}.\n`
  // } else {
  //   issuesLikedString = ``
  // }
  // if (typeof noisyData !== 'undefined') {
  //   issuesNoisyString += `The issue most discussed this week has been:\n`
  //   issuesNoisyString += `:speaker: #${noisyData.number} [${noisyData.title}](${noisyData.html_url}), by [${noisyData.user.login}](${noisyData.user.html_url})\n`
  //   issuesNoisyString += `It received ${noisyData.comments} comments.\n`
  // } else {
  //   issuesNoisyString = ``
  // }
  // issuesString += issuesLikedString + issuesNoisyString
  return issuesString
}
