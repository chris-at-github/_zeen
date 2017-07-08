<template>
	<div>
		<!--<header-component/>-->
		<div>this is {{msg}}</div>
		<svg class="svg-tile">
			<use xlink:href="#green" />
		</svg>
		<!--<other-component/>-->
	</div>
</template>
<script>
	// import HeaderComponent from './components/header.vue'
	// import OtherComponent from './components/other.vue'
	export default{
		data() {
			return {
				msg: 'hello vue'
			}
		},
		components:{
			//'other-component':OtherComponent,
			//HeaderComponent,
		},
		created() {
			console.log(Cultures);
		},
		mounted() {
			console.log('mount');
		}
	}
</script>