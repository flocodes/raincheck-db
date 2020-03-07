module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: [
    'standard'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: [
    '@typescript-eslint'
  ],
  rules: {
    'comma-dangle': 'off',
    'max-len': ['warn', {'code': 150}],
    'no-multiple-empty-lines': ['warn', {'max': 2}],
    'no-trailing-spaces': ['warn', {'ignoreComments': true}],
    // Replace default eslint rule with typescript-specific one
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error', {
      'argsIgnorePattern': '^_',
      'varsIgnorePattern': '^_',
    }],
  },
  ignorePatterns: ['src/generated/**', 'build/**']
}
