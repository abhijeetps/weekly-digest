module.exports = async (context, {owner, repo}) => {
  console.log('In getContributors.js...')
  let contributors = await context.github.repos.getContributors({
    owner,
    repo
  })
  return contributors
}
