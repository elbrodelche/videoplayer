module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    '@react-native-community',
    'eslint-config-prettier',
  ],
  env: {
    'react-native/react-native': true,
    jest: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react', 'react-native'],
  rules: {
    strict: ['error', 'never'],
    'no-unused-vars': 2,
    'no-shadow': 2,
    'react-native/no-inline-styles': 0,
    'no-sequence': 0,
    'no-sequences': 0,
    'no-useless-escape': 0,
    'handle-callback-err': 0,
    'react/self-closing-comp': 0,
  },
}
