<template>
	<div class="map" v-bind:style="styleObject">
		<div class="map--tile-container">
			<cs-tile
				 v-for="(tile, index) in tiles"
				 v-bind:x="tile.x"
				 v-bind:y="tile.y"
				 v-bind:terrain="tile.terrain"
				 v-bind:key="index">
			</cs-tile>
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
			},

			tiles: function() {
				return this.scene.tiles;
			}
		},

		created: function() {
			this.settings = Cultures.settings;
			this.scene = Cultures.scene;
		}
	}
</script>