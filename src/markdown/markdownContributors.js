module.exports = (commits, headDate, tailDate) => {
  console.log('In markdownContributors.js...')
  let data = commits.data
  if (data == null) {
    data = []
  }
  data = data.filter((item) => {
    if (item.commit.committer.date >= tailDate && item.commit.committer.date < headDate && item.author.login !== 'weekly-digest[bot]') {
      return true
    }
  })
  let contributorsString = '# CONTRIBUTORS\n'
  if (data.length === 0) {
    contributorsString += `Last week there were no contributors.\n`
  } else {
    let contributors = []
    data.forEach((item) => {
      contributors.push({ login: item.author.login, html_url: item.author.html_url })
    })
    let uniqueContributors = Object.values(contributors.reduce((acc, cul) => Object.assign(acc, {[cul.login]: cul}), {}))
    contributorsString += `Last week there ${(uniqueContributors.length > 1) ? 'were' : 'was'} ${uniqueContributors.length} contributor${(uniqueContributors.length > 1) ? 's' : ''}.\n`
    uniqueContributors.forEach((item) => {
      contributorsString += `:bust_in_silhouette: [${item.login}](${item.html_url})\n`
    })
  }
  return contributorsString
}
