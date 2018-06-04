module.exports = (context, {owner, repo, name, color, description}) => {
  // method used to create labels
  console.log('In postCreateLabel')
  return context.github.issues.createLabel({
    owner,
    repo,
    name: name,
    color: color,
    description: description
  })
}
