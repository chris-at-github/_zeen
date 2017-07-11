<template>
	<div class="tile" v-bind:style="styleObject"></div>
</template>

<script>
	import MapHelper from '../helpers/map';

	export default {
		mixins: [
			MapHelper
		],

		props: ['properties'],

		data: function() {
			return {
				settings: {}
			}
		},

		computed: {
			styleObject: function() {
				return {
					'width':  this.getTileWidth() + 'px',
					'height': this.getTileHeight() + 'px',
					'left':   this.getTilePosition(this.properties.x, this.properties.y).x + 'px',
					'top':    this.getTilePosition(this.properties.x, this.properties.y).y + 'px'
				}
			}
		},

		created: function() {
			this.settings = Cultures.settings;
		}
	}
</script>