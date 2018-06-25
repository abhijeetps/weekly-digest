module.exports = (context, {owner, repo, name, color, description}) => {
  console.log('In postCreateLabel.js..')
  context.github.issues.createLabel({
    owner,
    repo,
    name: name,
    color: color,
    description: description
  })
}
