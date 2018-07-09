const getDate = require('./../../src/markdown/getDate')
const moment = require('moment')
const MockDate = require('mockdate')

MockDate.set(moment('2018-03-24'))

test('that headDate method returns current date', () => {
  let date = moment().format()
  expect(getDate.headDate()).toEqual(date)
})

test('that tailDate method returns current date - 7 days', () => {
  let date = moment().subtract(7, 'days').format()
  expect(getDate.tailDate()).toEqual(date)
})
