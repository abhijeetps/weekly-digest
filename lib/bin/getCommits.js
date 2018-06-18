module.exports = async (context, {owner, repo, tailDate}) => {
  // method returns all the issues and pull requests
  console.log('In getCommits.js...')
  var commits = await context.github.repos.getCommits({
    owner,
    repo,
    since: tailDate
  })
  return commits
}
