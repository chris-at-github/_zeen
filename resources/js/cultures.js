var $ = require('jquery');
var MapBuilder = require('./MapBuilder');

$(function() {
	var map = new MapBuilder(null, $('#map'));

	$(window).on('resize', function() {
		map.recenterContainer();
	});
});