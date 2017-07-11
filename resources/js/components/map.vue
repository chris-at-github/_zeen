<template>
	<div class="map" v-bind:style="styleObject">
		<div class="map--tile-container">
			<cs-tile x="1" y="1"></cs-tile>
		</div>
	</div>
</template>

<script>
	import MapHelper from '../helpers/map';
	import Tile from './tile'

	export default {
		mixins: [
			MapHelper
		],

		// @see: https://vuejs.org/v2/guide/components.html#Local-Registration
		components: {
			'cs-tile': Tile
		},

		data: function() {
			return {
				settings: {},
				scene: {}
			}
		},

		computed: {
			styleObject: function() {
				return {
					'width': this.getMapWidth() + 'px',
					'height': this.getMapHeight() + 'px',
					'top': this.getMapCenterPosition().y + 'px',
					'left': this.getMapCenterPosition().x + 'px'
				}
			}
		},

		created: function() {
			this.settings = Cultures.settings;
			this.scene = Cultures.scene;
		}
	}
</script>