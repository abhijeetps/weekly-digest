const getSearchIssues = require('./../bin/getSearchIssues')
const getDate = require('./getDate')

module.exports = async (context, {owner, repo, headDate}) => {
  console.log('In checkDuplicates.js...')
  let author = 'app/weekly-digest'
  let type = 'issues'
  let date = getDate.getDayBeforeDate(headDate).substr(0, 19)
  let issues = await getSearchIssues(context, {owner, repo, date, author, type})
  let totalCount = issues.data.total_count
  if (totalCount >= 1) {

    return {hasDuplicates: true, url: issues.data.items[0].html_url}
  } else {
    return {hasDuplicates: false, url: undefined}
  }
}
