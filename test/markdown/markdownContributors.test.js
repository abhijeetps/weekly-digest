
const moment = require('moment');
const MockDate = require('mockdate');
const markdownContributors = require('../../src/markdown/markdownContributors');

MockDate.set(moment.utc('2018-04-24'));
const headDate = moment().utc().format();
const tailDate = moment().utc().subtract(7, 'days').format();

const commits = require('../payload/commits');

const emptyCommit = commits.emptyCommits.data;
const nullCommit = commits.nullCommits.data;
const uselessCommit = commits.uselessCommits.data;
const allCommits = commits.allCommits.data;
const manyCommits = commits.manyCommits.data;

test('that checks return string if there are no commits', () => {
  expect(markdownContributors(emptyCommit, headDate, tailDate)).toContain('# CONTRIBUTORS');
  expect(markdownContributors(emptyCommit, headDate, tailDate)).toContain('Last week there were no contributors.');
});

test('that checks return string if there are null commits', () => {
  expect(markdownContributors(nullCommit, headDate, tailDate)).toContain('# CONTRIBUTORS');
  expect(markdownContributors(nullCommit, headDate, tailDate)).toContain('Last week there were no contributors.');
});

test('that checks return string if there are useless commits', () => {
  expect(markdownContributors(uselessCommit, headDate, tailDate)).toContain('# CONTRIBUTORS');
  expect(markdownContributors(uselessCommit, headDate, tailDate)).toContain('Last week there were no contributors.');
});

test('that checks returns string of many contributors', () => {
  expect(markdownContributors(manyCommits, headDate, tailDate)).toContain('# CONTRIBUTORS');
  expect(markdownContributors(manyCommits, headDate, tailDate)).toContain('Last week there were 3 contributors.');
  expect(markdownContributors(manyCommits, headDate, tailDate)).toContain(':bust_in_silhouette: [gr2m](https://github.com/gr2m/)');
  expect(markdownContributors(manyCommits, headDate, tailDate)).toContain(':bust_in_silhouette: [wilhelmklopp](https://github.com/wilhelmklopp/)');
  expect(markdownContributors(manyCommits, headDate, tailDate)).toContain('bust_in_silhouette: [abhijeetps](https://github.com/abhijeetps/)');
});

test('that checks return string of some contributors', () => {
  expect(markdownContributors(allCommits, headDate, tailDate)).toContain('# CONTRIBUTORS');
  expect(markdownContributors(allCommits, headDate, tailDate)).toContain('Last week there was 1 contributor.');
  expect(markdownContributors(allCommits, headDate, tailDate)).toContain(':bust_in_silhouette: [abhijeetps](https://github.com/abhijeetps/)');
});
