module.exports = {
  extends: ['plugin:vue/vue3-recommended', 'plugin:vuejs-accessibility/recommended'],
  plugins: ['vuejs-accessibility', '@typescript-eslint'],
  root: true,
  env: { node: true, es6: true },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  rules: {
    quotes: ['error', 'single', { avoidEscape: true }],
    semi: ['error', 'never'],
    'object-curly-spacing': ['error', 'always'],
    'keyword-spacing': 'error',
    'vue/html-closing-bracket-newline': 'off',
    'vue/html-indent': 'off',
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
          normal: 'always',
          component: 'always',
        },
        svg: 'always',
        math: 'always',
      },
    ],
    'vue/max-attributes-per-line': 'off',
    'vue/multi-word-component-names': [
      'error',
      {
        ignores: ['index', 'default', 'error', 'privacy', 'register', 'users', 'events', 'Provider', '[id]'],
      },
    ],
    'vue/multiline-html-element-content-newline': 'off',
    'vue/singleline-html-element-content-newline': 'off',
  },
}
