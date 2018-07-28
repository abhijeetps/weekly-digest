
const checkDuplicates = require('./../../src/markdown/checkDuplicates')

const moment = require('moment')
const MockDate = require('mockdate')
MockDate.set(moment.utc('2018-04-24'))
let headDate = moment.utc().format()

const mock = jest.fn()

test.skip('that checkDuplicates is working', async () => {
  const owner = 'abhijeetps'
  const repo = 'playground'
  const getDate = {
    getDayBeforeDate: mock
  }
  let context = {
    github: {
      search: {
        issues: mock.mockReturnValue(Promise.resolve({
          data: {
            total_count: 1,
            items: [{
              html_url: 'https://github.com/aps120797/playground'
            }]
          }
        }))
      }
    }
  }
  console.log(context.github.search.issues())
  await checkDuplicates(context, {
    owner: 'abhijeetps',
    repo: 'playground',
    headDate: headDate
  })

  expect(getDate.getDayBeforeDate).toHaveBeenCalled()
  expect(context.github.search.issues()).toHaveBeenCalledWith(context, {owner, repo, headDate})
})
