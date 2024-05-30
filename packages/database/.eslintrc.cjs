/** @type {import("eslint").Linter.Config} */
module.exports = {
  env: { node: true },
  extends: ['@repo/eslint-config/library.js'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: true
  }
};
