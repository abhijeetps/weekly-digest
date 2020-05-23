
const weeklyDigest = require('./../src/bin/weeklyDigest')
const config = require('./../src/markdown/defaultConfig')
const falseConfig = require('./payload/falseConfig')
const moment = require('moment')
const MockDate = require('mockdate')
MockDate.set(moment.utc('2018-04-24'))
let headDate = moment.utc().format()
let tailDate = moment.utc().subtract(7, 'days').format()

jest.mock('./../src/markdown/markdownBody', () => () => Promise.resolve('This is the markdownBody.'))

test('that weekly digest is working when configs are defined and is false', async () => {
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
  let {title, labels, body} = await weeklyDigest(context, {owner, repo, headDate, tailDate}, config)
  expect(title).toBeDefined()
  expect(labels).toContain('weekly-digest')
  expect(body).toBeDefined()
})

test('that weekly digest is working when configs are defined and is true', async () => {
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
  let {title, labels, body} = await weeklyDigest(context, {owner, repo, headDate, tailDate}, falseConfig)
  expect(title).toBeDefined()
  expect(labels).toContain('weekly-digest')
  expect(body).toBeDefined()
})
