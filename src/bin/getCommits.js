module.exports = async (context, {owner, repo, tailDate}) => {
  console.log('In getCommits.js...')
  let commits = await context.github.repos.getCommits({
    owner,
    repo,
    since: tailDate
  })
  return commits
}
