module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': 'warn',
    'quotes' : ['error', 'single'],
    'no-unused-vars': 'error',
    'max-len': ['error', { 'code': 80 }],
    'curly': 'error',
    // 'no-console': 'error',
    'consistent-return': 1,
    'indent'           : [1, 2],
    'no-else-return'   : 1,
    'semi'             : [1, 'always'],
    'space-unary-ops'  : 2
  },
};
