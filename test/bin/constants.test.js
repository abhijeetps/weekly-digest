
const constants = require('./../../src/bin/constants')

describe('check the value of constants', () => {
  test('INTERVAL value is 12 hours', async () => {
    expect(constants.INTERVAL).toBeDefined()
    expect(constants.INTERVAL).toEqual(12 * 60 * 60 * 1000)
  })

  test('SCHEDULE_REPOSITORY_EVENT value is 12 hours', async () => {
    expect(constants.SCHEDULE_REPOSITORY_EVENT).toBeDefined()
    expect(constants.SCHEDULE_REPOSITORY_EVENT).toEqual('schedule.repository')
  })
})
