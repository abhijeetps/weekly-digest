test('that we can run tests', () => {
  // your real tests go here
  expect(1 + 2 + 3).toBe(6)
})

const markdownStargazers = require('./../../src/markdown/markdownStargazers')

const emptyStargazers = require('./../payload/emptyStargazers')
const payload = jest.fn().mockReturnValue(emptyStargazers)

test('that checks return string if array is empty', () => {
  expect(markdownStargazers(payload)).toContain('# STARGAZERS')
  expect(markdownStargazers(payload)).toContain('This week, no user has starred this repository.')
})
