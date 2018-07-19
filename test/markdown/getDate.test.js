
const getDate = require('./../../src/markdown/getDate')

const moment = require('moment')
const MockDate = require('mockdate')
MockDate.set(moment.utc('2018-04-24'))

test('that headDate method returns current date', () => {
  let date = moment.utc().format()
  expect(getDate.headDate()).toEqual(date)
})

test('that tailDate method returns current date - 7 days', () => {
  let date = moment.utc().subtract(7, 'days').format()
  expect(getDate.tailDate()).toEqual(date)
})

test('that checks if getDayBeforeDate method returns day before today', () => {
  let date = moment.utc().subtract(1, 'days').format()
  let testDate = moment.utc('2018-04-24')
  expect(getDate.getDayBeforeDate(testDate)).toEqual(date)
})
