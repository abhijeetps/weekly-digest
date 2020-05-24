
const moment = require('moment');

module.exports = (releases, headDate, tailDate) => {
  let releaseString = '# RELEASES\n';
  let data = releases;
  if (!data) {
    data = [];
  }
  data = data.filter((item) => (moment(item.published_at).isBetween(tailDate, headDate)));
  if (data.length === 0) {
    releaseString += 'Last week there were no releases.\n';
  } else {
    releaseString += `Last week there ${(data.length > 1) ? 'were' : 'was'} ${data.length} release${(data.length > 1) ? 's' : ''}.\n`;
    data.forEach((item) => {
      releaseString += `:rocket: [${item.tag_name.replace(/\n/g, ' ')}${(item.name != null) ? ` ${item.name.replace(/\n/g, ' ')}` : ''}](${item.html_url})\n`;
    });
  }
  return releaseString;
};
