
const moment = require('moment')

module.exports = (stargazers, headDate, tailDate) => {
  console.log('In markdownStargazers.js...')
  let stargazersString = `# STARGAZERS\n`
  let data = stargazers
  if (!data) {
    data = []
  }
  data = data.filter((item) => {
    if (moment(item.starred_at).isBetween(tailDate, headDate)) {
      return true
    }
  })
  if (data.length === 0) {
    stargazersString += `Last week there were no stargazers.\n`
  } else {
    if (data.length === 1) {
      stargazersString += `Last week there was ${data.length} stargazer.\n`
    } else {
      stargazersString += `Last week there were ${data.length} stagazers.\n`
    }
    data.forEach((item) => {
      stargazersString += `:star: [${item.user.login}](${item.user.html_url})\n`
    })
    if (data.length === 1) {
      stargazersString += `You are the star! :star2:\n`
    } else {
      stargazersString += `You all are the stars! :star2:\n`
    }
  }
  return stargazersString
}
