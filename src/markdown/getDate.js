
const moment = require('moment');

module.exports = {
  headDate: () => moment.utc().set({
    hour: 0, minute: 0, second: 0, millisecond: 0,
  }).format(),
  tailDate: () => moment.utc().set({
    hour: 0, minute: 0, second: 0, millisecond: 0,
  }).subtract(7, 'days').format(),
  getDayBeforeDate: (date) => moment(date).subtract(1, 'days').format(),
};
