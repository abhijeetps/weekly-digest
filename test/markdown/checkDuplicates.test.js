
const moment = require('moment');
const MockDate = require('mockdate');
const checkDuplicates = require('../../src/markdown/checkDuplicates');

MockDate.set(moment.utc('2018-04-24'));
const headDate = moment.utc().format();

const mock = jest.fn();

test.skip('that checkDuplicates is working', async () => {
  const owner = 'abhijeetps';
  const repo = 'playground';
  const getDate = {
    getDayBeforeDate: mock,
  };
  const context = {
    log: {
      info: jest.fn(),
      debug: jest.fn(),
    },
    github: {
      search: {
        issues: mock.mockReturnValue(Promise.resolve({
          data: {
            total_count: 1,
            items: [{
              html_url: 'https://github.com/aps120797/playground',
            }],
          },
        })),
      },
    },
  };
  await checkDuplicates(context, {
    owner: 'abhijeetps',
    repo: 'playground',
    headDate,
  });

  expect(getDate.getDayBeforeDate).toHaveBeenCalled();
  expect(context.github.search.issues()).toHaveBeenCalledWith(context, { owner, repo, headDate });
});
