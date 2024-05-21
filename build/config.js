import babel from "@rollup/plugin-babel";
import terser from "@rollup/plugin-terser";

/**
 * 
 * @returns  插件集合
 */
export const createPluginsConfig = (isDev) => {
    const plugins = [];
    if (!isDev) {
        plugins.push(
            babel({
                exclude: 'node_modules/**',
                babelHelpers: "runtime",
                presets: [["@babel/preset-env", {
                    "modules": false,
                    "useBuiltIns": "usage",
                    "corejs": 3,// 指定 core-js 的版本  
                    "targets": {
                        "edge": '17',
                        "firefox": '60',
                        "chrome": '67',
                        "safari": '11.1',
                        'ie': '10',
                    },
                }, "@babel/preset-typescript"]],
                extensions: ['.ts'],
                plugins: [['@babel/plugin-transform-runtime']]
            })
        )
        plugins.push(terser())
    }

    return plugins;
}

export const createOutputsConfig = (isDev, name, formats = []) => {
    const outputs = [];
    const min = isDev ? '' : '.min';
    formats.forEach(format => {
        outputs.push({
            file: `./dist/${name}.${format}${min}.js`,
            format,
            name: "monitorReport" //配置打包结果
        })
    })
    return outputs;
}