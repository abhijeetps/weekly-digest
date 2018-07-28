
const getAllIssues = require('./../../src/bin/getAllIssues')

const moment = require('moment')
const MockDate = require('mockdate')
MockDate.set(moment.utc('2018-04-24'))
let tailDate = moment.utc().subtract(7, 'days').format()

test('that getAllIssues is working', async () => {
  let context = {
    github: {
      paginate: jest.fn(),
      issues: {
        getForRepo: jest.fn()
      }
    }
  }
  await getAllIssues(context, {
    owner: 'abhijeetps',
    repo: 'playground',
    tailDate: tailDate
  })
  expect(context.github.paginate).toHaveBeenCalled()
  expect(context.github.issues.getForRepo).toHaveBeenCalled()
})
