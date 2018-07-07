test('that we can run tests', () => {
  // your real tests go here
  expect(1 + 2 + 3).toBe(6)
})

const markdownIssues = require('./../../src/markdown/markdownIssues')

const emptyIssue = require('./../payload/empty')
const issues = require('./../payload/issues')
const issueOpen = require('./../payload/issueOpen')
const issueClosed = require('./../payload/issueClosed')

test('that checks return string if payload is empty', () => {
  expect(markdownIssues(emptyIssue)).toContain('# ISSUES')
  expect(markdownIssues(emptyIssue)).toContain('This week, no issues have been created or closed.')
})

test('that checks return string if payload has some data', () => {
  expect(markdownIssues(issues)).toContain('# ISSUES')
  expect(markdownIssues(issues)).toContain('This week, 4 issues were created. Of these, 2 issues have been closed and 2 issues are still open.')
  expect(markdownIssues(issues)).toContain('## OPEN ISSUES')
  expect(markdownIssues(issues)).toContain(':green_heart: #4 [Weekly Digest test4](https://github.com/aps120797/playground/issues/4), by [aps120797](https://github.com/aps120797)')
  expect(markdownIssues(issues)).toContain(':green_heart: #2 [Weekly Digest test2](https://github.com/aps120797/playground/issues/2), by [aps120797](https://github.com/aps120797)')
  expect(markdownIssues(issues)).toContain('## CLOSED ISSUES')
  expect(markdownIssues(issues)).toContain(':heart: #3 [Weekly Digest test3](https://github.com/aps120797/playground/issues/3), by [aps120797](https://github.com/aps120797)')
  expect(markdownIssues(issues)).toContain(':heart: #1 [Weekly Digest test1](https://github.com/aps120797/playground/issues/1), by [aps120797](https://github.com/aps120797)')
  expect(markdownIssues(issues)).toContain('## LIKED ISSUE')
  expect(markdownIssues(issues)).toContain(':+1: #1 [Weekly Digest test1](https://github.com/aps120797/playground/issues/1), by [aps120797](https://github.com/aps120797)')
  expect(markdownIssues(issues)).toContain('It received :+1: x1, :smile: x1, :tada: x1 and :heart: x1.')
  expect(markdownIssues(issues)).toContain('## NOISY ISSUE')
  expect(markdownIssues(issues)).toContain(':speaker: #2 [Weekly Digest test2](https://github.com/aps120797/playground/issues/2), by [aps120797](https://github.com/aps120797)')
  expect(markdownIssues(issues)).toContain('It received 4 comments.')
})

test('that checks return string if payload has only one data - closed issue', () => {
  expect(markdownIssues(issueClosed)).toContain('# ISSUES')
  expect(markdownIssues(issueClosed)).toContain('This week 1 issue is closed.')
  expect(markdownIssues(issueClosed)).toContain('## CLOSED ISSUE')
  expect(markdownIssues(issueClosed)).toContain(':heart: #1 [Weekly Digest test1](https://github.com/aps120797/playground/issues/1), by [aps120797](https://github.com/aps120797)')
})

test('that checks return string if payload has only one data - open issue', () => {
  expect(markdownIssues(issueOpen)).toContain('# ISSUES')
  expect(markdownIssues(issueOpen)).toContain('This week 1 issue is created.')
  expect(markdownIssues(issueOpen)).toContain('## OPEN ISSUE')
  expect(markdownIssues(issueOpen)).toContain(':green_heart: #1 [Weekly Digest test1](https://github.com/aps120797/playground/issues/1), by [aps120797](https://github.com/aps120797)')
})
