! (function(root, factory) {
	if(typeof define === 'function' && define.amd) {
		define(['jquery'], function($) {
			return factory(root, $);
		});
	} else if(typeof exports === 'object') {
		factory(root, require('jquery'));

	} else {
		factory(root, root.jQuery || root.Zepto);
	}
})(this, function(global, $, undefined) {
	'use strict';

	// @see: http://clintbellanger.net/articles/isometric_math/
	function MapService(options) {
		this.options = $.extend({}, MapService.DEFAULTS, options);
	}

	MapService.DEFAULTS = {};

	/**
	 * @return int
	 */
	MapService.prototype.getWidth = function() {
		return (this.options.map.x * this.options.tile.size);
	};

	/**
	 * @return int
	 */
	MapService.prototype.getHeight = function() {
		return (this.options.map.y * this.options.tile.size);
	};

	/**
	 * @return object
	 */
	MapService.prototype.getCenterPosition = function() {
		return {
			'x': ($(window).width() - this.getWidth()) / 2,
			'y': ($(window).height() - this.getHeight()) / 2
		};
	};

	return MapService;
});