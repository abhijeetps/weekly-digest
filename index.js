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
    context.log.debug('Weekly Digest installed successfully.')
    context.log.debug(`App is running as per ${context.event}`)
    context.log.debug('Local Time: ' + moment().format())
    const headDate = getDate.headDate()
    const tailDate = getDate.tailDate()
    const config = defaultConfig
    let repoList = []
    if (context.event === 'installation' && context.payload.action === 'created') {
      repoList = context.payload.repositories
      context.log.debug(repoList)
    } else if (context.event === 'installation_repositories') {
      repoList = context.payload.repositories_added
    }
    repoList.forEach(async (item) => {
      const [owner, repo] = item.full_name.split('/')
      context.log.debug(`Repository: ${owner}/${repo}`)
      await postCreateLabel(context, {owner, repo, name: 'weekly-digest', color: '9C27B0', description: ''})
      await weeklyDigest(context, {owner, repo, headDate, tailDate}, config)
    })
  })

  createScheduler(app, {interval: interval})
  app.on('schedule.repository', async (context) => {
    context.log.debug(`App is running as per schedule.repository`)
    context.log.debug('Local Time: ' + moment().format())
    const { owner, repo } = context.repo()
    context.log.debug(`Repository: ${owner}/${repo}`)
    const headDate = getDate.headDate()
    const tailDate = getDate.tailDate()
    let { hasDuplicates, url } = await checkDuplicates(context, {owner, repo, headDate})
    if (hasDuplicates) {
      context.log.debug(`Weekly Digest for this week has already been published for ${owner}/${repo}`)
      context.log.debug(`URL: ` + url)
      return
    }
    let config = await getConfig(context, 'weekly-digest.yml')
    config = fixConfig(config)
    context.log.debug(`Publish Day: ${getNumDayFromLongDay(config.publishDay)}, Today: ${moment.utc().day()}`)
    if (moment.utc().day() === getNumDayFromLongDay(config.publishDay)) {
      await weeklyDigest(context, {owner, repo, headDate, tailDate}, config)
    }
  })
}
