module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended'
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    'vue/require-default-prop': 'off',
    semi: 'off',
    'no-useless-constructor': 'off',
    'import/named': 'off'
  }
}
