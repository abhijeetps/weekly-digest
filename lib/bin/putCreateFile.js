module.exports = (context, {owner, repo, path, message, content}) => {
  console.log('In putCreateFile')
  context.github.repos.createFile({
    owner: owner,
    repo: repo,
    path: '.github/weekly-digest.yml',
    message: 'Added .github/weekly-digest.yml',
    content: content
  })
}
