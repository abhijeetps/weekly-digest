
const moment = require('moment')

module.exports = (releases, headDate, tailDate) => {
  console.log('In markdownReleases.js...')
  let releaseString = '# RELEASES\n'
  let data = releases
  if (!data) {
    data = []
  }
  data = data.filter((item) => {
    if (moment(item.published_at).isBetween(tailDate, headDate)) {
      return true
    }
  })
  if (data.length === 0) {
    releaseString += `Last week there were no releases.\n`
  } else {
    releaseString += `Last week there ${(data.length > 1) ? 'were' : 'was'} ${data.length} release${(data.length > 1) ? 's' : ''}.\n`
    data.forEach((item) => {
      releaseString += `:rocket: [${item.tag_name.replace(/\n/g, ' ')}${(item.name != null) ? ` ${item.name.replace(/\n/g, ' ')}` : ''}](${item.html_url})\n`
    })
  }
  return releaseString
}
