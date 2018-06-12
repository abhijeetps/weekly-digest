module.exports = async (context, {owner, repo}) => {
  let watchers = await context.github.activity.getWatchersForRepo({
    owner,
    repo
  })
  return watchers
}
