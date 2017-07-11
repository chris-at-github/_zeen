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

				console.log(this.properties);

				return {
				}
			}
		},

		created: function() {
			this.settings = Cultures.settings;
		}
	}
</script>