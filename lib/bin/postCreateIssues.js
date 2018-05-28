module.exports = (context, {owner, repo, title, body, labels}) => {
  // method is used to create issues
  return context.github.issues.create({
    owner,
    repo,
    title,
    body,
    labels
  })
}
