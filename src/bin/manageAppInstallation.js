const getDate = require('../markdown/getDate');
const weeklyDigest = require('./weeklyDigest');
const postCreateLabel = require('./postCreateLabel');
const { DEFAULT_CONFIG } = require('./constants');

const manageAppInstallation = async (context) => {
  const headDate = getDate.headDate();
  const tailDate = getDate.tailDate();
  const config = DEFAULT_CONFIG;
  let repoList = [];
  if (context.event === 'installation' && context.payload.action === 'created') {
    repoList = context.payload.repositories;
    context.log.debug(repoList);
  } else if (context.event === 'installation_repositories') {
    repoList = context.payload.repositories_added;
  }
  repoList.forEach(async (item) => {
    const [owner, repo] = item.full_name.split('/');
    context.log.debug(`Repository: ${owner}/${repo}`);
    await postCreateLabel(context, {
      owner, repo, name: 'weekly-digest', color: '9C27B0', description: '',
    });
    await weeklyDigest(context, {
      owner, repo, headDate, tailDate,
    }, config);
  });
};

module.exports = {
  manageAppInstallation,
};
