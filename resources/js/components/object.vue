<template>
	<div class="object" v-bind:style="styleObject">
		<!--
			<svg class="tile--terrain">
				<use v-bind="{'xlink:href':'#' + terrain}" />
			</svg>
		-->
	</div>
</template>

<script>
	import MapHelper from '../helpers/map';

	// use xlink:href binding
	// @see: https://github.com/vuejs/vue/issues/648#issuecomment-304664977
	export default {
		mixins: [
			MapHelper
		],

		props: ['position', 'size'],

		data: function() {
			return {
				settings: {},
				scene: {}
			}
		},

		computed: {
			styleObject: function() {
				return {
					'width':  35 + 'px',
					'height': 35 + 'px',
					'left':   0 + 'px',
					'top':    0 + 'px'
				}
			}
		},

		created: function() {
			this.settings = Cultures.settings;
			this.scene = Cultures.scene;
		}
	}
</script>