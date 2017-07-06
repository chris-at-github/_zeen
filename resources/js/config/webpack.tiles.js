// run: webpack --config resources/js/config/webpack.tiles.js

const path = require('path');
const plugin = require('svg-sprite-loader/plugin');

const config = {
	entry: './resources/js/build/tiles.js',

	output: {
		filename: './storage/temp/tiles.js'
	},

	module: {
		rules: [
			// images from img/flags goes to flags-sprite.svg
			{
				test:    /\.svg$/,
				loader:  'svg-sprite-loader',
				include: path.resolve('./resources/images/tiles'),
				options: {
					extract:        true,
					spriteFilename: './public/svg/tiles.svg'
				}
			}
		]
	},

	plugins: [
		new plugin()
	]
};

module.exports = config;
