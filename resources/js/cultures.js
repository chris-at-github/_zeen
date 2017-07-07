var $ = require('jquery');
var MapBuilder = require('./MapBuilder');

$(function() {
	var map = new MapBuilder(Cultures.settings, $('#map'));

	$(window).on('resize', function() {
		map.recenterContainer();
	});
});