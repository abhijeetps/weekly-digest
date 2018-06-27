test('that we can run tests', () => {
  // your real tests go here
  expect(1 + 2 + 3).toBe(6)
})

const markdownCommits = require('./../../src/markdown/markdownCommits')

const emptyCommits = require('./../payload/empty')
const payload = jest.fn().mockReturnValue(emptyCommits)

test('that checks return string if array is empty', () => {
  expect(markdownCommits(payload)).toContain('# COMMITS')
  expect(markdownCommits(payload)).toContain('This week, there have been no commits.')
})
