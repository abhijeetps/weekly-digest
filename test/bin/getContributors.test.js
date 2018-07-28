
const getContributors = require('./../../src/bin/getContributors')

const moment = require('moment')
const MockDate = require('mockdate')
MockDate.set(moment.utc('2018-04-24'))

test('that getContributors is working', async () => {
  let context = {
    github: {
      paginate: jest.fn(),
      repos: {
        getContributors: jest.fn()
      }
    }
  }
  await getContributors(context, {
    owner: 'abhijeetps',
    repo: 'playground'
  })
  expect(context.github.paginate).toHaveBeenCalled()
  expect(context.github.repos.getContributors).toHaveBeenCalled()
})
