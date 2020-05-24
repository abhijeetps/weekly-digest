
const moment = require('moment');
const MockDate = require('mockdate');
const getReleases = require('../../src/bin/getReleases');

MockDate.set(moment.utc('2018-04-24'));

test('that getReleases is working', async () => {
  const context = {
    log: {
      info: jest.fn(),
      debug: jest.fn(),
    },
    github: {
      paginate: jest.fn(),
      repos: {
        listReleases: jest.fn(),
      },
    },
  };
  await getReleases(context, {
    owner: 'abhijeetps',
    repo: 'playground',
  });
  expect(context.github.paginate).toHaveBeenCalled();
  expect(context.github.repos.listReleases).toHaveBeenCalled();
});
