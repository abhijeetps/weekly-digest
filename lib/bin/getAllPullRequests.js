module.exports = (context, {owner, repo}) => {
  // method returns all the pull requests
  console.log('In getAllPullRequests')
  return context.github.pullRequests.getAll({
    owner,
    repo,
    state: 'all'
  })
}
