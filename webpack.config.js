const WebpackObfuscator = require("webpack-obfuscator");

const path = require("path");

const student = "workbook_repository_name"

module.exports = {
    mode: "production",
    entry: `./student/${student}/for_students/final-grtown.js`,

    experiments: {
        topLevelAwait: true
    },
    module: {
        rules: [
            {
                test: /\.(png|jpg|jpeg|gif|ico)$/i,
                type: "asset/resource",
            },
            {
                test: /.*.vs$/i,
                type: "asset/source"
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.js$/i,
                enforce: 'post',
                use: { 
                    loader: WebpackObfuscator.loader, 
                    options: {
                        reservedStrings: [ '\s*' ],
                        rotateStringArray: true,
                    }
                }
            }
        ],
    },

    plugins: [
        new WebpackObfuscator({
            reservedStrings: [ '\s*' ],
            rotateStringArray: true,
        }, [])
    ],

    output: {
        filename: "final-grtown.js",
        path: path.resolve(__dirname, `./student/${student}/for_students`),
    },
};
