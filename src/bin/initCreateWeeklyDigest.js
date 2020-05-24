const getConfig = require('probot-config');

const moment = require('moment');
const getDate = require('../markdown/getDate');
const getNumDayFromLongDay = require('../markdown/getNumDayFromLongDay');
const fixConfig = require('../markdown/fixConfig');
const weeklyDigest = require('./weeklyDigest');
const checkDuplicates = require('../markdown/checkDuplicates');

const initCreateWeeklyDigest = async (context) => {
  const { owner, repo } = context.repo();
  context.log.debug(`Repository: ${owner}/${repo}`);
  const headDate = getDate.headDate();
  const tailDate = getDate.tailDate();
  const { hasDuplicates, url } = await checkDuplicates(context, { owner, repo, headDate });
  if (hasDuplicates) {
    context.log.debug(`Weekly Digest for this week has already been published for ${owner}/${repo}`);
    context.log.debug(`URL: ${url}`);
    return;
  }
  let config = await getConfig(context, 'weekly-digest.yml');
  config = fixConfig(config);
  context.log.debug(`Publish Day: ${getNumDayFromLongDay(config.publishDay)}, Today: ${moment.utc().day()}`);
  if (moment.utc().day() === getNumDayFromLongDay(config.publishDay)) {
    await weeklyDigest(context, {
      owner, repo, headDate, tailDate,
    }, config);
  }
};

module.exports = {
  initCreateWeeklyDigest,
};
