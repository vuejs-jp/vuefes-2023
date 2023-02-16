module.exports = {
  extends: ['plugin:vue/vue3-recommended', 'plugin:vuejs-accessibility/recommended'],
  plugins: ['vuejs-accessibility', '@typescript-eslint'],
  root: true,
  env: { node: true, es6: true },
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  rules: {
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    'object-curly-spacing': ['error', 'always'],
    'keyword-spacing': 'error',
    'vue/multi-word-component-names': [
      'error',
      {
        ignores: ['index', 'default', 'error'],
      },
    ],
  },
}
