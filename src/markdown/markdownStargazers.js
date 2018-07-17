
module.exports = (stargazers, headDate, tailDate) => {
  console.log('In markdownStargazers.js...')
  let stargazersString = `# STARGAZERS\n`
  let data = stargazers.data
  if (data == null) {
    data = []
  }
  data = data.filter((item) => {
    if (item.starred_at >= tailDate && item.starred_at < headDate) {
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
  // let stargazersString = `# STARGAZERS\n`
  // let data = stargazers.data
  // let i
  // let stargazersArray = []
  // if (typeof data !== 'undefined' && data !== null && data.length != null && data.length > 0) {
  //   for (i = 0; i < data.length; i++) {
  //     if (data[i].starred_at > tailDate) {
  //       stargazersArray.push({user: data[i].user.login, html_url: data[i].user.html_url})
  //     }
  //   }
  // }
  // if (stargazersArray.length > 1) {
  //   stargazersString += `This week, ${stargazersArray.length} users have starred this repository. \n`
  //   stargazersString += `They are `
  //   for (i = 0; i < stargazersArray.length; i++) {
  //     if (i === stargazersArray.length - 1) {
  //       stargazersString += `and [${stargazersArray[i].user}](${stargazersArray[i].html_url}).\n`
  //     } else {
  //       stargazersString += `[${stargazersArray[i].user}](${stargazersArray[i].html_url}), `
  //     }
  //   }
  //   stargazersString += `You all are the stars! :star:\n`
  // } else if (stargazersArray.length === 1) {
  //   stargazersString += `This week, [${stargazersArray[0].user}](${stargazersArray[0].html_url}) has starred the repository.\n`
  //   stargazersString += `You are the star! :star:\n`
  // } else {
  //   stargazersString += `This week, no user has starred this repository.\n`
  // }
  // return stargazersString
}
