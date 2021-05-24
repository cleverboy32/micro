const path = require('path');
const htmlWbepackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	mode: 'development',
  entry: './pages/index.js',
	output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
	},
	plugins: [
		new htmlWbepackPlugin({
			template: path.join(__dirname, './pages/index.html'),
			filename: 'index.html'
		}),
		new CleanWebpackPlugin({
			path: path.join(__dirname, 'dist')
		})
	],
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				}
			}
		]
	},
	devServer: {
		port: 1235,
		contentBase: path.join(__dirname, 'dist'),
		hot: true,
		host: '0.0.0.0',
		inline: true,
		progress: true,
		disableHostCheck: true,
	}
};