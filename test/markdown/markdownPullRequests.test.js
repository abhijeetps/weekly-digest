test('that we can run tests', () => {
  // your real tests go here
  expect(1 + 2 + 3).toBe(6)
})

const markdownPullRequests = require('./../../src/markdown/markdownPullRequests')

const emptyPullRequests = require('./../payload/empty')
const payload = jest.fn().mockReturnValue(emptyPullRequests)

test('that checks return string if array is empty', () => {
  expect(markdownPullRequests(payload)).toContain('# PULL REQUESTS')
  expect(markdownPullRequests(payload)).toContain('This week, no pull requests has been proposed by the users.')
})
