module.exports = async (context, {owner, repo}) => {
  let stargazers = await context.github.activity.getStargazersForRepo({
    owner,
    repo
  })
  return stargazers
}
