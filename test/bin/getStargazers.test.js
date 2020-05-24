
const moment = require('moment');
const MockDate = require('mockdate');
const getStargazers = require('../../src/bin/getStargazers');

MockDate.set(moment.utc('2018-04-24'));

test('that getStargazers is working', async () => {
  const context = {
    log: {
      info: jest.fn(),
      debug: jest.fn(),
    },
    github: {
      paginate: jest.fn(),
      activity: {
        listStargazersForRepo: jest.fn(),
      },
    },
  };
  await getStargazers(context, {
    owner: 'abhijeetps',
    repo: 'playground',
  });
  expect(context.github.paginate).toHaveBeenCalled();
  expect(context.github.activity.listStargazersForRepo).toHaveBeenCalled();
});
