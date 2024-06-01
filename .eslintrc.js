module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
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
      // Add your custom rules here
      '@typescript-eslint/no-redeclare': 'warn',
      '@typescript-eslint/no-unused-vars': 'warn',
    },
    env: {
      browser: true,
      node: true,
      es6: true,
    },
    plugins: ['@typescript-eslint', 'react', 'react-hooks', 'jsx-a11y'],
  };
  