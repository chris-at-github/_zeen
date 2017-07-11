import _ from 'lodash';

export default {
	data: function() {
		return {
			windowWidth: window.innerWidth,
			windowHeight: window.innerHeight
		};
	},

	beforeDestroy: function () {
		window.removeEventListener('resize', this.onWindowResize)
	},

	mounted() {
		window.addEventListener('resize', this.onWindowResize);
	},

	// Calculate tile sizes and positions
	// @see: http://clintbellanger.net/articles/isometric_math/
	methods: {

		// @see: https://github.com/vuejs/vue/issues/1915
		onWindowResize(event) {
			this.windowWidth = event.currentTarget.innerWidth;
			this.windowHeight = event.currentTarget.innerHeight;
		},

		getMaxX: function() {
			return _.maxBy(this.scene.tiles, function(tile) {
				return tile.x;
			}).x;
		},

		getMaxY: function() {
			return _.maxBy(this.scene.tiles, function(tile) {
				return tile.y;
			}).y;
		},

		getMapWidth: function() {
			return (this.getMaxX() * this.settings.tile.size);
		},

		getMapHeight: function() {
			return (this.getMaxY() * (this.settings.tile.size / 2));
		},

		getMapCenterPosition: function() {
			return {
				'x': (this.windowWidth - this.getMapWidth()) / 2,
				'y': (this.windowHeight - this.getMapHeight()) / 2
			};
		},

		getTileWidth: function() {
			return this.settings.tile.size;
		},

		getTileHeight: function() {
			return (this.settings.tile.size / 2);
		},

		getTilePosition: function(x, y) {
			return {
				'x': (x - 1) * this.settings.tile.size,
				'y': (y - 1) * this.settings.tile.size
			};
		}
	}
};