
module.exports = async (context, { owner, repo }) => {
  // method returns all the pull requests
  context.log.debug('In getAllPullRequests.js...');
  const pullRequests = await context.github.paginate(
    context.github.pullRequests.list({
      owner,
      repo,
      state: 'all',
      per_page: 100,
    }),
    (res) => res.data,
  );
  return pullRequests;
};
