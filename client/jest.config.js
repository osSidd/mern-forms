export default {
    preset: 'ts-jest',
    testEnvironment: 'jest-environment-jsdom',
    transform: {
        // "^.+\\.tsx?$": "babel-jest" 
        "^.+\\.[jt]sx?$": "babel-jest",
    // process `*.tsx` files with `ts-jest`
    },
    moduleNameMapper: {
        ".+\\.(css|styl|less|sass|scss)$": `identity-obj-proxy`,
        '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/src/test/__mocks__/fileMock.ts',
    },
}