module.exports = (issues) => {
  console.log('In markdownIssues.js...')
  let issuesString = `# ISSUES \n`
  let issuesOpenString = `## OPEN ISSUES \n`
  let issuesClosedString = `## CLOSED ISSUES \n`
  let issuesLikedString = `## LIKED ISSUE \n`
  let issuesNoisyString = `## NOISY ISSUE \n`
  const data = issues.data
  let likedData, noisyData
  let countIssue = 0
  let countIssueOpen = 0
  let countIssueClosed = 0
  let i
  if (typeof data !== 'undefined' && data !== null && data.length != null && data.length > 0) {
    for (i = 0; i < data.length; i++) {
      if (data[i].state === 'open' && data[i].user.type !== 'Bot') {
        countIssueOpen++
      } else if (data[i].state === 'closed' && data[i].user.type !== 'Bot') {
        countIssueClosed++
      }
      if (typeof likedData === 'undefined') {
        if (data[i].reactions.total_count > 0 && data[i].user.type !== 'Bot') {
          likedData = data[i]
        }
      } else if (typeof likedData !== 'undefined') {
        if (data[i].reactions.total_count > likedData.reactions.total_count && data[i].user.type !== 'Bot') {
          likedData = data[i]
        }
      }
      if (typeof noisyData === 'undefined') {
        if (data[i].comments > 0 && data[i].user.type !== 'Bot') {
          noisyData = data[i]
        }
      } else if (typeof noisyData !== 'undefined') {
        if (data[i].comments > noisyData.comments && data[i].user.type !== 'Bot') {
          noisyData = data[i]
        }
      }
    }
  }
  countIssue = countIssueOpen + countIssueClosed
  if (!countIssueOpen) {
    issuesOpenString = ``
  }
  if (!countIssueClosed) {
    issuesClosedString = ``
  }
  if (countIssue > 1) {
    issuesString += `This week, ${countIssue} issues were created. Of these, ${countIssueClosed} issues have been closed and ${countIssueOpen} issues are still open. \n`
    for (i = 0; i < data.length; i++) {
      if (data[i].state === 'open' && data[i].user.type !== 'Bot') {
        issuesOpenString += `:green_heart: #${data[i].number} [${data[i].title}](${data[i].html_url}), by [${data[i].user.login}](${data[i].user.html_url})\n`
      } else if (data[i].state === 'closed' && data[i].user.type !== 'Bot') {
        issuesClosedString += `:heart: #${data[i].number} [${data[i].title}](${data[i].html_url}), by [${data[i].user.login}](${data[i].user.html_url})\n`
      }
    }
    issuesString += issuesOpenString + issuesClosedString
  } else if (countIssue === 1) {
    if (data[0].state === 'open' && data[0].user.type !== 'Bot') {
      issuesString += `This week 1 issue is created.\n`
      issuesClosedString = `## OPEN ISSUE \n`
      issuesOpenString += `:green_heart: #${data[0].number} [${data[0].title}](${data[0].html_url}), by [${data[0].user.login}](${data[0].user.html_url})\n`
      issuesString += issuesOpenString
    } else if (data[0].state === 'closed' && data[0].user.type !== 'Bot') {
      issuesString += `This week 1 issue is closed.\n`
      issuesClosedString = `## CLOSED ISSUE \n`
      issuesClosedString += `:heart: #${data[0].number} [${data[0].title}](${data[0].html_url}), by [${data[0].user.login}](${data[0].user.html_url})\n`
      issuesString += issuesClosedString
    }
  } else {
    issuesString += `This week, no issues have been created or closed.\n`
  }
  if (typeof likedData !== 'undefined') {
    issuesLikedString += `The issue most liked this week has been:\n`
    issuesLikedString += `:+1: #${likedData.number} [${likedData.title}](${likedData.html_url}), by [${likedData.user.login}](${likedData.user.html_url})\n`
    issuesLikedString += `It received :+1: x${likedData.reactions['+1']}, :smile: x${likedData.reactions.laugh}, :tada: x${likedData.reactions.hooray} and :heart: x${likedData.reactions.heart}.\n`
  } else {
    issuesLikedString = ``
  }
  if (typeof noisyData !== 'undefined') {
    issuesNoisyString += `The issue most discussed this week has been:\n`
    issuesNoisyString += `:speaker: #${noisyData.number} [${noisyData.title}](${noisyData.html_url}), by [${noisyData.user.login}](${noisyData.user.html_url})\n`
    issuesNoisyString += `It received ${noisyData.comments} comments.\n`
  } else {
    issuesNoisyString = ``
  }
  issuesString += issuesLikedString + issuesNoisyString
  return issuesString
}
