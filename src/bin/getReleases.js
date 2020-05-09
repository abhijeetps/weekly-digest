
module.exports = async (context, {owner, repo}) => {
  context.log.debug('In getReleases.js...')
  let releases = await context.github.paginate(
    context.github.repos.getReleases({
      owner,
      repo,
      per_page: 100
    }),
    res => res.data
  )
  return releases
}
