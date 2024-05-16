import type { Config } from '@jest/types';

const jestConfig: Config.InitialOptions = {
    testEnvironment: "jsdom",
    testMatch: ['**/__tests__/**/*.+(ts|tsx|js)', '**/?(*.)+(spec|test).+(ts|tsx|js)'], // Jest 测试文件的匹配模式  
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest', // 使用 ts-jest 转换 TypeScript 文件  
    },
    moduleFileExtensions: [
        'ts',
        'tsx',
        'js',
        'jsx',
        'json',
        'node',
    ],
    testPathIgnorePatterns: ['/node_modules/', '\\.snap$'],
    // setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'], // 如果你使用了 testing-library  

}
export default jestConfig;