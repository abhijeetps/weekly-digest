var defaultConfig = require('./defaultConfig')
var putCreateFile = require('./../bin/putCreateFile')

module.exports = (context, {owner, repo}) => {
  console.log('In createConfigYML.js...')
  var content = Buffer.from(
    `# Configuration for weekly-digest - https://github.com/apps/weekly-digest
    publishDay: ${defaultConfig.publishDay}
    canPublishIssues: ${defaultConfig.canPublishIssues}
    canPublishPullRequests: ${defaultConfig.canPublishPullRequests}
    canPublishContributors: ${defaultConfig.canPublishContributors}
    canPublishStargazers: ${defaultConfig.canPublishStargazers}
    canPublishCommits: ${defaultConfig.canPublishCommits}
  `).toString('base64')
  putCreateFile(context, {
    owner: owner,
    repo: repo,
    path: '.github/weekly-digest.yml',
    message: 'Added .github/weekly-digest.yml',
    content: content
  })
}
