const createScheduler = require('probot-scheduler')
const getConfig = require('probot-config')
const moment = require('moment')

const createWeeklyDigestLabel = require('./src/markdown/createWeeklyDigestLabel')
const createConfigYML = require('./src/markdown/createConfigYML')
const weeklyDigest = require('./src/weeklyDigest')
const getDate = require('./src/markdown/getDate')
const defaultConfig = require('./src/markdown/defaultConfig')
const getNumDayFromLongDay = require('./src/markdown/getNumDayFromLongDay')
const fixConfig = require('./src/markdown/fixConfig')
const checkDuplicates = require('./src/markdown/checkDuplicates')

// 12 hours
const interval = 12 * 60 * 60 * 1000

module.exports = (app) => {
  app.log('Weekly Digest app is running successfully.')
  app.on('installation.created', async (context) => {
    app.log('App has been successfully installed.')
    app.log('Local Time: ' + moment().format())
    const [owner, repo] = await context.payload.repositories[0].full_name.split('/')
    console.log(`Repository: ${owner}/${repo}`)
    await createWeeklyDigestLabel(context, {owner, repo})
    await createConfigYML(context, {owner, repo})
    const headDate = getDate.headDate()
    const tailDate = getDate.tailDate()
    const config = defaultConfig
    weeklyDigest(context, {owner, repo, headDate, tailDate}, config)
  })
  createScheduler(app, {interval: interval})
  app.on('schedule.repository', async (context) => {
    console.log(`App is running as per schedule.repository`)
    app.log('Local Time: ' + moment().format())
    const { owner, repo } = context.repo()
    const headDate = getDate.headDate()
    const tailDate = getDate.tailDate()
    let { hasDuplicates, url } = await checkDuplicates(context, {owner, repo, headDate})
    if (hasDuplicates) {
      console.log(`Weekly Digest for this week has already been published for ${owner}/${repo}`)
      console.log(`URL: ` + url)
    } else {
      let config = await getConfig(context, 'weekly-digest.yml')
      config = fixConfig(config)
      console.log(`Publish Day: ${getNumDayFromLongDay(config.publishDay)}, Today: ${moment().day()}`)
      if (moment().day() === getNumDayFromLongDay(config.publishDay)) {
        weeklyDigest(context, {owner, repo, headDate, tailDate}, config)
      }
    }
  })
}
