test('that we can run tests', () => {
  // your real tests go here
  expect(1 + 2 + 3).toBe(6)
})

const markdownReleases = require('./../../src/markdown/markdownReleases')

const emptyReleases = require('./../payload/emptyReleases')
const payload = jest.fn().mockReturnValue(emptyReleases)

test('that checks return string if array is empty', () => {
  expect(markdownReleases(payload)).toContain('# RELEASES')
  expect(markdownReleases(payload)).toContain('This week, no releases were published.')
})
