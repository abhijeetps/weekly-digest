module.exports = (commits, headDate, tailDate) => {
  console.log('In markdown commits...')
  let commitsString = '# COMMITS\n'
  let data = commits.data
  if (data == null) {
    data = []
  }
  data = data.filter((item) => {
    if (item.commit.committer.date >= tailDate && item.commit.committer.date < headDate && item.author.login !== 'weekly-digest[bot]') {
      return true
    }
  })
  if (data.length === 0) {
    commitsString += `Last week there were no commits.\n`
  } else {
    commitsString += `Last week there ${(data.length > 1) ? 'were' : 'was'} ${data.length} commit${(data.length > 1) ? 's' : ''}.\n`
    data.forEach((item) => {
      commitsString += `:hammer_and_wrench: [${item.commit.message}](${item.html_url}) by [${item.author.login}](${item.author.html_url})\n`
    })
  }
  // let i
  // let commitsString = '# COMMITS\n'
  // commitsCount = 0
  // if (typeof data !== 'undefined' && data !== null && data.length != null && data.length > 0) {
  //   for (i = 0; i < data.length; i++) {
  //     if (data[i].author.type !== 'Bot') {
  //       commitsCount = commitsCount + 1
  //     } else {
  //       continue
  //     }
  //   }
  // }
  // if (commitsCount > 1) {
  //   commitsString += `This week, there have been ${commitsCount} commits in the repository.\n`
  //   commitsString += `These are: \n`
  //   for (i = 0; i < data.length; i++) {
  //     if (data[i].author.type !== 'Bot') {
  //       commitsString += `:hammer_and_wrench: [${data[i].commit.message}](${data[i].html_url}) by [${data[i].author.login}](${data[i].author.html_url})\n`
  //     } else {
  //       continue
  //     }
  //   }
  // } else if (commitsCount === 1) {
  //   commitsString += `This week, there have been ${commitsCount} commit in the repository. \nIt is:\n`
  //   commitsString += `:hammer_and_wrench: [${data[0].commit.message}](${data[0].html_url}) by [${data[0].author.login}](${data[0].author.html_url})\n`
  // } else {
  //   commitsString += `This week, there have been no commits.\n`
  // }
  return commitsString
}
