const { isUndefined } = require('../bin/typeCheck');
const { DEFAULT_CONFIG } = require('../bin/constants');


module.exports = (config) => {
  let modifiedConfig = config;

  if (isUndefined(modifiedConfig)) {
    modifiedConfig = DEFAULT_CONFIG;
  } else {
    if (isUndefined(modifiedConfig.publishDay)) {
      modifiedConfig.publishDay = DEFAULT_CONFIG.publishDay;
    }
    if (isUndefined(modifiedConfig.canPublishIssues)) {
      modifiedConfig.canPublishIssues = DEFAULT_CONFIG.canPublishIssues;
    }
    if (isUndefined(modifiedConfig.canPublishPullRequests)) {
      modifiedConfig.canPublishPullRequests = DEFAULT_CONFIG.canPublishPullRequests;
    }
    if (isUndefined(modifiedConfig.canPublishContributors)) {
      modifiedConfig.canPublishContributors = DEFAULT_CONFIG.canPublishContributors;
    }
    if (isUndefined(modifiedConfig.canPublishStargazers)) {
      modifiedConfig.canPublishStargazers = DEFAULT_CONFIG.canPublishContributors;
    }
    if (isUndefined(modifiedConfig.canPublishCommits)) {
      modifiedConfig.canPublishCommits = DEFAULT_CONFIG.canPublishCommits;
    }
    if (isUndefined(modifiedConfig.canPublishReleases)) {
      modifiedConfig.canPublishReleases = DEFAULT_CONFIG.canPublishReleases;
    }
  }
  return modifiedConfig;
};
