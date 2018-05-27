module.exports = (context, {issues}) => {
  // console.log(issues)
  console.log('In markdownIssues')
  var issuesString = ''
  var issuesOpenString = '## OPEN ISSUES \n'
  var issuesClosedString = '## CLOSED ISSUES \n'
  var data = issues.data
  var countIssue = data.length
  var countIssueOpen = 0
  var countIssueClosed = 0
  var i
  issuesString += '# ISSUES \n'
  issuesString += 'This week, ' + countIssue + ' issues were created. Of these, ' + countIssueClosed + ' issues have been closed and ' + countIssueOpen + ' issues are still open. \n'
  for (i = 0; i < data.length; i++) {
    if (data[i].state === 'open') {
      countIssueOpen++
      issuesOpenString += ':green_heart: #' + data[i].number + ' [' + data[i].title + '](' + data[i].html_url + ') \n'
    } else if (data[i].state === 'close') {
      countIssueClosed++
      issuesClosedString += ':heart: #' + data[i].number + ' [' + data[i].title + '](' + data[i].html_url + ') \n'
    }
  }
  issuesString += issuesOpenString + issuesClosedString
  return issuesString
}
