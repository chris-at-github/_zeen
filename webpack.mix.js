var mix = require('laravel-mix');
		mix.setPublicPath('.');

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

mix.js('src/js/cultures.js', 'build/js')
	.sass('src/scss/screen.scss', 'build/css')
