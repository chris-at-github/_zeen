!(function(root, factory) {
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

	function MapBuilder(options, container) {
		this.container = $('<div>');
		this.options = $.extend({}, MapBuilder.DEFAULTS, options);

		var _ = this;
		var initialize = function() {

			if(container !== undefined) {
				_.setContainer(container)
			}
		};

		initialize();
	}

	MapBuilder.DEFAULTS = {
	};

	MapBuilder.prototype.setContainer = function(container) {
		this.container = container;

		console.log(this.container);
	};

	return MapBuilder;
});


//
//
//
//
//
// module.exports = (function() {
// 	var _ = this;
//
// 	this.container = null;
//
// 	return {
// 		setContainer: function(container) {
// 			_.container = container;
// 		}
// 	};
// })();