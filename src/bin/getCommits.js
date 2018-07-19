
module.exports = async (context, {owner, repo, tailDate}) => {
  console.log('In getCommits.js...')
  let commits = await context.github.repos.getCommits({
    owner,
    repo,
    since: tailDate,
    per_page: 100
  })
  return commits
}
