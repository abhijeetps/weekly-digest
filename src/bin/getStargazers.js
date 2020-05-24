
module.exports = async (context, { owner, repo }) => {
  context.log.debug('In getStargazers.js...');
  const stargazers = await context.github.paginate(
    context.github.activity.listStargazersForRepo({
      owner,
      repo,
      per_page: 100,
    }),
    (res) => res.data,
  );
  return stargazers;
};
