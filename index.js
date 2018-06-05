const createScheduler = require('probot-scheduler')
const postCreateLabel = require('./lib/bin/postCreateLabel')
const getAllIssues = require('./lib/bin/getAllIssues')
const getAllPullRequests = require('./lib/bin/getAllPullRequests')
const putCreateFile = require('./lib/bin/putCreateFile')

const markdownWeeklyDigest = require('./lib/markdownWeeklyDigest')

module.exports = (robot) => {
  robot.log('Weekly Digest app is ready to generate Weekly Reports!')
  createScheduler(robot, {interval: 60 * 1000}) // 1 hour
  robot.on('installation.created', async (context) => {
    const [owner, repo] = await context.payload.repositories[0].full_name.split('/')
    postCreateLabel(context, {owner, repo, name: 'weekly-digest', color: '9C27B0'})
    var content = Buffer.from(`# Configuration for weekly-digest - https://github.com/apps/weekly-digest`).toString('base64')
    putCreateFile(context, {
      owner: owner,
      repo: repo,
      path: '.github/weekly-digest.yml',
      message: 'Added .github/weekly-digest.yml',
      content: content
    })
  })
  robot.on('schedule.repository', async (context) => {
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
