import { watch } from "rollup";
import ts from "rollup-plugin-typescript2";
import license from 'rollup-plugin-license';
import server from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'
export default {
    input: "./src/index.ts",
    output: [
        {
            file: "./dist/monitor.report.umd-bundler.js",
            format: 'umd',
            name: 'init',   //配置打包结果
        },
        {
            file: "./dist/monitor.report.esm-bundler.js",
            format: 'esm',
            name: 'init',   //配置打包结果
        },
        {
            file: "./dist/monitor.report.cjs-bundler.js",
            format: 'cjs',
            name: 'init',   //配置打包结果

        },
        {
            file: "./dist/monitor.report.iife-bundler.js",
            format: 'iife',
            name: 'init',   //配置打包结果

        },
    ],
    watch: {
        exclude: 'node_modules/**'
    },
    plugins: [
        ts(),
        // livereload(),
        // server({
        //     open: true,
        //     port: 1988,
        //     openPage: "/public/index.html"
        // })
    ]
}