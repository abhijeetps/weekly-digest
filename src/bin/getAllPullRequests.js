
module.exports = async (context, {owner, repo}) => {
  // method returns all the pull requests
  console.log('In getAllPullRequests.js...')
  let pullRequests = await context.github.paginate(
    context.github.pullRequests.getAll({
      owner,
      repo,
      state: 'all',
      per_page: 100
    }),
    res => res.data
  )
  return pullRequests
}
