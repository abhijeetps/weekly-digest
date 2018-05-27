module.exports = (context, {owner, repo}) => {
  // method returns all the issues
  console.log('In getAllPullRequests')
  return context.github.pullRequests.getAll({
    owner,
    repo
  })
}
