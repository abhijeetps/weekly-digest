
const getCommits = require('./../../src/bin/getCommits')

const moment = require('moment')
const MockDate = require('mockdate')
MockDate.set(moment.utc('2018-04-24'))
let tailDate = moment.utc().subtract(7, 'days').format()

test('that getCommits is working', async () => {
  let context = {
    github: {
      paginate: jest.fn(),
      repos: {
        getCommits: jest.fn()
      }
    }
  }
  await getCommits(context, {
    owner: 'abhijeetps',
    repo: 'playground',
    tailDate: tailDate
  })
  expect(context.github.paginate).toHaveBeenCalled()
  expect(context.github.repos.getCommits).toHaveBeenCalled()
})
