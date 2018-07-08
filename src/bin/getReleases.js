module.exports = async (context, {owner, repo}) => {
  console.log('In getReleases.js...')
  let releases = await context.github.repos.getReleases({
    owner,
    repo
  })
  return releases
}
