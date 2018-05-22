module.exports = (context, {owner, repo}) => {
    // method returns all the pull requests
    return context.github.issues.getForRepo({
        owner,
        repo
    })
}