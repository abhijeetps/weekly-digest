module.exports = (releases, tailDate) => {
  console.log('In markdownReleases.js...')
  var i
  var releasesString = '# RELEASES\n'
  const data = releases.data
  var releasesCount = 0
  if (typeof data !== 'undefined' && data !== null && data.length != null && data.length > 0) {
    for (i = 0; i < data.length; i++) {
      if (data[i].published_at > tailDate) {
        releasesCount = releasesCount + 1
      }
    }
  }
  if (releasesCount > 1) {
    releasesString += `This week, ${releasesCount} releases were published. These are:\n`
    for (i = 0; i < releasesCount; i++) {
      if (data[i].published_at > tailDate) {
        releasesString += `## ${data[i].tag_name} [${data[i].name}](${data[i].html_url}) :rocket:\n${data[i].body}`
      }
    }
  } else if (releasesCount === 1) {
    releasesString += `This week, ${releasesCount} release was published. It is: `
    for (i = 0; i < releasesCount; i++) {
      if (data[i].published_at > tailDate) {
        releasesString += `## ${data[i].tag_name} [${data[i].name}](${data[i].html_url}) :rocket:\n${data[i].body}`
      }
    }
  } else if (releasesCount === 0) {
    releasesString += `This week, no releases were published.`
  }
  return releasesString
}
