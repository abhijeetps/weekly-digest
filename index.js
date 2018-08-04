const createScheduler = require('probot-scheduler')
const getConfig = require('probot-config')
const moment = require('moment')

// const createWeeklyDigestLabel = require('./src/markdown/createWeeklyDigestLabel')
const postCreateLabel = require('./src/bin/postCreateLabel')
const weeklyDigest = require('./src/weeklyDigest')
const getDate = require('./src/markdown/getDate')
const defaultConfig = require('./src/markdown/defaultConfig')
const getNumDayFromLongDay = require('./src/markdown/getNumDayFromLongDay')
const fixConfig = require('./src/markdown/fixConfig')
const checkDuplicates = require('./src/markdown/checkDuplicates')

// 12 hours
const interval = 12 * 60 * 60 * 1000
const events = ['installation.created', 'installation_repositories']

module.exports = (app) => {
  app.log('Weekly Digest app is running successfully.')

  app.on(events, async (context) => {
    app.log('App has been successfully installed.')
    app.log('App is running as per ' + context.event)
    app.log('Local Time: ' + moment().format())
    const headDate = getDate.headDate()
    const tailDate = getDate.tailDate()
    const config = defaultConfig
    let repoList = []
    if (context.event === 'installation' && context.payload.action === 'created') {
      repoList = context.payload.repositories
      console.log(repoList)
    } else if (context.event === 'installation_repositories') {
      repoList = context.payload.repositories_added
    }
    repoList.forEach(async (item) => {
      const [owner, repo] = item.full_name.split('/')
      app.log(`Repository: ${owner}/${repo}`)
      await postCreateLabel(context, {owner, repo, name: 'weekly-digest', color: '9C27B0', description: ''})
      await weeklyDigest(context, {owner, repo, headDate, tailDate}, config)
    })
  })

  createScheduler(app, {interval: interval})
  app.on('schedule.repository', async (context) => {
    app.log(`App is running as per schedule.repository`)
    app.log('Local Time: ' + moment().format())
    const { owner, repo } = context.repo()
    app.log(`Repository: ${owner}/${repo}`)
    const headDate = getDate.headDate()
    const tailDate = getDate.tailDate()
    let { hasDuplicates, url } = await checkDuplicates(context, {owner, repo, headDate})
    if (hasDuplicates) {
      console.log(`Weekly Digest for this week has already been published for ${owner}/${repo}`)
      console.log(`URL: ` + url)
      return
    }
    let config = await getConfig(context, 'weekly-digest.yml')
    config = fixConfig(config)
    console.log(`Publish Day: ${getNumDayFromLongDay(config.publishDay)}, Today: ${moment.utc().day()}`)
    if (moment.utc().day() === getNumDayFromLongDay(config.publishDay)) {
      await weeklyDigest(context, {owner, repo, headDate, tailDate}, config)
    }
  })
}
