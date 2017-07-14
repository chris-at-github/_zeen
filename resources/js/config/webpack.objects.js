// run: webpack --config resources/js/config/webpack.objects.js

const path = require('path');
const plugin = require('svg-sprite-loader/plugin');

const config = {
	entry: './resources/js/build/objects.js',

	output: {
		filename: './storage/temp/objects.js'
	},

	module: {
		rules: [
			// images from img/flags goes to flags-sprite.svg
			{
				test:    /\.svg$/,
				loader:  'svg-sprite-loader',
				include: path.resolve('./resources/images/objects'),
				options: {
					symbolId: 'object-[name]',
					extract:        true,
					spriteFilename: './public/svg/objects.svg',

				}
			}
		]
	},

	plugins: [
		new plugin()
	]
};

module.exports = config;
