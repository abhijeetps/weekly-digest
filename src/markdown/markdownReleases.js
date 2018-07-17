module.exports = (releases, headDate, tailDate) => {
  console.log('In markdownReleases.js...')
  let releaseString = '# RELEASES\n'
  let data = releases.data
  if (data == null) {
    data = []
  }
  data = data.filter((item) => {
    if (item.published_at >= tailDate && item.published_at < headDate) {
      return true
    }
  })
  if (data.length === 0) {
    releaseString += `Last week there were no releases.\n`
  } else {
    releaseString += `Last week there ${(data.length > 1) ? 'were' : 'was'} ${data.length} release${(data.length > 1) ? 's' : ''}.\n`
    data.forEach((item) => {
      releaseString += `:rocket: ${item.tag_name} [${item.name}](${item.html_url})\n`
    })
  }
  return releaseString
}
