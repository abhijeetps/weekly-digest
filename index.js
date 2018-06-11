const createScheduler = require('probot-scheduler')
const getConfig = require('probot-config')
const createWeeklyDigestLabel = require('./lib/markdown/createWeeklyDigestLabel')
const createConfigYML = require('./lib/markdown/createConfigYML')
const weeklyDigest = require('./lib/weeklyDigest')

module.exports = (app) => {
  app.log('Weekly Digest app is ready to generate Weekly Reports!')
  createScheduler(app, {interval: 60 * 1000}) // 1 hour
  app.on('installation.created', async (context) => {
    const [owner, repo] = await context.payload.repositories[0].full_name.split('/')
    createWeeklyDigestLabel(context, {owner, repo})
    createConfigYML(context, {owner, repo})
    const config = await getConfig(context, 'weekly-digest.yml')
    weeklyDigest(context, {owner, repo}, config)
  })
  app.on('schedule.repository', async (context) => {
    const { owner, repo } = context.repo()
    const config = await getConfig(context, 'weekly-digest.yml')
    weeklyDigest(context, {owner, repo}, config)
  })
}
