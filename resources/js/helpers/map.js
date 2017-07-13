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

			// @see: https://stackoverflow.com/questions/4615116/how-to-calculate-the-height-and-width-of-an-isometric-rectangle-square#answer-4618210
			return ((this.getMaxX() + this.getMaxY()) * (this.getTileWidth() / 2));
		},

		getMapHeight: function() {
			return ((this.getMaxX() + this.getMaxY()) * (this.getTileHeight() / 2));
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
			return this.settings.tile.size / 2;
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
			return {
				'x': (x - y) * (this.getTileWidth() / 2),
				'y': (x + y) * (this.getTileHeight() / 2)
			};
		}
	}
};