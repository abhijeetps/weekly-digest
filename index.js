const createScheduler = require('probot-scheduler')
const getConfig = require('probot-config')
const createWeeklyDigestLabel = require('./lib/markdown/createWeeklyDigestLabel')
const createConfigYML = require('./lib/markdown/createConfigYML')
const weeklyDigest = require('./lib/weeklyDigest')
const getDate = require('./lib/markdown/getDate')
const defaultConfig = require('./lib/markdown/defaultConfig')

// 1 day
const interval = 60 * 1000

module.exports = (app) => {
  app.log('Weekly Digest has started running! :)')
  app.on('installation.created', async (context) => {
    console.log('App has been successfully installed.')
    const [owner, repo] = await context.payload.repositories[0].full_name.split('/')
    console.error(`repo: ${owner}/${repo}`)
    try {
      await createWeeklyDigestLabel(context, {owner, repo})
    } catch (error) {
      console.error(error)
    }
    try {
      await createConfigYML(context, {owner, repo})
    } catch (error) {
      console.log(error)
    }
    const headDate = await getDate.headDate()
    const tailDate = await getDate.tailDate()
    const config = await defaultConfig
    weeklyDigest(context, {owner, repo, headDate, tailDate}, config)
  })
  createScheduler(app, {interval: interval})
  app.on('schedule.repository', async (context) => {
    console.log(`App is running as per schedule.repository`)
    const headDate = await getDate.headDate()
    const tailDate = await getDate.tailDate()
    var currentDate = await getDate.getUTCFromISO(headDate)
    var config = await getConfig(context, 'weekly-digest.yml')
    if (config == null) {
      config = defaultConfig
    }
    console.log(`Publish Day: ${config.publishDay}, Today: ${currentDate.getDay()}`)
    if (currentDate.getDay() === config.publishDay) {
      const { owner, repo } = context.repo()
      weeklyDigest(context, {owner, repo, headDate, tailDate}, config)
    }
  })
}
