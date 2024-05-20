import ts from "rollup-plugin-typescript2";
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import terser from "@rollup/plugin-terser";
import { createOutputsConfig, createPluginsConfig } from "./build/config.js";
import eslint from "@rollup/plugin-eslint";
const isDev = process.env.NODE_ENV == "dev";
const plugins = createPluginsConfig(isDev);
const outputs = createOutputsConfig(isDev, 'monitor.report', [
    'umd', 'esm', 'cjs', 'iife'
])
export default {
    input: "./src/index.ts",
    output: [
        ...outputs
    ],
    watch: {
        exclude: 'node_modules/**'
    },
    plugins: [
        ts(),
        resolve(),
        commonjs(),
        // eslint({
        //     include: ['src/**/*.ts'],
        //     exclude: ["node_modules/**"],
        // }),
        ...plugins
    ]
}