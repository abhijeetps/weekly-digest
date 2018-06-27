test('that we can run tests', () => {
  // your real tests go here
  expect(1 + 2 + 3).toBe(6)
})

const markdownIssues = require('./../../src/markdown/markdownIssues')

const emptyIssue = require('./../payload/emptyIssue')
const payload = jest.fn().mockReturnValue(emptyIssue)

test('that checks return string if array is empty', () => {
  expect(markdownIssues(payload)).toContain('# ISSUES')
  expect(markdownIssues(payload)).toContain('This week, no issues have been created or closed.')
})
