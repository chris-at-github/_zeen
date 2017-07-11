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
			return (this.getMaxY() * this.settings.tile.size);
		},

		getMapCenterPosition: function() {
			return {
				'x': (this.windowWidth - this.getMapWidth()) / 2,
				'y': (this.windowHeight - this.getMapHeight()) / 2
			};
		}
	}
};