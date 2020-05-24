
const moment = require('moment');
const MockDate = require('mockdate');
const getContributors = require('../../src/bin/getContributors');

MockDate.set(moment.utc('2018-04-24'));

test('that getContributors is working', async () => {
  const context = {
    log: {
      info: jest.fn(),
      debug: jest.fn(),
    },
    github: {
      paginate: jest.fn(),
      repos: {
        getContributors: jest.fn(),
      },
    },
  };
  await getContributors(context, {
    owner: 'abhijeetps',
    repo: 'playground',
  });
  expect(context.github.paginate).toHaveBeenCalled();
  expect(context.github.repos.getContributors).toHaveBeenCalled();
});
