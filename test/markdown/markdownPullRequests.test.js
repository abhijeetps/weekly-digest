
const moment = require('moment');
const MockDate = require('mockdate');
const markdownPullRequests = require('../../src/markdown/markdownPullRequests');

MockDate.set(moment.utc('2018-04-24'));
const headDate = moment().utc().format();
const tailDate = moment().utc().subtract(7, 'days').format();

const pullRequests = require('../payload/pullRequests');

const emptyPullRequest = pullRequests.emptyPullRequest.data;
const nullPullRequest = pullRequests.nullPullRequest.data;
const uselessPullRequest = pullRequests.uselessPullRequest.data;
const mergedPullRequest = pullRequests.mergedPullRequest.data;
const openPullRequest = pullRequests.openPullRequest.data;
const updatedPullRequest = pullRequests.updatedPullRequest.data;
const allPullRequest = pullRequests.allPullRequests.data;
const onePullRequest = pullRequests.onePullRequest.data;

test('that checks return string if the pull requests is empty', () => {
  expect(markdownPullRequests(emptyPullRequest, headDate, tailDate)).toContain('# PULL REQUESTS');
  expect(markdownPullRequests(emptyPullRequest, headDate, tailDate)).toContain('Last week, no pull requests were created, updated or merged.');
});

test('that checks return string if the pull requests is null', () => {
  expect(markdownPullRequests(nullPullRequest, headDate, tailDate)).toContain('# PULL REQUESTS');
  expect(markdownPullRequests(nullPullRequest, headDate, tailDate)).toContain('Last week, no pull requests were created, updated or merged.');
});

test('that checks return string if the pull requests are useless', () => {
  expect(markdownPullRequests(uselessPullRequest, headDate, tailDate)).toContain('# PULL REQUESTS');
  expect(markdownPullRequests(uselessPullRequest, headDate, tailDate)).toContain('Last week, no pull requests were created, updated or merged.');
});

test('that checks return string if there is one pull request', () => {
  expect(markdownPullRequests(openPullRequest, headDate, tailDate)).toContain('# PULL REQUESTS');
  expect(markdownPullRequests(openPullRequest, headDate, tailDate)).toContain('Last week, 2 pull requests were created, updated or merged.');
  expect(markdownPullRequests(openPullRequest, headDate, tailDate)).toContain('## OPEN PULL REQUEST');
  expect(markdownPullRequests(openPullRequest, headDate, tailDate)).toContain('Last week, 2 pull requests were opened.');
  expect(markdownPullRequests(openPullRequest, headDate, tailDate)).toContain(':green_heart: #15 [Weekly Digest test15](https://github.com/abhijeetps/playground/pull/15), by [abhijeetps](https://github.com/abhijeetps)');
  expect(markdownPullRequests(openPullRequest, headDate, tailDate)).toContain(':green_heart: #14 [Weekly Digest test14](https://github.com/abhijeetps/playground/pull/14), by [abhijeetps](https://github.com/abhijeetps)');
});

test('that checks return string if there are open pull requests', () => {
  expect(markdownPullRequests(openPullRequest, headDate, tailDate)).toContain('# PULL REQUESTS');
  expect(markdownPullRequests(openPullRequest, headDate, tailDate)).toContain('Last week, 2 pull requests were created, updated or merged.');
  expect(markdownPullRequests(openPullRequest, headDate, tailDate)).toContain('## OPEN PULL REQUEST');
  expect(markdownPullRequests(openPullRequest, headDate, tailDate)).toContain('Last week, 2 pull requests were opened.');
  expect(markdownPullRequests(openPullRequest, headDate, tailDate)).toContain(':green_heart: #15 [Weekly Digest test15](https://github.com/abhijeetps/playground/pull/15), by [abhijeetps](https://github.com/abhijeetps)');
  expect(markdownPullRequests(openPullRequest, headDate, tailDate)).toContain(':green_heart: #14 [Weekly Digest test14](https://github.com/abhijeetps/playground/pull/14), by [abhijeetps](https://github.com/abhijeetps)');
});

