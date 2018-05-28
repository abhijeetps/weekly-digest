module.exports = (context, {issues}) => {
  // console.log(issues)
  console.log('In markdownIssues')
  var issuesString = ''
  var issuesOpenString = '## OPEN ISSUES \n'
  var issuesClosedString = '## CLOSED ISSUES \n'
  const data = issues.data
  var countIssue = data.length
  var countIssueOpen = 0
  var countIssueClosed = 0
  var i
  issuesString += '# ISSUES \n'
  for (i = 0; i < data.length; i++) {
    // console.log(data[i])
    if (data[i].state === 'open') {
      countIssueOpen++
    } else if (data[i].state === 'closed') {
      countIssueClosed++
    }
  }
  if (countIssue > 1) {
    issuesString += 'This week, ' + countIssue + ' issues were created. Of these, ' + countIssueClosed + ' issues have been closed and ' + countIssueOpen + ' issues are still open. \n'
    for (i = 0; i < data.length; i++) {
      if (data[i].state === 'open') {
        issuesOpenString += ':green_heart: #' + data[i].number + ' [' + data[i].title + '](' + data[i].html_url + '), by [' + data[i].user.login + '](' + data[i].user.html_url + ')\n'
      } else if (data[i].state === 'closed') {
        issuesClosedString += ':heart: #' + data[i].number + ' [' + data[i].title + '](' + data[i].html_url + '), by [' + data[i].user.login + '](' + data[i].user.html_url + ')\n'
      }
    }
    issuesString += issuesOpenString + issuesClosedString
  } else if (countIssue === 1) {
    if (data[i].state === 'open') {
      issuesString += 'This week 1 issue is created.'
      issuesOpenString += ':green_heart: #' + data[0].number + ' [' + data[0].title + '](' + data[0].html_url + '), by [' + data[0].user.login + '](' + data[0].user.html_url + ')\n'
      issuesString += issuesOpenString
    } else if (data[i].state === 'closed') {
      issuesString += 'This week 1 issue is closed.'
      issuesClosedString += ':heart: #' + data[0].number + ' [' + data[0].title + '](' + data[0].html_url + '), by [' + data[0].user.login + '](' + data[0].user.html_url + ')\n'
      issuesString += issuesOpenString
    }
  } else {
    issuesString += 'This week, no issues have been created or closed.'
  }
  return issuesString
}
