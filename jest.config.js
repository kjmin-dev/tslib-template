module.exports = {
    roots: ['<rootDir>'],
    testEnvironment: 'node',
    transform: { '^.+\\.tsx?$': 'ts-jest' },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(ts|js)x?$',
    coverageDirectory: 'coverage',
    collectCoverageFrom: ['src/**/*.{ts,tsx,js,jsx}', '!src/**/*.d.ts'],
    moduleNameMapper: {
        // Module alias
        '@test/(.*)': ['<rootDir>/test/$1'],
        '@/(.*)': ['<rootDir>/src/$1'],
    },
}
