module.exports = {
  preset: 'react-native',
  displayName: 'codebase',
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  transform: {
    '^.+\\.(jsx?)$': '<rootDir>/node_modules/react-native/jest/preprocessor.js',
  },
  timers: 'fake',
  testEnvironment: 'jsdom',
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '!**/.history/**/*.[jt]s?(x)'],
  moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
  globals: {
    window: {},
  },
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|react-clone-referenced-element|@react-native-community|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|native-base)',
  ],
}
