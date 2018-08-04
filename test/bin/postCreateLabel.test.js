
const postCreateLabel = require('./../../src/bin/postCreateLabel')

const moment = require('moment')
const MockDate = require('mockdate')
MockDate.set(moment.utc('2018-04-24'))

test('that postCreateLable is working', async () => {
  let context = {
    github: {
      issues: {
        createLabel: jest.fn()
      }
    }
  }
  await postCreateLabel(context, {
    owner: 'abhijeetps',
    repo: 'playground',
    name: 'weekly-digest',
    color: '9C27B0',
    description: ''
  })
  expect(context.github.issues.createLabel).toHaveBeenCalled()
})
