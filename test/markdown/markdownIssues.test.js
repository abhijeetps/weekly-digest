const moment = require('moment')
const MockDate = require('mockdate')
MockDate.set(moment('2018-03-24'))

const markdownIssues = require('./../../src/markdown/markdownIssues')

const issues = require('./../payload/issues')
const emptyIssue = issues.emptyIssue
const openIssue = issues.openIssue
const closedIssue = issues.closedIssue
const uselessIssue = issues.uselessIssue
const likedIssue = issues.likedIssue
const noisyIssue = issues.noisyIssue
const allIssue = issues.allIssue

let headDate = moment().format()
let tailDate = moment().subtract(7, 'days').format()

test('that checks return string if payload is empty', () => {
  expect(markdownIssues(emptyIssue, headDate, tailDate)).toContain('# ISSUES')
  expect(markdownIssues(emptyIssue, headDate, tailDate)).toContain('Last week, no issues were created.')
})

test('that checks return string if all the issues are useless', () => {
  expect(markdownIssues(uselessIssue, headDate, tailDate)).toContain('# ISSUES')
  expect(markdownIssues(uselessIssue, headDate, tailDate)).toContain('Last week, no issues were created.')
})

test('that checks return string if payload has only one data - closed issue', () => {
  expect(markdownIssues(closedIssue, headDate, tailDate)).toContain('# ISSUES')
  expect(markdownIssues(closedIssue, headDate, tailDate)).toContain('Last week 1 issue was created.')
  expect(markdownIssues(closedIssue, headDate, tailDate)).toContain('It is closed now.')
  expect(markdownIssues(closedIssue, headDate, tailDate)).toContain('## CLOSED ISSUES')
  expect(markdownIssues(closedIssue, headDate, tailDate)).toContain(':heart: #4 [Weekly Digest test4](https://github.com/aps120797/playground/issues/4), by [aps120797](https://github.com/aps120797)')
})

test('that checks return string if payload has only one data - open issue', () => {
  expect(markdownIssues(openIssue, headDate, tailDate)).toContain('# ISSUES')
  expect(markdownIssues(openIssue, headDate, tailDate)).toContain('Last week 1 issue was created.')
  expect(markdownIssues(openIssue, headDate, tailDate)).toContain('It is still open.')
  expect(markdownIssues(openIssue, headDate, tailDate)).toContain('## OPEN ISSUES')
  expect(markdownIssues(openIssue, headDate, tailDate)).toContain(':green_heart: #4 [Weekly Digest test4](https://github.com/aps120797/playground/issues/4), by [aps120797](https://github.com/aps120797)')
})

test('that checks return string to test noisy issues', () => {
  expect(markdownIssues(noisyIssue, headDate, tailDate)).toContain('# ISSUES')
  expect(markdownIssues(noisyIssue, headDate, tailDate)).toContain('Last week 2 issues were created.')
  expect(markdownIssues(noisyIssue, headDate, tailDate)).toContain('Of these, 1 issues have been closed and 1 issues are still open.')
  expect(markdownIssues(noisyIssue, headDate, tailDate)).toContain('## OPEN ISSUES')
  expect(markdownIssues(noisyIssue, headDate, tailDate)).toContain(':green_heart: #5 [Weekly Digest test5](https://github.com/aps120797/playground/issues/5), by [aps120797](https://github.com/aps120797)')
  expect(markdownIssues(noisyIssue, headDate, tailDate)).toContain('## CLOSED ISSUES')
  expect(markdownIssues(noisyIssue, headDate, tailDate)).toContain(':heart: #4 [Weekly Digest test4](https://github.com/aps120797/playground/issues/4), by [aps120797](https://github.com/aps120797)')
  expect(markdownIssues(noisyIssue, headDate, tailDate)).toContain('## NOISY ISSUE')
  expect(markdownIssues(noisyIssue, headDate, tailDate)).toContain(':speaker: #4 [Weekly Digest test4](https://github.com/aps120797/playground/issues/4), by [aps120797](https://github.com/aps120797)')
  expect(markdownIssues(noisyIssue, headDate, tailDate)).toContain('It received 7 comments.')
})

test('that checks return string to test liked issues', () => {
  expect(markdownIssues(likedIssue, headDate, tailDate)).toContain('# ISSUES')
  expect(markdownIssues(likedIssue, headDate, tailDate)).toContain('Last week 2 issues were created.')
  expect(markdownIssues(likedIssue, headDate, tailDate)).toContain('Of these, 1 issues have been closed and 1 issues are still open.')
  expect(markdownIssues(likedIssue, headDate, tailDate)).toContain('## OPEN ISSUES')
  expect(markdownIssues(likedIssue, headDate, tailDate)).toContain(':green_heart: #5 [Weekly Digest test5](https://github.com/aps120797/playground/issues/5), by [aps120797](https://github.com/aps120797)')
  expect(markdownIssues(likedIssue, headDate, tailDate)).toContain('## CLOSED ISSUES')
  expect(markdownIssues(likedIssue, headDate, tailDate)).toContain(':heart: #4 [Weekly Digest test4](https://github.com/aps120797/playground/issues/4), by [aps120797](https://github.com/aps120797)')
  expect(markdownIssues(likedIssue, headDate, tailDate)).toContain('## LIKED ISSUE')
  expect(markdownIssues(likedIssue, headDate, tailDate)).toContain(':+1: #4 [Weekly Digest test4](https://github.com/aps120797/playground/issues/4), by [aps120797](https://github.com/aps120797)')
  expect(markdownIssues(likedIssue, headDate, tailDate)).toContain('It received :+1: x3, :smile: x2, :tada: x5 and :heart: x2.')
})

test('that checks return string if payload has some data', () => {
  expect(markdownIssues(allIssue, headDate, tailDate)).toContain('# ISSUES')
  expect(markdownIssues(allIssue, headDate, tailDate)).toContain('Last week 2 issues were created.')
  expect(markdownIssues(allIssue, headDate, tailDate)).toContain('Of these, 1 issues have been closed and 1 issues are still open.')
  expect(markdownIssues(allIssue, headDate, tailDate)).toContain('## OPEN ISSUES')
  expect(markdownIssues(allIssue, headDate, tailDate)).toContain(':green_heart: #6 [Weekly Digest test6](https://github.com/aps120797/playground/issues/6), by [aps120797](https://github.com/aps120797)')
  expect(markdownIssues(allIssue, headDate, tailDate)).toContain('## CLOSED ISSUES')
  expect(markdownIssues(allIssue, headDate, tailDate)).toContain(':heart: #5 [Weekly Digest test5](https://github.com/aps120797/playground/issues/5), by [aps120797](https://github.com/aps120797)')
  expect(markdownIssues(allIssue, headDate, tailDate)).toContain('## LIKED ISSUE')
  expect(markdownIssues(allIssue, headDate, tailDate)).toContain(':+1: #5 [Weekly Digest test5](https://github.com/aps120797/playground/issues/5), by [aps120797](https://github.com/aps120797)')
  expect(markdownIssues(allIssue, headDate, tailDate)).toContain('It received :+1: x2, :smile: x3, :tada: x1 and :heart: x2.')
  expect(markdownIssues(allIssue, headDate, tailDate)).toContain('## NOISY ISSUE')
  expect(markdownIssues(allIssue, headDate, tailDate)).toContain(':speaker: #6 [Weekly Digest test6](https://github.com/aps120797/playground/issues/6), by [aps120797](https://github.com/aps120797)')
  expect(markdownIssues(allIssue, headDate, tailDate)).toContain('It received 6 comments.')
})
