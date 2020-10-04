module.exports = {
  testEnvironment: 'node',
  clearMocks: true,
  coverageDirectory: 'coverage',
  collectCoverageFrom: ['src/**/*.*', '!**/node_modules/**', '!**/dist/**'],
  coveragePathIgnorePatterns: [
    'node_modules',
    'coverage',
    'src/models/index.ts',
    'src/middlewares/joiErrors.ts',
    'src/middlewares/asyncHandler.ts',
    'src/config',
    'src/constants',
    'src/resources/api/v1/swagger',
    'src/database/migrations',
    'src/database/seeders',
    'src/database/seeders-data',
    'src/server.ts'
  ],
  verbose: true,
  coverageThreshold: {
    global: {
      functions: 0,
      lines: 0,
      statements: -10000,
    },
  },
  moduleFileExtensions: ['ts', 'js', 'json'],
  testMatch: ['**/__tests__/**/*.(spec|test).ts?(x)'],
  transform: {
    '^.+\\.ts?$': 'babel-jest',
  },
  setupFilesAfterEnv: ['./jest.setup.js'],
};
