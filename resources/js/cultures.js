window.$ = require('jquery');

var Vue = require('vue');
// var MapBuilder = require('./MapBuilder');
//
// $(function() {
// 	var map = new MapBuilder(Cultures.settings, $('#map'));
//
// 	$(window).on('resize', function() {
// 		map.recenterContainer();
// 	});
// });

Vue.component('cs-map', require('./components/map.vue'));

const application = new Vue({
	el: '#application'
});