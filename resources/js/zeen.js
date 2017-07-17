var Vue = require('vue');

Vue.component('cs-map', require('./components/map.vue'));

const application = new Vue({
	el: '#application'
});