
const moment = require('moment')

module.exports = {
  headDate: () => {
    return moment.utc().set({'hour': 0, 'minute': 0, 'second': 0, 'millisecond': 0}).format()
  },
  tailDate: () => {
    return moment.utc().set({'hour': 0, 'minute': 0, 'second': 0, 'millisecond': 0}).subtract(7, 'days').format()
  },
  getDayBeforeDate: (date) => {
    return moment(date).subtract(1, 'days').format()
  }
}
