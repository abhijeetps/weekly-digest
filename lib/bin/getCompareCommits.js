module.exports = (context, {owner, repo, base, head}) => {
  // method used to compare commits
  console.log('In getCompareCommits')
  return context.github.repos.compareCommits({
    owner,
    repo,
    base,
    head
  })
}
