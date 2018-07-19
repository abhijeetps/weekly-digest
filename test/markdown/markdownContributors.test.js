
const markdownContributors = require('./../../src/markdown/markdownContributors')

const moment = require('moment')
const MockDate = require('mockdate')
MockDate.set(moment.utc('2018-04-24'))
let headDate = moment().utc().format()
let tailDate = moment().utc().subtract(7, 'days').format()

const commits = require('./../payload/commits')
let emptyCommit = commits.emptyCommits
let nullCommit = commits.nullCommits
let uselessCommit = commits.uselessCommits
let allCommits = commits.allCommits
let manyCommits = commits.manyCommits

test('that checks return string if there are no commits', () => {
  expect(markdownContributors(emptyCommit, headDate, tailDate)).toContain('# CONTRIBUTORS')
  expect(markdownContributors(emptyCommit, headDate, tailDate)).toContain('Last week there were no contributors.')
})

test('that checks return string if there are null commits', () => {
  expect(markdownContributors(nullCommit, headDate, tailDate)).toContain('# CONTRIBUTORS')
  expect(markdownContributors(nullCommit, headDate, tailDate)).toContain('Last week there were no contributors.')
})

test('that checks return string if there are useless commits', () => {
  expect(markdownContributors(uselessCommit, headDate, tailDate)).toContain('# CONTRIBUTORS')
  expect(markdownContributors(uselessCommit, headDate, tailDate)).toContain('Last week there were no contributors.')
})

test('that checks returns string of many contributors', () => {
  expect(markdownContributors(manyCommits, headDate, tailDate)).toContain('# CONTRIBUTORS')
  expect(markdownContributors(manyCommits, headDate, tailDate)).toContain('Last week there were 3 contributors.')
  expect(markdownContributors(manyCommits, headDate, tailDate)).toContain(':bust_in_silhouette: [gr2m](https://github.com/gr2m/)')
  expect(markdownContributors(manyCommits, headDate, tailDate)).toContain(':bust_in_silhouette: [wilhelmklopp](https://github.com/wilhelmklopp/)')
  expect(markdownContributors(manyCommits, headDate, tailDate)).toContain('bust_in_silhouette: [abhijeetps](https://github.com/abhijeetps/)')
})

test('that checks return string of some contributors', () => {
  expect(markdownContributors(allCommits, headDate, tailDate)).toContain('# CONTRIBUTORS')
  expect(markdownContributors(allCommits, headDate, tailDate)).toContain('Last week there was 1 contributor.')
  expect(markdownContributors(allCommits, headDate, tailDate)).toContain(':bust_in_silhouette: [abhijeetps](https://github.com/abhijeetps/)')
})
