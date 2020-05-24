
const moment = require('moment');
const MockDate = require('mockdate');
const markdownReleases = require('../../src/markdown/markdownReleases');

MockDate.set(moment.utc('2018-04-24'));
const headDate = moment().utc().format();
const tailDate = moment().utc().subtract(7, 'days').format();

const releases = require('../payload/releases');

const emptyReleases = releases.emptyReleases.data;
const nullReleases = releases.nullReleases.data;
const uselessReleases = releases.uselessReleases.data;
const manyReleases = releases.manyReleases.data;
const allReleases = releases.allReleases.data;
const nullNameReleases = releases.nullNameReleases.data;

test('that checks return string if the releases data is empty', () => {
  expect(markdownReleases(emptyReleases, headDate, tailDate)).toContain('# RELEASES');
  expect(markdownReleases(emptyReleases, headDate, tailDate)).toContain('Last week there were no releases.');
});

test('that checks return string if the releases data is null', () => {
  expect(markdownReleases(nullReleases, headDate, tailDate)).toContain('# RELEASES');
  expect(markdownReleases(nullReleases, headDate, tailDate)).toContain('Last week there were no releases.');
});

test('that checks return string if the releases data is useless', () => {
  expect(markdownReleases(uselessReleases, headDate, tailDate)).toContain('# RELEASES');
  expect(markdownReleases(uselessReleases, headDate, tailDate)).toContain('Last week there were no releases.');
});

test('that checks return string if there are many releases', () => {
  expect(markdownReleases(manyReleases, headDate, tailDate)).toContain('# RELEASES');
  expect(markdownReleases(manyReleases, headDate, tailDate)).toContain('Last week there were 3 releases.');
  expect(markdownReleases(manyReleases, headDate, tailDate)).toContain(':rocket: [v1.0.0 Release v1.0.0](https://github.com/abhijeetps/playground/releases/tag/v1.0.0)');
  expect(markdownReleases(manyReleases, headDate, tailDate)).toContain(':rocket: [v0.1.1 Release v0.1.1](https://github.com/abhijeetps/playground/releases/tag/v0.1.1)');
  expect(markdownReleases(manyReleases, headDate, tailDate)).toContain(':rocket: [v0.0.1 Release v0.0.1](https://github.com/abhijeetps/playground/releases/tag/v0.0.1)');
});

test('that checks return string if there are some releases', () => {
  expect(markdownReleases(allReleases, headDate, tailDate)).toContain('# RELEASES');
  expect(markdownReleases(allReleases, headDate, tailDate)).toContain('Last week there was 1 release.');
  expect(markdownReleases(allReleases, headDate, tailDate)).toContain(':rocket: [v0.1.1 Release v0.1.1](https://github.com/abhijeetps/playground/releases/tag/v0.1.1)');
});

test('that checks return string if there are some releases where name is null', () => {
  expect(markdownReleases(allReleases, headDate, tailDate)).toContain('# RELEASES');
  expect(markdownReleases(allReleases, headDate, tailDate)).toContain('Last week there was 1 release.');
  expect(markdownReleases(allReleases, headDate, tailDate)).toContain(':rocket: [v0.1.1 Release v0.1.1](https://github.com/abhijeetps/playground/releases/tag/v0.1.1)');
});

test('that checks return string if there are some releases where name is null', () => {
  expect(markdownReleases(nullNameReleases, headDate, tailDate)).toContain('# RELEASES');
  expect(markdownReleases(nullNameReleases, headDate, tailDate)).toContain('Last week there was 1 release.');
  expect(markdownReleases(nullNameReleases, headDate, tailDate)).toContain(':rocket: [v0.1.1](https://github.com/abhijeetps/playground/releases/tag/v0.1.1)');
});
