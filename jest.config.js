module.exports = {
  testEnvironment: 'node',
  verbose: true,
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  testURL: 'http://localhost/',
  collectCoverageFrom: [
    'src/**/*.js',
    'index.js',
  ],
  coverageDirectory: './coverage/',
  collectCoverage: true,
  coverageReporters: ['json', 'lcovonly', 'text', 'clover'],
};
