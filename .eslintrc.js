module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    'jest/globals': true
  },
  extends: [
    'airbnb-base',
  ],
  plugins: [
    'jest'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    "max-len": ["warn"]
  },
  ignorePatterns: ["coverage/", "node_modules/"]
};
