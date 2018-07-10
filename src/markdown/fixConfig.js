const defaultConfig = require('./defaultConfig')

module.exports = (config) => {
  if (config === null) {
    config = defaultConfig
  } else {
    if (!config.hasOwnProperty('publishDay')) {
      config.publishDay = 0
    }
    if (!config.hasOwnProperty('canPublishIssues')) {
      config.canPublishIssues = true
    }
    if (!config.hasOwnProperty('canPublishPullRequests')) {
      config.canPublishPullRequests = true
    }
    if (!config.hasOwnProperty('canPublishContributors')) {
      config.canPublishContributors = true
    }
    if (!config.hasOwnProperty('canPublishStargazers')) {
      config.canPublishStargazers = true
    }
    if (!config.hasOwnProperty('canPublishCommits')) {
      config.canPublishCommits = true
    }
    if (!config.hasOwnProperty('canPublishReleases')) {
      config.canPublishReleases = true
    }
  }

  return config
}
