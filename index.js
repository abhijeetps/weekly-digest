const getAllIssues = require('./lib/bin/getAllIssues')
const getAllPullRequests = require('./lib/bin/getAllPullRequests')

const postWeeklyDigest = require('./lib/postWeeklyDigest')

module.exports = (robot) => {
  robot.log('Yay, the app was loaded!')
  // const supportedEvents = [
  //   'pull_request',
  //   'issues'
  // ]
  robot.on('*', async context => {
    const owner = await context.payload.repository.owner.login
    const repo = await context.payload.repository.name
    const issues = await getAllIssues(context, {owner, repo})
    const pullRequests = await getAllPullRequests(context, {owner, repo})
    // console.log(issues)
    // console.log(pullRequests)
    postWeeklyDigest.postWeeklyDigest(context, {
      issues,
      pullRequests
    })
  })
}
