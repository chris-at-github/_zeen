<template>
	<div class="tile" v-bind:style="styleObject">
		<svg class="tile--terrain">
			<use xlink:href="#water" />
		</svg>
	</div>
</template>

<script>
	import MapHelper from '../helpers/map';

	export default {
		mixins: [
			MapHelper
		],

		props: ['x', 'y'],

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
					'left':   this.getTilePosition(this.x, this.y).x + 'px',
					'top':    this.getTilePosition(this.x, this.y).y + 'px'
				}
			}
		},

		created: function() {
			this.settings = Cultures.settings;
		}
	}
</script>