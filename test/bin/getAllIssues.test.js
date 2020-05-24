
const moment = require('moment');
const MockDate = require('mockdate');
const getAllIssues = require('../../src/bin/getAllIssues');

MockDate.set(moment.utc('2018-04-24'));
const tailDate = moment.utc().subtract(7, 'days').format();

test('that getAllIssues is working', async () => {
  const context = {
    log: {
      info: jest.fn(),
      debug: jest.fn(),
    },
    github: {
      paginate: jest.fn(),
      issues: {
        listForRepo: jest.fn(),
      },
    },
  };
  await getAllIssues(context, {
    owner: 'abhijeetps',
    repo: 'playground',
    tailDate,
  });
  expect(context.github.paginate).toHaveBeenCalled();
  expect(context.github.issues.listForRepo).toHaveBeenCalled();
});
