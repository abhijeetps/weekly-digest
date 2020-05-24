module.exports = (context, {
  owner, repo, name, color, description,
}) => {
  context.log.debug('In postCreateLabel.js..');
  context.github.issues.createLabel({
    owner,
    repo,
    name,
    color,
    description,
  });
};
