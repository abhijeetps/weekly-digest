const getAllIssues = require('./lib/bin/getAllIssues')
const getAllPullRequests = require('./lib/bin/getAllPullRequests')

const markdownWeeklyDigest = require('./lib/markdownWeeklyDigest')
const postCreateLabel = require('./lib/bin/postCreateLabel')

module.exports = (robot) => {
  robot.log('Yay, the app was loaded!')
  const supportedEvents = [
    'pull_request.opened'
  ]
  robot.on('installation.created', async context => {
    const owner = await context.payload.repository.owner.login
    const repo = await context.payload.repository.name
    return postCreateLabel(context, {owner, repo, name: 'weekly-digest', color: '9C27B0', description: 'Issues labeled with this label are Weekly Digests created by Weekly Digest app for GitHub. Visit github.com/probot/weekly-digest to know more.'})
  })
  robot.on(supportedEvents, async context => {
    const owner = await context.payload.repository.owner.login
    const repo = await context.payload.repository.name
    const issues = await getAllIssues(context, {owner, repo})
    const pullRequests = await getAllPullRequests(context, {owner, repo})
    // console.log(issues)
    // console.log(pullRequests)
    return markdownWeeklyDigest(context, {
      owner,
      repo,
      issues,
      pullRequests
    })
  })
}
