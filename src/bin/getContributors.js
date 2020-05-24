
module.exports = async (context, { owner, repo }) => {
  context.log.debug('In listContributors.js...');
  const contributors = await context.github.paginate(
    context.github.repos.listContributors({
      owner,
      repo,
      per_page: 100,
    }),
    (res) => res.data,
  );
  return contributors;
};
