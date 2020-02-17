const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = [
    {
        mode: "development",
        target: "electron-main",
        entry: {
            main: path.join(__dirname, "src", "index.ts")
        },
        output: {
            path: path.join(__dirname, "dist"),
            filename: "index.js"
        },
        node: {
            __dirname: false,
            __filename: false
        },
        module: {
            rules: [
                {
                    test: /\.ts/,
                    use: "ts-loader",
                }
            ]
        },
        resolve: {
            modules: ["node_modules"],
            extensions: [".ts", ".js"]
        }
    },
    {
        mode: "development",
        target: "electron-renderer",
        entry: {
            mainPage: path.join(__dirname, "src", "main.tsx")
        },
        output: {
            path: path.join(__dirname, "dist"),
            filename: "main.js"
        },
        node: {
            __dirname: false,
            __filename: false
        },
        module: {
            rules: [
                {
                    test: /\.ts(x?)/,
                    use: "ts-loader",
                }
            ]
        },
        resolve: {
            modules: ["node_modules"],
            extensions: [".ts", ".js", ".tsx", ".jsx"]
        },
        plugins: [
            new CopyWebpackPlugin([{
                from: path.resolve(__dirname, "src", "main.html")
            }])
        ]
    }
]