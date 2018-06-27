module.exports = (commits) => {
  console.log('In markdown commits...')
  var data = commits.data
  var i
  var commitsString = '# COMMITS\n'
  var commitsCount = 0
  if (typeof data !== 'undefined' && data !== null && data.length != null && data.length > 0) {
    for (i = 0; i < data.length; i++) {
      if (data[i].author.type !== 'Bot') {
        commitsCount = commitsCount + 1
      }
    }
  }
  if (commitsCount > 1) {
    commitsString += `This week, there have been ${commitsCount} commits in the repository.\n`
    commitsString += `These are: \n`
    for (i = 0; i < data.length; i++) {
      if (data[i].author.type !== 'Bot') {
        commitsString += `:hammer_and_wrench: [${data[i].commit.message}](${data[i].html_url}) by [${data[i].author.login}](${data[i].author.html_url})\n`
      }
    }
  } else if (commitsCount === 1) {
    commitsString += `This week, there have been ${commitsCount} commit in the repository. \nIt is:\n`
    commitsString += `:hammer_and_wrench: [${data[0].commit.message}](${data[0].html_url}) by [${data[0].author.login}](${data[0].author.html_url})\n`
  } else {
    commitsString += `This week, there have been no commits.\n`
  }
  return commitsString
}
