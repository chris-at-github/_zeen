<template>
	<div class="tile" v-bind:style="styleObject">{{x}} / {{y}}</div>
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
				}
			}
		},

		created: function() {
			this.settings = Cultures.settings;
		}
	}
</script>