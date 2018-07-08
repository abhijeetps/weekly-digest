module.exports = (issues) => {
  console.log('In markdownContributors.js...')
  let contributorsString = `# CONTRIBUTORS \n`
  let contributors = []
  const data = issues.data
  let i
  // getting all the users
  for (i = 0; i < data.length; i++) {
    // checking if it's not a bot
    if (data[i].user.type !== 'Bot') {
      contributors.push({user: data[i].user.login, html_url: data[i].user.html_url})
    }
  }
  // filtering duplicate users
  contributors = contributors.filter((contributor, index, self) =>
    index === self.findIndex((i) => (
      i.user === contributor.user && i.html_url === contributor.html_url
    ))
  )
  if (contributors.length > 1) {
    contributorsString += `This week, ${contributors.length} users have contributed to this repository. \n`
    contributorsString += `They are `
    for (i = 0; i < contributors.length; i++) {
      if (i === contributors.length - 1) {
        contributorsString += `and [${contributors[i].user}](${contributors[i].html_url}).\n`
      } else {
        contributorsString += `[${contributors[i].user}](${contributors[i].html_url}), `
      }
    }
  } else if (contributors.length === 1) {
    contributorsString += `This week, [${contributors[0].user}](${contributors[0].html_url}) has contributed in the repository.\n`
  } else {
    contributorsString += `This week, no user has contributed to this repository.\n`
  }
  return contributorsString
}
