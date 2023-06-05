import type {Config} from 'jest';

const config: Config = {
  moduleNameMapper: {
    '^@components/(.*)$': '<rootDir>/src/components/$1',
    '^@constants/(.*)$': '<rootDir>/src/constants/$1',
    '^@hooks/(.*)$': '<rootDir>/src/hooks/$1',
    '^@styles/(.*)$': '<rootDir>/src/styles/$1',
    '^@utils/(.*)$': '<rootDir>/src/utils/$1',
    '^@types/(.*)$': '<rootDir>/src/types/$1',
    '^@icons/(.*)$': '<rootDir>/src/icons/$1',
  },
  transform: {
    "^.+\\.(ts|tsx|js|jsx)$": "ts-jest"
  },
  testEnvironment: 'jsdom'
};

export default config;