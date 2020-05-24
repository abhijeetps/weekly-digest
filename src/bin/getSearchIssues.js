
module.exports = async (context, {
  owner, repo, date, author, type,
}) => {
  context.log.debug('In getSearchIssues.js...');
  const searchIssues = await context.github.search.issues({
    q: `repo:${owner}/${repo} type:${type} author:${author} created:>=${date}`,
    per_page: 100,
  });
  return searchIssues;
};
