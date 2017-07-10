<template>
	<div class="map" v-bind:style="styleObject"></div>
</template>

<script>
	import _ from 'lodash';
	import MapHelper from '../helpers/map';

	export default {
		mixins: [
			MapHelper
		],

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