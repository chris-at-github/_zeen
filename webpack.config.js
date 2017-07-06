// var mix = require('laravel-mix');

// const spriteLoaderPlugin = require('svg-sprite-loader/plugin');

// Autoload jQuery
// @see: https://github.com/JeffreyWay/laravel-mix/blob/master/docs/autoloading.md
// mix.autoload({
// 	jquery: ['$', 'window.jQuery']
// });

// @see: https://www.npmjs.com/package/svg-sprite-loader
// @see: https://laracasts.com/discuss/channels/laravel/help-needed-svg-sprites-with-laravelmix
// @see: https://github.com/JeffreyWay/laravel-mix/issues/350
// mix.webpackConfig({
// 	// plugins: [
// 	// 	new SpriteLoaderPlugin()
// 	// ],
// 	module: {
// 		rules: [
// 			// {
// 			// 	test:    /\.svg-sprite$/,
// 			// 	loader:  'svg-sprite-loader',
// 			// 	options: {
// 			// 		name:      '[name]_[hash]',
// 			// 		prefixize: true
// 			// 	}
// 			// }
// 			// {
// 			// 	test:    /\.svg$/,
// 			// 	loader:  'svg-sprite-loader',
// 			// 	include: path.resolve('./resources/images/tiles/'),
// 			// 	options: {
// 			// 		// extract:        true,
// 			// 		// spriteFilename: 'sprite.svg'
// 			// 	}
// 			// },
// 			{
// 				test:    /\.svg$/,
// 				loader:  'svg-sprite-loader',
// 				options: {
// 					runtimeCompat: true
// 				}
// 			}
// 		]
// 	}
// 	// plugins: [
// 	// 	new spriteLoaderPlugin()
// 	// ]
// });

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

// mix.js('resources/js/cultures.js', 'public/js')
// 	.sass('resources/scss/screen.scss', 'public/css');

const path = require('path');
const packageName = require('./package.json').name;
const spriteLoaderPlugin = require('svg-sprite-loader/plugin');

const config = {
	entry: './main',

	output: {
		filename: 'xyz.js'
	},

	resolve: {
		alias: {
			[packageName]: path.resolve(__dirname, '..')
		}
	},

	resolveLoader: {
		alias: {
			[packageName]: path.resolve(__dirname, '..')
		}
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
					spriteFilename: 'flags-sprite.svg'
				}
			}
		]
	},

	plugins: [
		new spriteLoaderPlugin()
	]
};

module.exports = config;
