module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: [
    'airbnb-base',
    'plugin:wc/recommended',
    'plugin:jsdoc/recommended'
  ],
  globals: {
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  rules: {
    semi: ['error'],
    indent: ['error', 2],
    'jsdoc/newline-after-description': 0
  }
}
