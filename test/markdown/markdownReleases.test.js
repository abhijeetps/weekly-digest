const markdownReleases = require('./../../src/markdown/markdownReleases')

const moment = require('moment')
const MockDate = require('mockdate')

MockDate.set(moment('2018-03-24'))

const emptyReleases = require('./../payload/empty')
const releases = require('./../payload/releases')
const release = require('./../payload/release')

test('that checks return string if there are no releases', () => {
  let tailDate = moment().subtract(7, 'days').format()
  expect(markdownReleases(emptyReleases, tailDate)).toContain('# RELEASES')
  expect(markdownReleases(emptyReleases, tailDate)).toContain('This week, no releases were published.')
})

test('that checks return string if there are some releases', () => {
  let tailDate = moment().subtract(7, 'days').format()
  expect(markdownReleases(releases, tailDate)).toContain('# RELEASES')
  expect(markdownReleases(releases, tailDate)).toContain('This week, 2 releases were published.')
  expect(markdownReleases(releases, tailDate)).toContain(':rocket: v1.0.0 [Majar Release test2](https://github.com/aps120797/playground/releases/tag/v1.0.0)')
  expect(markdownReleases(releases, tailDate)).toContain(':rocket: v0.1.1 [Minor Patch Release test1](https://github.com/aps120797/playground/releases/tag/v0.1.1)')
})

test('that checks return string if there is one release', () => {
  let tailDate = moment().subtract(7, 'days').format()
  expect(markdownReleases(release, tailDate)).toContain('# RELEASES')
  expect(markdownReleases(release, tailDate)).toContain('This week, 1 release was published.')
  expect(markdownReleases(release, tailDate)).toContain(':rocket: v1.0.0 [Majar Release test2](https://github.com/aps120797/playground/releases/tag/v1.0.0)')
})
