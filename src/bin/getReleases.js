module.exports = async (context, {owner, repo}) => {
  console.log('In getReleases.js...')
  var releases = await context.github.repos.getReleases({
    owner,
    repo
  })
  return releases
}
