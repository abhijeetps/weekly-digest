const createScheduler = require('probot-scheduler');
const moment = require('moment');

const { INSTALLATION_EVENTS, INTERVAL, SCHEDULE_REPOSITORY_EVENT } = require('./src/bin/constants');
const { manageAppInstallation } = require('./src/bin/manageAppInstallation');
const { initCreateWeeklyDigest } = require('./src/bin/initCreateWeeklyDigest');

module.exports = (app) => {
  app.log('Weekly Digest app is running successfully.');

  app.on(INSTALLATION_EVENTS, async (context) => {
    context.log.debug('Weekly Digest installed successfully.');
    context.log.debug(`App is running as per ${context.event}`);
    context.log.debug(`Local Time: ${moment().format()}`);
    await manageAppInstallation(context);
  });

  createScheduler(app, { interval: INTERVAL });
  app.on(SCHEDULE_REPOSITORY_EVENT, async (context) => {
    context.log.debug('App is running as per schedule.repository');
    context.log.debug(`Local Time: ${moment().format()}`);
    await initCreateWeeklyDigest(context);
  });
};
