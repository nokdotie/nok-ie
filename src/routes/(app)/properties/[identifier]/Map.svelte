<script lang="ts">
	export let advert: {
		propertyCoordinates: {
			latitude: number;
			longitude: number;
		};
	};

	const apiKey = 'AIzaSyCBWjrhJwEXy-liFf_Vu3BiZe9VTJ0_mag';

	window.initMap = function ready() {
		const latLng = new google.maps.LatLng({
			lat: advert.propertyCoordinates.latitude,
			lng: advert.propertyCoordinates.longitude
		});

		const marker = new google.maps.Marker({
			position: latLng
		});

		const map = new google.maps.Map(document.getElementById('map') as HTMLElement, {
			center: latLng,
			zoom: 16,
			disableDefaultUI: true
		});

		marker.setMap(map);
	};
</script>

<svelte:head>
	<script defer async src="https://maps.googleapis.com/maps/api/js?key={apiKey}&callback=initMap">
	</script>
</svelte:head>

<div id="map" class="h-96 w-full" />
