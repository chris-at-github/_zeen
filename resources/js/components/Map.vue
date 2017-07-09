<template>
	<div class="map" v-bind:style="styleObject">{{msg}}</div>
</template>

<script>
	export default {
		data: function() {
			return {
				msg: 'hello vuex'
			}
		},

		computed: {
			styleObject: function() {
				return {
					'width': '100px',
					'height': '100px'
				}
			}
		}
	}
</script>