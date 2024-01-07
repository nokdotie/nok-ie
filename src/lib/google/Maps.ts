import { browser } from '$app/environment';

export let geoCoderPromise: Promise<google.maps.Geocoder>;
export let autoCompleteServicePromise: Promise<google.maps.places.AutocompleteService>;
export let mapPromise: Promise<
	(mapDiv: HTMLElement, opts: google.maps.MapOptions | undefined) => google.maps.Map
>;

export let getDefaultBounds: () => google.maps.LatLngBounds;

if (browser) {
	const loaderPromise = import('@googlemaps/js-api-loader').then(
		({ Loader }) =>
			new Loader({
				apiKey: 'AIzaSyCBWjrhJwEXy-liFf_Vu3BiZe9VTJ0_mag',
				version: 'weekly'
			})
	);

	const geocodingPromise = loaderPromise.then((loader) => loader.importLibrary('geocoding'));

	geoCoderPromise = geocodingPromise.then(({ Geocoder }) => new Geocoder());

	const placesPromise = loaderPromise.then((loader) => loader.importLibrary('places'));

	autoCompleteServicePromise = placesPromise.then(
		({ AutocompleteService }) => new AutocompleteService()
	);

	const mapsPromise = loaderPromise.then((loader) => loader.importLibrary('maps'));
	mapPromise = mapsPromise.then(
		({ Map }) =>
			(mapDiv: HTMLElement, opts: google.maps.MapOptions | undefined) =>
				new Map(mapDiv, opts)
	);

	getDefaultBounds = () =>
		new google.maps.LatLngBounds(
			new google.maps.LatLng(51.3066, -10.7666),
			new google.maps.LatLng(55.4602, -5.6689)
		);
}
