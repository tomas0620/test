window.onload = function () {
	var map = L.map('map');
	L.TileLayer.sygic('nbqm8YwdrLgg396jr85qLPjBe').addTo(map);

	map.setView([40.7667, -73.9780], 14); // Hello Central Park!
};
