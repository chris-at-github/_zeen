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
	var Tile = require('./Tile');

	function MapBuilder(options, container) {
		this.container = $('<div>');
		this.options = $.extend({}, MapBuilder.DEFAULTS, options);
		this.service = new MapService(this.options);

		var builder = this;
		var initialize = function() {

			if(container !== undefined) {
				builder
					.setContainer(container)
					.initializeContainer();
			}
		};

		initialize();
	}

	MapBuilder.DEFAULTS = {
		'map': {
			'x': 1,
			'y': 1
		},
		'tile': {
			'size': 100
		}
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

		// Generating tiles (and container)
		this
			.createTileContainer()
			.createTiles();

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

	/**
	 * @return MapBuilder
	 */
	MapBuilder.prototype.createTileContainer = function() {
		var container = $('<div>');
				container.addClass('map--tile-container');
		this.container.append(container);

		return this;
	};

	/**
	 * @return MapBuilder
	 */
	MapBuilder.prototype.createTiles = function() {
		var container = this.container.find('.map--tile-container');

		for(var x = 1; x <= this.options.map.x; x++) {
			for(var y = 1; y <= this.options.map.y; y++) {
				var tile = new Tile(x, y);

				container.append(tile.render());
			}
		}

		return this;
	};

	return MapBuilder;
});