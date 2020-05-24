
const moment = require('moment');
const MockDate = require('mockdate');
const postCreateIssues = require('../../src/bin/postCreateIssues');

MockDate.set(moment.utc('2018-04-24'));

test('that postCreateIssues is working', async () => {
  const context = {
    log: {
      info: jest.fn(),
      debug: jest.fn(),
    },
    github: {
      issues: {
        create: jest.fn(),
      },
    },
  };
  await postCreateIssues(context, {
    owner: 'abhijeetps',
    repo: 'playground',
    title: 'Weekly Digest (17th April 2018 - 24th April 2018)',
    body: 'Last week, abhijeetps just started working on probot/weekly-digest.',
    labels: 'weekly-digest',
  });
  expect(context.github.issues.create).toHaveBeenCalled();
});
