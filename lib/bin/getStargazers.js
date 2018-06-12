module.exports = async (context, {owner, repo}) => {
  console.log('In getStargazers.js...')
  let stargazers = await context.github.activity.getStargazersForRepo({
    owner,
    repo
  })
  return stargazers
}
