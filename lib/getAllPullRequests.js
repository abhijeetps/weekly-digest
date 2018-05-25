module.exports = (context, {owner, repo}) => {
    // method returns all the issues
  return context.github.pullRequests.getAll({
    owner,
    repo
  })
}
