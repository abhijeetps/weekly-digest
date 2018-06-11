const createScheduler = require('probot-scheduler')
const createWeeklyDigestLabel = require('./lib/markdown/createWeeklyDigestLabel')
const createConfigYML = require('./lib/markdown/createConfigYML')
const weeklyDigest = require('./lib/weeklyDigest')

module.exports = (robot) => {
  robot.log('Weekly Digest app is ready to generate Weekly Reports!')
  createScheduler(robot, {interval: 60 * 1000}) // 1 hour
  robot.on('installation.created', async (context) => {
    const [owner, repo] = await context.payload.repositories[0].full_name.split('/')
    createWeeklyDigestLabel(context, {owner, repo})
    createConfigYML(context, {owner, repo})
    weeklyDigest(context, {owner, repo})
  })
  robot.on('schedule.repository', async (context) => {
    const { owner, repo } = context.repo()
    weeklyDigest(context, {owner, repo})
  })
}
