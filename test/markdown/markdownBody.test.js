
const markdownBody = require('./../../src/markdown/markdownBody')
const config = require('./../../src/markdown/defaultConfig')
const falseConfig = require('./../payload/falseConfig')
const moment = require('moment')
const MockDate = require('mockdate')
MockDate.set(moment.utc('2018-04-24'))
let headDate = moment.utc().format()
let tailDate = moment.utc().subtract(7, 'days').format()

test('that markdownBody works', () => {
  let owner = 'abhijeetps'
  let repo = 'playground'
  let context = {
    log: {
      info: jest.fn(),
      debug: jest.fn()
    },
    github: {
      paginate: jest.fn(),
      issues: {
        getForRepo: jest.fn(),
        create: jest.fn()
      },
      pullRequests: {
        getAll: jest.fn()
      },
      repos: {
        getCommits: jest.fn(),
        getReleases: jest.fn()
      },
      activity: {
        getStargazersForRepo: jest.fn()
      }
    }
  }
  expect(markdownBody(context, {owner, repo, headDate, tailDate}, config)).toBeDefined()
})

test('that markdownBody works when the configs defined are all false', () => {
  let owner = 'abhijeetps'
  let repo = 'playground'
  let context = {
    log: {
      info: jest.fn(),
      debug: jest.fn()
    },
    github: {
      paginate: jest.fn(),
      issues: {
        getForRepo: jest.fn(),
        create: jest.fn()
      },
      pullRequests: {
        getAll: jest.fn()
      },
      repos: {
        getCommits: jest.fn(),
        getReleases: jest.fn()
      },
      activity: {
        getStargazersForRepo: jest.fn()
      }
    }
  }
  expect(markdownBody(context, {owner, repo, headDate, tailDate}, falseConfig)).toBeDefined()
})
