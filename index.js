const getAllIssues = require('./lib/getAllIssues')
const getAllPullRequests = require('./lib/getAllPullRequests')

module.exports = (robot) => {
  robot.log('Yay, the app was loaded!')
  const supportedEvents = [
    'pull_request',
    'issues'
  ]
  robot.on(supportedEvents, async context => {
    const event = context.event
    const action = context.payload.action
    robot.log('Event: ' + event + ((typeof action === 'undefined' || action === null) ? '' : (', Action: ' + action)))
    if (event === 'pull_request' && action === 'opened') {
      // do something with proposed pull request
    } else if (event === 'issues' && action === 'closed') {
      // do something with closed issues
    } else if (event === 'issues' && action === 'opened') {
      // do something with opened issues
    }
  })
}
