const nextJest = require('next/jest')

// require('jest-fetch-mock').enableMocks()

const createJestConfig = nextJest({
  dir: './',
})

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleDirectories: ['node_modules', '<rootDir>/src'],
  testEnvironment: 'jest-environment-jsdom',
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.[jt]sx?$',
}

module.exports = createJestConfig(customJestConfig)
