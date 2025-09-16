const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './index.js'
    },

    plugins: [
        new ESLintPlugin({
            failOnError: true,
            configType: 'flat'
        })
    ]
};
