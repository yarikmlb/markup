function initMap() {
	var mapCanvas = document.getElementById('map');
	var mapOptions = {
		zoom: 17, // уровень приближения
		center: {lat: 40.7038959, lng: -73.9502185},
		mapTypeId: google.maps.MapTypeId.ROADMAP, // тип карты ROADMAP, SATELLITE, HYBRID или TERRAIN
		//disableDefaultUI: true,
		// или
		mapTypeControl: true, // переключатель типа карты - ROADMAP, SATELLITE, HYBRID или TERRAIN
		streetViewControl: true, // человечек
		panControl: true, // круг с позиционированием
		zoomControl: true, // ползунок для масштабирования
		scaleControl: true, // шкала масштаба
	};
	var map = new google.maps.Map(mapCanvas, mapOptions);
	// стилизируем карту. https://snazzymaps.com/
	map.set([{"featureType":"water","elementType":"all","stylers":[{"hue":"#7fc8ed"},{"saturation":55},{"lightness":-6},{"visibility":"on"}]},{"featureType":"water","elementType":"labels","stylers":[{"hue":"#7fc8ed"},{"saturation":55},{"lightness":-6},{"visibility":"off"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"hue":"#83cead"},{"saturation":1},{"lightness":-15},{"visibility":"on"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"hue":"#f3f4f4"},{"saturation":-84},{"lightness":59},{"visibility":"on"}]},{"featureType":"landscape","elementType":"labels","stylers":[{"hue":"#ffffff"},{"saturation":-100},{"lightness":100},{"visibility":"off"}]},{"featureType":"road","elementType":"geometry","stylers":[{"hue":"#ffffff"},{"saturation":-100},{"lightness":100},{"visibility":"on"}]},{"featureType":"road","elementType":"labels","stylers":[{"hue":"#bbbbbb"},{"saturation":-100},{"lightness":26},{"visibility":"on"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"hue":"#ffcc00"},{"saturation":100},{"lightness":-35},{"visibility":"simplified"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"hue":"#ffcc00"},{"saturation":100},{"lightness":-22},{"visibility":"on"}]},{"featureType":"poi.school","elementType":"all","stylers":[{"hue":"#d7e4e4"},{"saturation":-60},{"lightness":23},{"visibility":"on"}]}]);

// Маркер
	var marker = new google.maps.Marker({
	map: map,
		// Define the place with a location, and a query string.
		place: {
			location: {lat: 40.7038959, lng: -73.9502185},
			query: 'Строка для определения'
		}
	});

	// Construct a new InfoWindow.
	var infoWindow = new google.maps.InfoWindow({
		content: 'Robinson Elevator Group, 127 Union Avenu '
	});

	// Opens the InfoWindow when marker is clicked.
	marker.addListener('click', function() {
		infoWindow.open(map, marker);
	});
}


// Загружаем карту
google.maps.event.addDomListener(window, 'load', initMap);
