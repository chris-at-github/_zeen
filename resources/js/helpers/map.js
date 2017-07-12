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
			return (this.getMaxY() * (this.settings.tile.size));
		},

		getMapCenterPosition: function() {
			return {
				'x': (this.windowWidth - this.getMapWidth()) / 2,
				'y': (this.windowHeight - this.getMapHeight()) / 2
			};
		},

		getTileWidth: function() {
			return this.settings.tile.size * 2;
		},

		getTileHeight: function() {
			return this.settings.tile.size;
		},

		// x: 1, y:1
    // width: 128px;
    // height: 64px;
    // left: 0px;
    // top: 64px;
		//
    // x: 2, y: 2
    // width: 128px;
    // height: 64px;
    // left: 64px;
    // top: 96px;

		getTilePosition: function(x, y) {
			var nx = (x - y) * (this.settings.tile.size);
			// var nx = (x - y) * this.settings.tile.size;
			var ny = (x + y) * (this.settings.tile.size / 2);

			return {
				'x': nx,
				'y': ny
			};


			// var nx = (x * this.settings.tile.size) - y;
			// var ny = (x + (y * this.settings.tile.size)) / 2;
			//
			// console.log(nx, ny);
			//
			// return {
			// 	'x': (2 * ny + nx) / 2,
			// 	'y': (2 * ny - nx) / 2
			// };

			// return {
			// 	'x': (x - 1) * this.settings.tile.size,
			// 	'y': (y - 1) * this.settings.tile.size
			// };
		}
	}
};