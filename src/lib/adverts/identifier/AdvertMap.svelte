<script lang="ts">
	import { onMount } from 'svelte';
	import { mapPromise } from '$lib/utils/GoogleMaps';
	import AdvertSection from './AdvertSection.svelte';

	export let coordinates: { latitude: number; longitude: number };

	onMount(async () => {
		const latLng = {
			lat: coordinates.latitude,
			lng: coordinates.longitude
		};

		const map = (await mapPromise)(document.getElementById('map') as HTMLElement, {
			center: latLng,
			zoom: 16,
			disableDefaultUI: true
		});

		new google.maps.Marker({
			position: latLng,
			map: map
		});
	});
</script>

<AdvertSection>
	<div slot="header">Map</div>

	<div slot="content" id="map" class="w-full h-[600px]" />
</AdvertSection>
