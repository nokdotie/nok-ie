const apiKey = 'AIzaSyCBWjrhJwEXy-liFf_Vu3BiZe9VTJ0_mag';

const defaults = {
	center: { lat: 53.4, lng: -8 },
	zoom: 7
};

const styles = {
	map: [
		{
			featureType: 'poi.attraction',
			stylers: [{ visibility: 'off' }]
		},
		{
			featureType: 'poi.business',
			stylers: [{ visibility: 'off' }]
		},
		{
			featureType: 'poi.government',
			stylers: [{ visibility: 'off' }]
		},
		{
			featureType: 'poi.medical',
			stylers: [{ visibility: 'off' }]
		},
		{
			featureType: 'poi.place_of_worship',
			stylers: [{ visibility: 'off' }]
		},
		{
			featureType: 'poi.school',
			stylers: [{ visibility: 'off' }]
		},
		{
			featureType: 'poi.sports_complex',
			stylers: [{ visibility: 'off' }]
		},
		{
			featureType: 'poi.park',
			elementType: 'labels.text',
			stylers: [{ visibility: 'off' }]
		},
		{
			featureType: 'poi.business',
			stylers: [{ visibility: 'off' }]
		},
		{
			featureType: 'poi.business',
			stylers: [{ visibility: 'off' }]
		}
	]
};

export default {
	apiKey,
	defaults,
	styles
};
