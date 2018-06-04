var getStargazers = require('./../bin/getStargazers')
module.exports = (context, {owner, repo}) => {
  console.log('In markdownStargazers')
  const stargazers = getStargazers(context, {owner, repo})
  var stargazersString = stargazers
  return stargazersString
}
