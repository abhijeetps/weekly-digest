module.exports = (context, {owner, repo}) => {
  // method returns all the pull requests
  console.log('In getAllPullRequests')
  var pullRequests = context.github.pullRequests.getAll({
    owner,
    repo,
    state: 'all'
  })
  return pullRequests
}
