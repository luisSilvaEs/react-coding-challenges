module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true,
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:react/recommended',
      'plugin:react-hooks/recommended',
      'plugin:jsx-a11y/recommended',
    ],
    rules: {
      'react/react-in-jsx-scope': 'off',
      '@typescript-eslint/no-redeclare': 'warn',
      '@typescript-eslint/no-unused-vars': 'warn',
      'react/no-unescaped-entities': 'off',
      'no-useless-escape': 'off',
      '@typescript-eslint/no-empty-function': 'off',
    },
    env: {
      browser: true,
      node: true,
      es6: true,
    },
    plugins: ['@typescript-eslint', 'react', 'react-hooks', 'jsx-a11y'],
  };
  