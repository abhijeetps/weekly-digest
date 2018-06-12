
module.exports = (stargazers, tailDate) => {
  console.log('In markdownStargazers.js...')
  var stargazersString = `# STARGAZERS\n`
  var data = stargazers.data
  var stargazersArray = []
  for (var i = 0; i < data.length; i++) {
    if (data[i].starred_at > tailDate) {
      stargazersArray.push({user: data[i].user.login, html_url: data[i].user.html_url})
    }
  }
  if (stargazersArray.length > 1) {
    stargazersString += `This week, ${stargazersArray.length} users have starred this repository. \n`
    stargazersString += `They are `
    for (i = 0; i < stargazersArray.length; i++) {
      if (i === stargazersArray.length - 1) {
        stargazersString += `and [${stargazersArray[i].user}](${stargazersArray[i].html_url}).\n`
      } else {
        stargazersString += `[${stargazersArray[i].user}](${stargazersArray[i].html_url}), `
      }
    }
    stargazersString += `You all are the stars! :star:\n`
  } else if (stargazersArray.length === 1) {
    stargazersString += `This week, [${stargazersArray[0].user}](${stargazersArray[0].html_url}) has starred the repository.\n`
    stargazersString += `You are the star! :star:\n`
  } else {
    stargazersString += `This week, no user has starred this repository. `
  }
  return stargazersString
}
