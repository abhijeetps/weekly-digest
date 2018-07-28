
const getAllPullRequests = require('./../../src/bin/getAllPullRequests')

const moment = require('moment')
const MockDate = require('mockdate')
MockDate.set(moment.utc('2018-04-24'))

test('that getPullRequests is working', async () => {
  let context = {
    github: {
      paginate: jest.fn(),
      pullRequests: {
        getAll: jest.fn()
      }
    }
  }
  await getAllPullRequests(context, {
    owner: 'abhijeetps',
    repo: 'playground'
  })
  expect(context.github.paginate).toHaveBeenCalled()
  expect(context.github.pullRequests.getAll).toHaveBeenCalled()
})
