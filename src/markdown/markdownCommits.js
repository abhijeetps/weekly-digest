
const moment = require('moment');

module.exports = (commits, headDate, tailDate) => {
  let commitsString = '# COMMITS\n';
  let data = commits;
  if (!data) {
    data = [];
  }

  data = data.filter((item) => (moment(item.commit.committer.date).isBetween(tailDate, headDate) && item.author.login !== 'weekly-digest[bot]'));

  if (data.length === 0) {
    commitsString += 'Last week there were no commits.\n';
  } else {
    commitsString += `Last week there ${(data.length > 1) ? 'were' : 'was'} ${data.length} commit${(data.length > 1) ? 's' : ''}.\n`;
    data.forEach((item) => {
      commitsString += `:hammer_and_wrench: [${item.commit.message.replace(/\n/g, ' ')}](${item.html_url}) by [${item.author.login}](${item.author.html_url})\n`;
    });
  }
  return commitsString;
};
