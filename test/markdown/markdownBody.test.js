
const moment = require('moment');
const MockDate = require('mockdate');
const markdownBody = require('../../src/markdown/markdownBody');
const { DEFAULT_CONFIG } = require('../../src/bin/constants');
const falseConfig = require('../payload/falseConfig');

MockDate.set(moment.utc('2018-04-24'));
const headDate = moment.utc().format();
const tailDate = moment.utc().subtract(7, 'days').format();

test('that markdownBody works', () => {
  const owner = 'abhijeetps';
  const repo = 'playground';
  const context = {
    log: {
      info: jest.fn(),
      debug: jest.fn(),
    },
    github: {
      paginate: jest.fn(),
      issues: {
        listForRepo: jest.fn(),
        create: jest.fn(),
      },
      pullRequests: {
        list: jest.fn(),
      },
      repos: {
        listCommits: jest.fn(),
        listReleases: jest.fn(),
      },
      activity: {
        listStargazersForRepo: jest.fn(),
      },
    },
  };
  expect(markdownBody(context, {
    owner, repo, headDate, tailDate,
  }, DEFAULT_CONFIG)).toBeDefined();
});

test('that markdownBody works when the configs defined are all false', () => {
  const owner = 'abhijeetps';
  const repo = 'playground';
  const context = {
    log: {
      info: jest.fn(),
      debug: jest.fn(),
    },
    github: {
      paginate: jest.fn(),
      issues: {
        listForRepo: jest.fn(),
        create: jest.fn(),
      },
      pullRequests: {
        list: jest.fn(),
      },
      repos: {
        listCommits: jest.fn(),
        listReleases: jest.fn(),
      },
      activity: {
        listStargazersForRepo: jest.fn(),
      },
    },
  };
  expect(markdownBody(context, {
    owner, repo, headDate, tailDate,
  }, falseConfig)).toBeDefined();
});
