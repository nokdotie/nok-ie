<script lang="ts">
	import { onMount } from 'svelte';

	export let advert: {
		propertyCoordinates: {
			latitude: number;
			longitude: number;
		};
	};

	onMount(async () => {
		const { Loader } = await import('@googlemaps/js-api-loader');

		new Loader({
			apiKey: 'AIzaSyCBWjrhJwEXy-liFf_Vu3BiZe9VTJ0_mag',
			version: 'weekly'
		})
			.importLibrary('maps')
			.then(async ({ Map }) => {
				const latLng = new google.maps.LatLng({
					lat: advert.propertyCoordinates.latitude,
					lng: advert.propertyCoordinates.longitude
				});

				const marker = new google.maps.Marker({
					position: latLng
				});

				const map = new Map(document.getElementById('map') as HTMLElement, {
					center: latLng,
					zoom: 16,
					disableDefaultUI: true
				});

				marker.setMap(map);
			});
	});
</script>

<div id="map" class="h-96 w-full" />
