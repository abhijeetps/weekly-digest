const createScheduler = require('probot-scheduler')
const getAllIssues = require('./lib/bin/getAllIssues')
const getAllPullRequests = require('./lib/bin/getAllPullRequests')

const markdownWeeklyDigest = require('./lib/markdownWeeklyDigest')
const postCreateLabel = require('./lib/bin/postCreateLabel')

module.exports = (robot) => {
  robot.log('Weekly Digest app is ready to generate Weekly Reports!')
  createScheduler(robot, {interval: 60 * 60 * 1000})
  robot.on('installation.created', async context => {
    const { owner, repo } = context.repo()
    return postCreateLabel(context, {owner, repo, name: 'weekly-digest', color: '9C27B0', description: 'Issues labeled with this label are Weekly Digests created by Weekly Digest app for GitHub. Visit github.com/probot/weekly-digest to know more.'})
  })
  robot.on('schedule.repository', async context => {
    const { owner, repo } = context.repo()
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
