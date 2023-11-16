module.exports = {
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['@testing-library/react/dont-cleanup-after-each'],
    testMatch: ['<rootDir>/src/**/*.test.js?(x)'],
    moduleNameMapper: {
      '\\.(css|less|scss)$': 'identity-obj-proxy',
    },
  };
  