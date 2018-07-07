
const markdownPullRequests = require('./../../src/markdown/markdownPullRequests')
const moment = require('moment')
const MockDate = require('mockdate')

MockDate.set(moment('2018-03-24'))

const emptyPullRequests = require('./../payload/empty')
const pullRequests = require('./../payload/pullRequests')
const pullRequestOpen = require('./../payload/pullRequestOpen')
const pullRequestMerged = require('./../payload/pullRequestMerged')

test('that checks return string if there are no pull requests', () => {
  let tailDate = moment().subtract(7, 'days').format()
  expect(markdownPullRequests(emptyPullRequests, tailDate)).toContain('# PULL REQUESTS')
  expect(markdownPullRequests(emptyPullRequests, tailDate)).toContain('This week, no pull requests has been proposed by the users.')
})

test('that checks return string if there are pull requests', () => {
  let tailDate = moment().subtract(7, 'days').format()
  expect(markdownPullRequests(pullRequests, tailDate)).toContain('# PULL REQUESTS')
  expect(markdownPullRequests(pullRequests, tailDate)).toContain('This week, 2 pull requests were proposed. Of these, 1 pull requests have been merged and 1 are still open.')
  expect(markdownPullRequests(pullRequests, tailDate)).toContain('## OPEN PRs')
  expect(markdownPullRequests(pullRequests, tailDate)).toContain(':green_heart: #2 [Weekly Digest test2](https://github.com/aps120797/playground/pull/2), by [aps120797](https://github.com/aps120797)')
  expect(markdownPullRequests(pullRequests, tailDate)).toContain('## MERGED PRs')
  expect(markdownPullRequests(pullRequests, tailDate)).toContain(':purple_heart: #1 [Weekly Digest test1](https://github.com/aps120797/playground/pull/1), by [aps120797](https://github.com/aps120797)')
})

test('that checks return string if there is one open pull requests', () => {
  let tailDate = moment().subtract(7, 'days').format()
  expect(markdownPullRequests(pullRequestOpen, tailDate)).toContain('# PULL REQUESTS')
  expect(markdownPullRequests(pullRequestOpen, tailDate)).toContain('This week, 1 pull request has been proposed, which is still open.')
  expect(markdownPullRequests(pullRequestOpen, tailDate)).toContain('## OPEN PRs')
  expect(markdownPullRequests(pullRequestOpen, tailDate)).toContain(':green_heart: #2 [Weekly Digest test2](https://github.com/aps120797/playground/pull/2), by [aps120797](https://github.com/aps120797)')
})

test('that checks return string if there is one merged pull requests', () => {
  let tailDate = moment().subtract(7, 'days').format()
  expect(markdownPullRequests(pullRequestMerged, tailDate)).toContain('# PULL REQUESTS')
  expect(markdownPullRequests(pullRequestMerged, tailDate)).toContain('This week, 1 pull request has been proposed, which has been merged.')
  expect(markdownPullRequests(pullRequestMerged, tailDate)).toContain('## MERGED PRs')
  expect(markdownPullRequests(pullRequestMerged, tailDate)).toContain(':purple_heart: #1 [Weekly Digest test1](https://github.com/aps120797/playground/pull/1), by [aps120797](https://github.com/aps120797)')
})
