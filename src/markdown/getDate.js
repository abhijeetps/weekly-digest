const moment = require('moment')

module.exports = {
  headDate: () => {
    console.log('In getDate.js headDate...')
    return moment().set({'hour': 0, 'minute': 0, 'second': 0, 'millisecond': 0}).format()
  },
  tailDate: () => {
    console.log('In getDate.js tailDate...')
    return moment().set({'hour': 0, 'minute': 0, 'second': 0, 'millisecond': 0}).subtract(7, 'days').format()
  }
}
