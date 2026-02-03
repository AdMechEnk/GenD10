module.exports = {
  env: {
    browser: true,
    es2021: true,
    jquery: true
  },
  extends: [
    'eslint:recommended',
    'prettier'
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  rules: {
    'no-console': 'warn',
    'no-debugger': 'warn',
    'no-unused-vars': 'error',
    'no-undef': 'error',
    'prettier/prettier': 'error'
  },
  plugins: [
    'prettier'
  ]
};
