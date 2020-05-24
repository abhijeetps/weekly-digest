const fixConfig = require('../../src/markdown/fixConfig');

const emptyConfig = {};
const testConfig1 = {
  publishDay: 0,
  canPublishIssues: true,
  canPublishPullRequests: true,
};
const config = {
  publishDay: 0,
  canPublishIssues: true,
  canPublishPullRequests: true,
  canPublishContributors: true,
  canPublishStargazers: true,
  canPublishCommits: true,
  canPublishReleases: true,
};
test('that returns and fixes configs', () => {
  expect(fixConfig(emptyConfig)).toBeDefined();
  expect(fixConfig(emptyConfig)).toEqual(config);
});

test('that returns and fixes configs if some configs are missing', () => {
  expect(fixConfig(testConfig1)).toBeDefined();
  expect(fixConfig(testConfig1)).toEqual(config);
});

test('that checks config if the received config is null', () => {
  expect(fixConfig(testConfig1)).toBeDefined();
  expect(fixConfig(null)).toEqual(config);
});
