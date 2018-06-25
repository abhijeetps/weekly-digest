module.exports = {
  headDate: async () => {
    console.log('In getDate.js headDate...')
    var date = new Date()
    date.setHours(0, 0, 0, 0)
    date = await date.toISOString()
    return date
  },
  tailDate: async () => {
    console.log('In getDate.js tailDate...')
    var date = new Date()
    date.setHours(0, 0, 0, 0)
    date.setDate(date.getDate() - 7)
    date = await date.toISOString()
    return date
  },
  getUTCFromISO: async (ISODate) => {
    console.log('In getDate.js getDateStringFromISO...')
    var date = ISODate.split(/\D/)
    var dateUTC = await new Date(Date.UTC(date[0], --date[1], date[2], date[3] || 0, date[4] || 0, date[5] || 0, date[6] || 0))
    return dateUTC
  }
}
