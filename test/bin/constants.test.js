
const constants = require('../../src/bin/constants');

describe('constants', () => {
  describe('INTERVAL', () => {
    test('INTERVAL value is 12 hours', () => {
      expect(constants.INTERVAL).toBeDefined();
      expect(constants.INTERVAL).toEqual(12 * 60 * 60 * 1000);
    });
  });
  describe('SCHEDULE_REPOSITORY_EVENT', () => {
    test('SCHEDULE_REPOSITORY_EVENT is schedule.repository', () => {
      expect(constants.SCHEDULE_REPOSITORY_EVENT).toBeDefined();
      expect(constants.SCHEDULE_REPOSITORY_EVENT).toEqual('schedule.repository');
    });
  });
  describe('DEFAULT_CONFIG', () => {
    const TEST_DEFAULT_CONFIG = {
      publishDay: 0,
      canPublishIssues: true,
      canPublishPullRequests: true,
      canPublishContributors: true,
      canPublishStargazers: true,
      canPublishCommits: true,
      canPublishReleases: true,
    };
    test('DEFAULT_CONFIG should not change', () => {
      expect(constants.DEFAULT_CONFIG).toBeDefined();
      expect(constants.DEFAULT_CONFIG).toEqual(TEST_DEFAULT_CONFIG);
    });
    test('DEFAULT_CONFIG publishDay is 0 (Sunday)', () => {
      expect(constants.DEFAULT_CONFIG.publishDay).toBeDefined();
      expect(constants.DEFAULT_CONFIG.publishDay).toEqual(0);
    });
    test('DEFAULT_CONFIG canPublishIssues is true', () => {
      expect(constants.DEFAULT_CONFIG.canPublishIssues).toBeDefined();
      expect(constants.DEFAULT_CONFIG.canPublishIssues).toBeTruthy();
    });
    test('DEFAULT_CONFIG canPublishPullRequests is true', () => {
      expect(constants.DEFAULT_CONFIG.canPublishPullRequests).toBeDefined();
      expect(constants.DEFAULT_CONFIG.canPublishPullRequests).toBeTruthy();
    });
    test('DEFAULT_CONFIG canPublishContributors is true', () => {
      expect(constants.DEFAULT_CONFIG.canPublishContributors).toBeDefined();
      expect(constants.DEFAULT_CONFIG.canPublishContributors).toBeTruthy();
    });
    test('DEFAULT_CONFIG canPublishStargazers is true', () => {
      expect(constants.DEFAULT_CONFIG.canPublishStargazers).toBeDefined();
      expect(constants.DEFAULT_CONFIG.canPublishStargazers).toBeTruthy();
    });
    test('DEFAULT_CONFIG canPublishCommits is true', () => {
      expect(constants.DEFAULT_CONFIG.canPublishCommits).toBeDefined();
      expect(constants.DEFAULT_CONFIG.canPublishCommits).toBeTruthy();
    });
    test('DEFAULT_CONFIG canPublishReleases is true', () => {
      expect(constants.DEFAULT_CONFIG.canPublishReleases).toBeDefined();
      expect(constants.DEFAULT_CONFIG.canPublishReleases).toBeTruthy();
    });
  });
  describe('INSTALLATION_EVENTS', () => {
    test('INSTALLATION_EVENTS has installation.created and installation_repositories events', () => {
      expect(constants.INSTALLATION_EVENTS).toBeDefined();
      expect(Array.isArray(constants.INSTALLATION_EVENTS)).toBeTruthy();
      expect(constants.INSTALLATION_EVENTS[0]).toEqual('installation.created');
      expect(constants.INSTALLATION_EVENTS[1]).toEqual('installation_repositories');
    });
  });
});
