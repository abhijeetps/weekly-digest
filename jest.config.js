module.exports = {
  testEnvironment: 'node',
  verbose: true,
  testURL: 'http://localhost/',
  collectCoverageFrom: [
    'src/**/*.js',
    'index.js',
  ],
  coverageDirectory: './coverage/',
  collectCoverage: true,
  coverageReporters: ['json', 'lcovonly', 'text', 'clover'],
};
