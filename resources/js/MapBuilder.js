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

	var MapService = require('./MapService');

	function MapBuilder(options, container) {
		this.container = $('<div>');
		this.options = $.extend({}, MapBuilder.DEFAULTS, options);
		this.service = new MapService();

		var _ = this;
		var initialize = function() {

			if(container !== undefined) {
				_.setContainer(container)
					.initializeContainer();
			}
		};

		initialize();
	}

	MapBuilder.DEFAULTS = {
	};

	/**
	 * @param object container
	 * @return MapBuilder
	 */
	MapBuilder.prototype.setContainer = function(container) {
		this.container = container;

		return this;
	};

	/**
	 * @return MapBuilder
	 */
	MapBuilder.prototype.initializeContainer = function() {
		this.container.addClass('map');
		this.container.css({
			'width': this.service.getWidth(),
			'height': this.service.getHeight(),
			'top': this.service.getCenterPosition().y,
			'left': this.service.getCenterPosition().x
		});

		return this;
	};

	/**
	 * @return MapBuilder
	 */
	MapBuilder.prototype.recenterContainer = function() {
		this.container.css({
			'top': this.service.getCenterPosition().y,
			'left': this.service.getCenterPosition().x
		});

		return this;
	};

	return MapBuilder;
});