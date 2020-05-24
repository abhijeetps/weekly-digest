
module.exports = async (context, { owner, repo }) => {
  context.log.debug('In getContributors.js...');
  const contributors = await context.github.paginate(
    context.github.repos.getContributors({
      owner,
      repo,
      per_page: 100,
    }),
    (res) => res.data,
  );
  return contributors;
};
