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

	function Tile(x, y, options) {
		this.x = 0;
		this.y = 0;
		this.container = $('<div>');
		this.options = $.extend({}, Tile.DEFAULTS, options);

		var tile = this;
		var initialize = function() {
			tile
				.setX(x)
				.setY(y)
				.initializeContainer();
		};

		initialize();
	}

	/**
	 * @param int x
	 * @return Tile
	 */
	Tile.prototype.setX = function(x) {
		this.x = x;

		return this;
	};

	/**
	 * @param int y
	 * @return Tile
	 */
	Tile.prototype.setY = function(y) {
		this.y = y;

		return this;
	};

	/**
	 * @return Tile
	 */
	Tile.prototype.initializeContainer = function() {
		this.container.addClass('tile');
		this.container.css({
			'width': this.getWidth(),
			'height': this.getHeight(),
			'left': this.getPosition().x,
			'top': this.getPosition().y
		});

		return this;
	};

	/**
	 * @return object
	 */
	Tile.prototype.render = function() {
		return this.container;
	};

	/**
	 * @return int
	 */
	Tile.prototype.getWidth = function() {
		return this.options.size;
	};

	/**
	 * @return int
	 */
	Tile.prototype.getHeight = function() {
		return this.options.size;
	};

	/**
	 * @return object
	 */
	Tile.prototype.getPosition = function() {
		return {
			'x': (this.x - 1) * this.options.size,
			'y': (this.y - 1) * this.options.size
		};
	};

	Tile.DEFAULTS = {
		'size': 100
	};

	return Tile;
});