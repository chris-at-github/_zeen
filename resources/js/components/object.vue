<template>
	<div class="object" v-bind:style="styleObject">
			<svg class="object--skeleton">
				<use v-bind="{'xlink:href':'#object-' + id}" />
			</svg>
	</div>
</template>

<script>
	import MapHelper from '../helpers/map';
	import ObjectHelper from '../helpers/object';

	// use xlink:href binding
	// @see: https://github.com/vuejs/vue/issues/648#issuecomment-304664977
	export default {
		mixins: [
			MapHelper,
			ObjectHelper
		],

		props: ['id', 'position', 'size'],

		data: function() {
			return {
				settings: {},
				scene: {}
			}
		},

		computed: {
			styleObject: function() {
				return {
					'width':  this.size.width + 'px',
					'height': this.size.height + 'px',
					'left': this.getObjectPosition().x + 'px',
					'top': this.getObjectPosition().y + 'px'
				}
			}
		},

		created: function() {
			this.settings = Cultures.settings;
			this.scene = Cultures.scene;
		}
	}
</script>