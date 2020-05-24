
const moment = require('moment');

module.exports = (commits, headDate, tailDate) => {
  let data = commits;
  if (!data) {
    data = [];
  }
  data = data.filter((item) => (moment(item.commit.committer.date).isBetween(tailDate, headDate) && item.author.login !== 'weekly-digest[bot]'));
  let contributorsString = '# CONTRIBUTORS\n';
  if (data.length === 0) {
    contributorsString += 'Last week there were no contributors.\n';
  } else {
    const contributors = [];
    data.forEach((item) => {
      contributors.push({ login: item.author.login, html_url: item.author.html_url });
    });
    const uniqueContributors = Object.values(contributors.reduce((acc, cul) => Object.assign(acc, { [cul.login]: cul }), {}));
    contributorsString += `Last week there ${(uniqueContributors.length > 1) ? 'were' : 'was'} ${uniqueContributors.length} contributor${(uniqueContributors.length > 1) ? 's' : ''}.\n`;
    uniqueContributors.forEach((item) => {
      contributorsString += `:bust_in_silhouette: [${item.login}](${item.html_url})\n`;
    });
  }
  return contributorsString;
};
