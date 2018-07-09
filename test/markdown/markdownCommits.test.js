
const markdownCommits = require('./../../src/markdown/markdownCommits')

const emptyCommits = require('./../payload/empty')
const commits = require('./../payload/commits')
const commit = require('./../payload/commit')

test('that checks return string if there are no commits', () => {
  expect(markdownCommits(emptyCommits)).toContain('# COMMITS')
  expect(markdownCommits(emptyCommits)).toContain('This week, there have been no commits.')
})

test('that checks return string if there are some commits', () => {
  expect(markdownCommits(commits)).toContain('# COMMITS')
  expect(markdownCommits(commits)).toContain('This week, there have been 2 commits in the repository.')
  expect(markdownCommits(commits)).toContain(':hammer_and_wrench: [Weekly-Digest commit test2](https://github.com/aps120797/playground/commit/commit-sha-2) by [aps120797](https://github.com/aps120797/)')
  expect(markdownCommits(commits)).toContain(':hammer_and_wrench: [Weekly-Digest commit test2](https://github.com/aps120797/playground/commit/commit-sha-1) by [aps120797](https://github.com/aps120797/)')
})

test('that checks return string if there is one commit', () => {
  expect(markdownCommits(commit)).toContain('# COMMITS')
  expect(markdownCommits(commit)).toContain('This week, there have been 1 commit in the repository.')
  expect(markdownCommits(commit)).toContain(':hammer_and_wrench: [Weekly-Digest commit test1](https://github.com/aps120797/playground/commit/commit-sha-2) by [aps120797](https://github.com/aps120797/)')
})
