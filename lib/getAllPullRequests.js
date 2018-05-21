module.exports = (context) => {
    // method returns all the issues
    return context.github.getAll();
}