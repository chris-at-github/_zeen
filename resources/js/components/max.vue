<template>
	<div class="map" v-bind:style="styleObject">{{msg}}</div>
</template>

<script>
	import MapHelper from '../helpers/map';

	export default {
		mixins: [
			MapHelper
		],

		data: function() {
			return {
				msg: 'hello vuex',
				settings: {}
			}
		},

		computed: {
			styleObject: function() {
				return {
					'width': this.getMapWidth() + 'px',
					'height': '100px'
				}
			}
		},

		created: function() {
			this.settings = Cultures.settings;

//			console.log(this.settings);
		}
	}
</script>