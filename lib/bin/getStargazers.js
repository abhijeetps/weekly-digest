module.exports = (context, {owner, repo}) => {
  console.log('In getStargazers')
  console.log(`${owner}/${repo}`)
  return context.github.activity.getStargazersForRepo({
    owner,
    repo
  })
}
