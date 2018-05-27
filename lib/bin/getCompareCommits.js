module.exports = (context, {owner, repo, base, head}) => {
  // method returns all the issues
  console.log('In getCompareCommits')
  return context.github.repos.compareCommits({
    owner,
    repo,
    base,
    head
  })
}
