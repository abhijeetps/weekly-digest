const INSTALLATION_EVENTS = ['installation.created', 'installation_repositories'];
const DEFAULT_CONFIG = {
  publishDay: 0,
  canPublishIssues: true,
  canPublishPullRequests: true,
  canPublishContributors: true,
  canPublishStargazers: true,
  canPublishCommits: true,
  canPublishReleases: true,
};
const INTERVAL = 12 * 60 * 60 * 1000;
const SCHEDULE_REPOSITORY_EVENT = 'schedule.repository';

module.exports = {
  INSTALLATION_EVENTS,
  DEFAULT_CONFIG,
  INTERVAL,
  SCHEDULE_REPOSITORY_EVENT,
};
