
const moment = require('moment');
const MockDate = require('mockdate');
const getAllPullRequests = require('../../src/bin/getAllPullRequests');

MockDate.set(moment.utc('2018-04-24'));

test('that getPullRequests is working', async () => {
  const context = {
    log: {
      info: jest.fn(),
      debug: jest.fn(),
    },
    github: {
      paginate: jest.fn(),
      pullRequests: {
        list: jest.fn(),
      },
    },
  };
  await getAllPullRequests(context, {
    owner: 'abhijeetps',
    repo: 'playground',
  });
  expect(context.github.paginate).toHaveBeenCalled();
  expect(context.github.pullRequests.list).toHaveBeenCalled();
});
