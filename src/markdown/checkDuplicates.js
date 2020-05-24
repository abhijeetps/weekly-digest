const getSearchIssues = require('../bin/getSearchIssues');
const getDate = require('./getDate');

module.exports = async (context, { owner, repo, headDate }) => {
  context.log.debug('In checkDuplicates.js...');
  const author = 'app/weekly-digest';
  const type = 'issues';
  const date = getDate.getDayBeforeDate(headDate).substr(0, 19);
  const issues = await getSearchIssues(context, {
    owner, repo, date, author, type,
  });
  const totalCount = issues.data.total_count;
  if (totalCount >= 1) {
    return { hasDuplicates: true, url: issues.data.items[0].html_url };
  }
  return { hasDuplicates: false, url: undefined };
};
