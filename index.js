const createScheduler = require('probot-scheduler')
const getConfig = require('probot-config')
const createWeeklyDigestLabel = require('./lib/markdown/createWeeklyDigestLabel')
const createConfigYML = require('./lib/markdown/createConfigYML')
const weeklyDigest = require('./lib/weeklyDigest')
const getDate = require('./lib/markdown/getDate')
const defaultConfig = require('./lib/markdown/defaultConfig')

module.exports = (app) => {
  app.log('Weekly Digest app is ready to generate Weekly Reports!')
  app.on('installation.created', async (context) => {
    console.log('App installed. installation.created triggered.')
    const [owner, repo] = await context.payload.repositories[0].full_name.split('/')
    console.log(owner + '/' + repo)
    createWeeklyDigestLabel(context, {owner, repo})
    createConfigYML(context, {owner, repo})
    const headDate = await getDate.headDate()
    const tailDate = await getDate.tailDate()
    const config = await getConfig(context, 'weekly-digest.yml')
    weeklyDigest(context, {owner, repo, headDate, tailDate}, config)
  })
  createScheduler(app, {interval: 60 * 1000}) // 1 hour
  app.on('schedule.repository', async (context) => {
    console.log(`App is running as per schedule.repository`)
    const headDate = await getDate.headDate()
    const tailDate = await getDate.tailDate()
    // console.log(`${headDate}`)
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
