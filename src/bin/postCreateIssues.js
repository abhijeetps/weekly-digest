module.exports = (context, {owner, repo, title, body, labels}) => {
  // method is used to create issues
  console.log('In postCreateIssues.js...')
  return context.github.issues.create({
    owner,
    repo,
    title,
    body,
    labels
  })
}
