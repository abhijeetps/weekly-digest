var postCreateLabel = require('./../bin/postCreateLabel')
module.exports = (context, {owner, repo}) => {
  console.log('In createWeeklyDigestLabel.js...')
  postCreateLabel(context, {
    owner,
    repo,
    name: 'weekly-digest',
    color: '9C27B0'
  })
}
