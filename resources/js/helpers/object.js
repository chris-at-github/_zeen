export default {
	methods: {
		getObjectPosition: function() {
			return {
				'x': this.getTileCenterPosition(this.position.x, this.position.y).x,
				'y': this.getTileCenterPosition(this.position.x, this.position.y).y
			};
		},
	}
};