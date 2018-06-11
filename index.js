const createScheduler = require('probot-scheduler')
const getConfig = require('probot-config')
const createWeeklyDigestLabel = require('./lib/markdown/createWeeklyDigestLabel')
const createConfigYML = require('./lib/markdown/createConfigYML')
const weeklyDigest = require('./lib/weeklyDigest')
const getDate = require('./lib/markdown/getDate')
const defaultConfig = require('./lib/markdown/defaultConfig')

module.exports = (app) => {
  app.log('Weekly Digest app is ready to generate Weekly Reports!')
  createScheduler(app, {interval: 60 * 1000}) // 1 hour
  app.on('installation.created', async (context) => {
    const [owner, repo] = await context.payload.repositories[0].full_name.split('/')
    createWeeklyDigestLabel(context, {owner, repo})
    createConfigYML(context, {owner, repo})
    const headDate = await getDate.headDate()
    const tailDate = await getDate.tailDate()
    const config = await getConfig(context, 'weekly-digest.yml')
    weeklyDigest(context, {owner, repo, headDate, tailDate}, config)
  })
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
    if (currentDate.getDay() === config.publishDay) {
      const { owner, repo } = context.repo()
      // console.log(`Owner: ${owner}, Repo: ${repo}, Config: ${config.publishDay}`)
      // console.log(`Head Date: ${headDate}, Tail Date: ${tailDate}, Current Day: ${currentDate.getDay()}`)
      weeklyDigest(context, {owner, repo, headDate, tailDate}, config)
    }
  })
}
