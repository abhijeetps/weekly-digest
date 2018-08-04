
module.exports = async (context, {owner, repo, date, author, type}) => {
  console.log('In getSearchIssues.js...')
  let searchIssues = await context.github.paginate(
    context.github.search.issues({
      q: `repo:${owner}/${repo} type:${type} author:${author} created:>=${date}`,
      per_page: 100
    }),
    res => res.data
  )
  return searchIssues
}
