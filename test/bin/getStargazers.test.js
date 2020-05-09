
const getStargazers = require('./../../src/bin/getStargazers')

const moment = require('moment')
const MockDate = require('mockdate')
MockDate.set(moment.utc('2018-04-24'))

test('that getStargazers is working', async () => {
  let context = {
    log: {
      info: jest.fn(),
      debug: jest.fn()
    },
    github: {
      paginate: jest.fn(),
      activity: {
        getStargazersForRepo: jest.fn()
      }
    }
  }
  await getStargazers(context, {
    owner: 'abhijeetps',
    repo: 'playground'
  })
  expect(context.github.paginate).toHaveBeenCalled()
  expect(context.github.activity.getStargazersForRepo).toHaveBeenCalled()
})
