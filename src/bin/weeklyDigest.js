
const moment = require('moment');

const getLongMonth = require('../markdown/getLongMonth');
const markdownBody = require('../markdown/markdownBody');

const postCreateIssues = require('./postCreateIssues');

module.exports = async (context, {
  owner, repo, headDate, tailDate,
}, config) => {
  context.log.debug('In weeklyDigest.js...');
  const headDateObject = moment(headDate).toObject();
  const tailDateObject = moment(tailDate).toObject();
  const title = `Weekly Digest (${tailDateObject.date} ${getLongMonth(tailDateObject.months)}, ${tailDateObject.years} - ${headDateObject.date} ${getLongMonth(headDateObject.months)}, ${headDateObject.years})`;
  const body = await markdownBody(context, {
    owner, repo, headDate, tailDate,
  }, config);
  const labels = ['weekly-digest'];
  context.log.debug(`${title} \n${labels} \n${body}`);
  postCreateIssues(context, {
    owner, repo, title, body, labels,
  });
  return { title, labels, body };
};
