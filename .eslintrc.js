module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', '@vue/standard'],
  rules: {
    'arrow-parens': 0,
    'generator-star-spacing': 'off',
    'space-before-function-paren': ['error', 'never'],
    'no-unused-vars': [2, { vars: 'local', args: 'none' }],
    semi: [0],
    eqeqeq: [0],
    quotes: [1, 'single'],
    'no-multiple-empty-lines': [0, { max: 100 }],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
};
