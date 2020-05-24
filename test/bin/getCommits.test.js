
const moment = require('moment');
const MockDate = require('mockdate');
const getCommits = require('../../src/bin/getCommits');

MockDate.set(moment.utc('2018-04-24'));
const tailDate = moment.utc().subtract(7, 'days').format();

test('that getCommits is working', async () => {
  const context = {
    log: {
      info: jest.fn(),
      debug: jest.fn(),
    },
    github: {
      paginate: jest.fn(),
      repos: {
        listCommits: jest.fn(),
      },
    },

  };
  await getCommits(context, {
    owner: 'abhijeetps',
    repo: 'playground',
    tailDate,
  });
  expect(context.github.paginate).toHaveBeenCalled();
  expect(context.github.repos.listCommits).toHaveBeenCalled();
});
