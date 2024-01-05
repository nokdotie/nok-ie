import { browser } from '$app/environment';

export let geoCoderPromise: Promise<google.maps.Geocoder>;
export let autoCompleteServicePromise: Promise<google.maps.places.AutocompleteService>;

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
}
