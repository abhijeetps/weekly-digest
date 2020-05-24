
const moment = require('moment');
const MockDate = require('mockdate');
const weeklyDigest = require('../src/bin/weeklyDigest');
const { DEFAULT_CONFIG } = require('../src/bin/constants');
const falseConfig = require('./payload/falseConfig');

MockDate.set(moment.utc('2018-04-24'));
const headDate = moment.utc().format();
const tailDate = moment.utc().subtract(7, 'days').format();

jest.mock('./../src/markdown/markdownBody', () => () => Promise.resolve('This is the markdownBody.'));

test('that weekly digest is working when configs are defined and is false', async () => {
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
  const { title, labels, body } = await weeklyDigest(context, {
    owner, repo, headDate, tailDate,
  }, DEFAULT_CONFIG);
  expect(title).toBeDefined();
  expect(labels).toContain('weekly-digest');
  expect(body).toBeDefined();
});

test('that weekly digest is working when configs are defined and is true', async () => {
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
  const { title, labels, body } = await weeklyDigest(context, {
    owner, repo, headDate, tailDate,
  }, falseConfig);
  expect(title).toBeDefined();
  expect(labels).toContain('weekly-digest');
  expect(body).toBeDefined();
});
