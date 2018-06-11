module.exports = async (context, {owner, repo, tailDate}) => {
  // method returns all the issues and pull requests
  console.log('In getAllIssues')
  var issues = await context.github.issues.getForRepo({
    owner,
    repo,
    state: 'all',
    since: tailDate
  })
  return issues
}