test('that checks return string if there are updated pull requests', () => {
  expect(markdownPullRequests(updatedPullRequest, headDate, tailDate)).toContain('# PULL REQUESTS');
  expect(markdownPullRequests(updatedPullRequest, headDate, tailDate)).toContain('Last week, 2 pull requests were created, updated or merged.');
  expect(markdownPullRequests(updatedPullRequest, headDate, tailDate)).toContain('## UPDATED PULL REQUEST');
  expect(markdownPullRequests(updatedPullRequest, headDate, tailDate)).toContain('Last week, 2 pull requests were updated.');
  expect(markdownPullRequests(updatedPullRequest, headDate, tailDate)).toContain(':yellow_heart: #17 [Weekly Digest test17](https://github.com/abhijeetps/playground/pull/17), by [abhijeetps](https://github.com/abhijeetps)');
  expect(markdownPullRequests(updatedPullRequest, headDate, tailDate)).toContain(':yellow_heart: #16 [Weekly Digest test16](https://github.com/abhijeetps/playground/pull/16), by [abhijeetps](https://github.com/abhijeetps)');
});

test('that checks return string if there are merged pull requests', () => {
  expect(markdownPullRequests(mergedPullRequest, headDate, tailDate)).toContain('# PULL REQUESTS');
  expect(markdownPullRequests(mergedPullRequest, headDate, tailDate)).toContain('Last week, 2 pull requests were created, updated or merged.');
  expect(markdownPullRequests(mergedPullRequest, headDate, tailDate)).toContain('## MERGED PULL REQUEST');
  expect(markdownPullRequests(mergedPullRequest, headDate, tailDate)).toContain('Last week, 2 pull requests were merged.');
  expect(markdownPullRequests(mergedPullRequest, headDate, tailDate)).toContain(':purple_heart: #25 [Weekly Digest test25](https://github.com/abhijeetps/playground/pull/25), by [abhijeetps](https://github.com/abhijeetps)');
  expect(markdownPullRequests(mergedPullRequest, headDate, tailDate)).toContain(':purple_heart: #24 [Weekly Digest test24](https://github.com/abhijeetps/playground/pull/24), by [abhijeetps](https://github.com/abhijeetps)');
});

test('that checks return string if there are some pull requests', () => {
  expect(markdownPullRequests(allPullRequest, headDate, tailDate)).toContain('# PULL REQUESTS');
  expect(markdownPullRequests(allPullRequest, headDate, tailDate)).toContain('Last week, 3 pull requests were created, updated or merged.');
  expect(markdownPullRequests(allPullRequest, headDate, tailDate)).toContain('## OPEN PULL REQUEST');
  expect(markdownPullRequests(allPullRequest, headDate, tailDate)).toContain('Last week, 1 pull request was opened.');
  expect(markdownPullRequests(allPullRequest, headDate, tailDate)).toContain(':green_heart: #14 [Weekly Digest test14](https://github.com/abhijeetps/playground/pull/14), by [abhijeetps](https://github.com/abhijeetps)');
  expect(markdownPullRequests(allPullRequest, headDate, tailDate)).toContain('## UPDATED PULL REQUEST');
  expect(markdownPullRequests(allPullRequest, headDate, tailDate)).toContain('Last week, 1 pull request was updated.');
  expect(markdownPullRequests(allPullRequest, headDate, tailDate)).toContain(':yellow_heart: #16 [Weekly Digest test16](https://github.com/abhijeetps/playground/pull/16), by [abhijeetps](https://github.com/abhijeetps)');
  expect(markdownPullRequests(allPullRequest, headDate, tailDate)).toContain('## MERGED PULL REQUEST');
  expect(markdownPullRequests(allPullRequest, headDate, tailDate)).toContain('Last week, 1 pull request was merged.');
  expect(markdownPullRequests(allPullRequest, headDate, tailDate)).toContain(':purple_heart: #24 [Weekly Digest test24](https://github.com/abhijeetps/playground/pull/24), by [abhijeetps](https://github.com/abhijeetps)');
});

test('that checks return string if the pull requests is null', () => {
  expect(markdownPullRequests(onePullRequest, headDate, tailDate)).toContain('# PULL REQUESTS');
  expect(markdownPullRequests(onePullRequest, headDate, tailDate)).toContain('Last week, 1 pull request was created, updated or merged.');
  expect(markdownPullRequests(onePullRequest, headDate, tailDate)).toContain('## OPEN PULL REQUEST');
  expect(markdownPullRequests(onePullRequest, headDate, tailDate)).toContain('Last week, 1 pull request was opened.');
  expect(markdownPullRequests(onePullRequest, headDate, tailDate)).toContain(':green_heart: #14 [Weekly Digest test14](https://github.com/abhijeetps/playground/pull/14), by [abhijeetps](https://github.com/abhijeetps)');
});
