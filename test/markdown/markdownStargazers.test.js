
const markdownStargazers = require('./../../src/markdown/markdownStargazers')

const moment = require('moment')
const MockDate = require('mockdate')

MockDate.set(moment('2018-03-24'))

const emptyStargazers = require('./../payload/empty')
const stargazers = require('./../payload/stargazers')
const stargazer = require('./../payload/stargazer')

test('that checks return string if there are no stargazers', () => {
  let tailDate = moment().subtract(7, 'days').format()
  expect(markdownStargazers(emptyStargazers, tailDate)).toContain('# STARGAZERS')
  expect(markdownStargazers(emptyStargazers, tailDate)).toContain('This week, no user has starred this repository.')
})

test('that checks return string if there are some stargazers', () => {
  let tailDate = moment().subtract(7, 'days').format()
  expect(markdownStargazers(stargazers, tailDate)).toContain('# STARGAZERS')
  expect(markdownStargazers(stargazers, tailDate)).toContain('This week, 2 users have starred this repository.')
  expect(markdownStargazers(stargazers, tailDate)).toContain('They are [gr2m](https://github.com/gr2m), and [wilhelmklopp](https://github.com/wilhelmklopp).')
})

test('that checks return string if there is one stargazers', () => {
  let tailDate = moment().subtract(7, 'days').format()
  expect(markdownStargazers(stargazer, tailDate)).toContain('# STARGAZERS')
  expect(markdownStargazers(stargazer, tailDate)).toContain('This week, [aps120797](https://github.com/aps120797) has starred the repository.')
})
