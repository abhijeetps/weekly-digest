
module.exports = async (context, { owner, repo, tailDate }) => {
  // method returns all the issues and pull requests
  context.log.debug('In getAllIssues.js...');
  const issues = await context.github.paginate(
    context.github.issues.listForRepo({
      owner,
      repo,
      state: 'all',
      since: tailDate,
      per_page: 100,
    }),
    (res) => res.data,
  );
  return issues;
};
