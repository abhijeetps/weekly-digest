
const moment = require('moment');
const MockDate = require('mockdate');
const markdownStargazers = require('../../src/markdown/markdownStargazers');

MockDate.set(moment.utc('2018-04-24'));
const headDate = moment().utc().format();
const tailDate = moment().utc().subtract(7, 'days').format();

const stargazers = require('../payload/stargazers');

const emptyStargazers = stargazers.emptyStargazers.data;
const nullStargazers = stargazers.nullStargazers.data;
const uselessStargazers = stargazers.uselessStargazers.data;
const manyStargazers = stargazers.manyStargazers.data;
const allStargazers = stargazers.allStargazers.data;

test('that checks return string if stargazers data is empty', () => {
  expect(markdownStargazers(emptyStargazers, headDate, tailDate)).toContain('# STARGAZERS');
  expect(markdownStargazers(emptyStargazers, headDate, tailDate)).toContain('Last week there were no stargazers.');
});

test('that checks return string if stargazers data is null', () => {
  expect(markdownStargazers(nullStargazers, headDate, tailDate)).toContain('# STARGAZERS');
  expect(markdownStargazers(nullStargazers, headDate, tailDate)).toContain('Last week there were no stargazers.');
});

test('that checks return string if stargazers data is useless', () => {
  expect(markdownStargazers(uselessStargazers, headDate, tailDate)).toContain('# STARGAZERS');
  expect(markdownStargazers(uselessStargazers, headDate, tailDate)).toContain('Last week there were no stargazers.');
});

test('that checks return string if there are many stargazers', () => {
  expect(markdownStargazers(manyStargazers, headDate, tailDate)).toContain('# STARGAZERS');
  expect(markdownStargazers(manyStargazers, headDate, tailDate)).toContain('Last week there were 3 stargazers.');
  expect(markdownStargazers(manyStargazers, headDate, tailDate)).toContain(':star: [wilhelmklopp](https://github.com/wilhelmklopp)');
  expect(markdownStargazers(manyStargazers, headDate, tailDate)).toContain(':star: [abhijeetps](https://github.com/abhijeetps)');
  expect(markdownStargazers(manyStargazers, headDate, tailDate)).toContain(':star: [gr2m](https://github.com/gr2m)');
  expect(markdownStargazers(manyStargazers, headDate, tailDate)).toContain('You all are the stars! :star2:');
});

test('that checks return string if there are some stargazers', () => {
  expect(markdownStargazers(allStargazers, headDate, tailDate)).toContain('# STARGAZERS');
  expect(markdownStargazers(allStargazers, headDate, tailDate)).toContain('Last week there was 1 stargazer.');
  expect(markdownStargazers(allStargazers, headDate, tailDate)).toContain(':star: [abhijeetps](https://github.com/abhijeetps)');
  expect(markdownStargazers(allStargazers, headDate, tailDate)).toContain('You are the star! :star2:');
});
