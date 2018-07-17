
const markdownPullRequests = require('./../../src/markdown/markdownPullRequests')
const moment = require('moment')
const MockDate = require('mockdate')

MockDate.set(moment('2018-03-24'))

const pullRequests = require('./../payload/pullRequests')
const emptyPullRequest = pullRequests.emptyPullRequest
const nullPullRequest = pullRequests.nullPullRequest
const uselessPullRequest = pullRequests.uselessPullRequest
const mergedPullRequest = pullRequests.mergedPullRequest
const openPullRequest = pullRequests.createdPullRequest
const updatedPullRequest = pullRequests.updatedPullRequest
const allPullRequest = pullRequests.allPullRequests

let headDate = moment().format()
let tailDate = moment().subtract(7, 'days').format()

test('that checks return string if the pull requests is empty', () => {
  expect(markdownPullRequests(emptyPullRequest, headDate, tailDate)).toContain('# PULL REQUESTS')
  expect(markdownPullRequests(emptyPullRequest, headDate, tailDate)).toContain('Last week, no pull requests were created, updated or merged.')
})

test('that checks return string if the pull requests is null', () => {
  expect(markdownPullRequests(nullPullRequest, headDate, tailDate)).toContain('# PULL REQUESTS')
  expect(markdownPullRequests(nullPullRequest, headDate, tailDate)).toContain('Last week, no pull requests were created, updated or merged.')
})

test('that checks return string if the pull requests are useless', () => {
  expect(markdownPullRequests(uselessPullRequest, headDate, tailDate)).toContain('# PULL REQUESTS')
  expect(markdownPullRequests(uselessPullRequest, headDate, tailDate)).toContain('Last week, no pull requests were created, updated or merged.')
})

test('that checks return string if there are open pull requests', () => {
  expect(markdownPullRequests(openPullRequest, headDate, tailDate)).toContain('# PULL REQUESTS')
  expect(markdownPullRequests(openPullRequest, headDate, tailDate)).toContain('Last week, 1 pull request was created, updated or merged.')
  expect(markdownPullRequests(openPullRequest, headDate, tailDate)).toContain('## OPEN PULL REQUEST')
  expect(markdownPullRequests(openPullRequest, headDate, tailDate)).toContain('Last week, 1 pull request was opened.')
  expect(markdownPullRequests(openPullRequest, headDate, tailDate)).toContain(':green_heart: #18 [Weekly Digest test18](https://github.com/aps120797/playground/pull/18), by [aps120797](https://github.com/aps120797)')
})

test('that checks return string if there are merged pull requests', () => {
  expect(markdownPullRequests(mergedPullRequest, headDate, tailDate)).toContain('# PULL REQUESTS')
  expect(markdownPullRequests(mergedPullRequest, headDate, tailDate)).toContain('Last week, 1 pull request was created, updated or merged.')
  expect(markdownPullRequests(mergedPullRequest, headDate, tailDate)).toContain('## MERGED PULL REQUEST')
  expect(markdownPullRequests(mergedPullRequest, headDate, tailDate)).toContain('Last week, 1 pull request was merged.')
  expect(markdownPullRequests(mergedPullRequest, headDate, tailDate)).toContain(':purple_heart: #22 [Weekly Digest test22](https://github.com/aps120797/playground/pull/22), by [aps120797](https://github.com/aps120797)')
})

test('that checks return string if there are updated pull requests', () => {
  expect(markdownPullRequests(updatedPullRequest, headDate, tailDate)).toContain('# PULL REQUESTS')
  expect(markdownPullRequests(updatedPullRequest, headDate, tailDate)).toContain('Last week, 1 pull request was created, updated or merged.')
  expect(markdownPullRequests(updatedPullRequest, headDate, tailDate)).toContain('## UPDATED PULL REQUEST')
  expect(markdownPullRequests(updatedPullRequest, headDate, tailDate)).toContain('Last week, 1 pull request was updated.')
  expect(markdownPullRequests(updatedPullRequest, headDate, tailDate)).toContain(':yellow_heart: #14 [Weekly Digest test14](https://github.com/aps120797/playground/pull/14), by [aps120797](https://github.com/aps120797)')
})

test('that checks return string if there are some pull requests', () => {
  expect(markdownPullRequests(allPullRequest, headDate, tailDate)).toContain('# PULL REQUESTS')
  expect(markdownPullRequests(allPullRequest, headDate, tailDate)).toContain('Last week, 3 pull requests were created, updated or merged.')
  expect(markdownPullRequests(allPullRequest, headDate, tailDate)).toContain('## OPEN PULL REQUEST')
  expect(markdownPullRequests(allPullRequest, headDate, tailDate)).toContain('Last week, 1 pull request was opened.')
  expect(markdownPullRequests(allPullRequest, headDate, tailDate)).toContain(':green_heart: #18 [Weekly Digest test18](https://github.com/aps120797/playground/pull/18), by [aps120797](https://github.com/aps120797)')
  expect(markdownPullRequests(allPullRequest, headDate, tailDate)).toContain('## UPDATED PULL REQUEST')
  expect(markdownPullRequests(allPullRequest, headDate, tailDate)).toContain('Last week, 1 pull request was updated.')
  expect(markdownPullRequests(allPullRequest, headDate, tailDate)).toContain(':yellow_heart: #14 [Weekly Digest test14](https://github.com/aps120797/playground/pull/14), by [aps120797](https://github.com/aps120797)')
  expect(markdownPullRequests(allPullRequest, headDate, tailDate)).toContain('## MERGED PULL REQUEST')
  expect(markdownPullRequests(allPullRequest, headDate, tailDate)).toContain('Last week, 1 pull request was merged.')
  expect(markdownPullRequests(allPullRequest, headDate, tailDate)).toContain(':purple_heart: #22 [Weekly Digest test22](https://github.com/aps120797/playground/pull/22), by [aps120797](https://github.com/aps120797)')
})
