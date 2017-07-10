import _ from 'lodash';

export default {
	methods: {
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
				'x': ($(window).width() - this.getMapWidth()) / 2,
				'y': ($(window).height() - this.getMapHeight()) / 2
			};
		}
	}
};