
const moment = require('moment');
const MockDate = require('mockdate');
const getSearchIssues = require('../../src/bin/getSearchIssues');

MockDate.set(moment.utc('2018-04-24'));
const mock = jest.fn();

test('that getSearchIssues is working', async () => {
  const context = {
    log: {
      info: jest.fn(),
      debug: jest.fn(),
    },
    github: {
      search: {
        issues: mock.mockReturnValue(),
      },
    },
  };
  await getSearchIssues(context, {
    q: 'repo:abhijeetps/playground type:issues author:weekly-digest created:>=2018-04-17',
  });
  expect(context.github.search.issues).toHaveBeenCalled();
});
