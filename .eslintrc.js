module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['airbnb-base'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 14,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  ignorePatterns: ['dist/', 'node_modules/', '*.json', '.temp/', 'docs/note'],
  rules: {},
};
