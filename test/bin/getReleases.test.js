
const getReleases = require('./../../src/bin/getReleases')

const moment = require('moment')
const MockDate = require('mockdate')
MockDate.set(moment.utc('2018-04-24'))

test('that getReleases is working', async () => {
  let context = {
    log: {
      info: jest.fn(),
      debug: jest.fn()
    },
    github: {
      paginate: jest.fn(),
      repos: {
        getReleases: jest.fn()
      }
    }
  }
  await getReleases(context, {
    owner: 'abhijeetps',
    repo: 'playground'
  })
  expect(context.github.paginate).toHaveBeenCalled()
  expect(context.github.repos.getReleases).toHaveBeenCalled()
})
