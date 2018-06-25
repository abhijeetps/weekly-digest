module.exports = async (context, {owner, repo}) => {
  // method returns all the pull requests
  console.log('In getAllPullRequests.js...')
  var pullRequests = await context.github.pullRequests.getAll({
    owner,
    repo,
    state: 'all'
  })
  return pullRequests
}
