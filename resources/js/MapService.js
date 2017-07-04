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

	function MapService(options) {
		this.options = $.extend({}, MapService.DEFAULTS, options);
	}

	MapService.DEFAULTS = {
		'map': {
			'x': 1,
			'y': 1
		},
		'tile': {
			'width': 100,
			'height': 100
		}
	};

	/**
	 * @return int
	 */
	MapService.prototype.getWidth = function() {
		return (this.options.map.x * this.options.tile.width);
	};

	/**
	 * @return int
	 */
	MapService.prototype.getHeight = function() {
		return (this.options.map.y * this.options.tile.height);
	};

	return MapService;
});