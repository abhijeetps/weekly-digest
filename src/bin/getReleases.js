
module.exports = async (context, { owner, repo }) => {
  context.log.debug('In getReleases.js...');
  const releases = await context.github.paginate(
    context.github.repos.listReleases({
      owner,
      repo,
      per_page: 100,
    }),
    (res) => res.data,
  );
  return releases;
};
