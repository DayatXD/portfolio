module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
    'prettier',
    "eslint:recommended",
    "plugin:vue/vue3-essential"
  ],
  plugins: [],
  // add your custom rules here
  rules: {},
}
