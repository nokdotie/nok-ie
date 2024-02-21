<script lang="ts">
	import { autoCompleteServicePromise, geoCoderPromise } from '$lib/utils/GoogleMaps';
	import { AdvertsSearch, AdvertsSearchQueryStringNames } from '$lib/adverts/search/AdvertsSearch';
	import Label from '$lib/components/forms/Label.svelte';
	import Input from '$lib/components/forms/Input.svelte';

	export let advertsSearch: AdvertsSearch;

	let dirty = false;
	let location = advertsSearch.location;
	let locationNorthEastLat = advertsSearch.locationNorthEastLat;
	let locationNorthEastLng = advertsSearch.locationNorthEastLng;
	let locationSouthWestLat = advertsSearch.locationSouthWestLat;
	let locationSouthWestLng = advertsSearch.locationSouthWestLng;

	let predictions: google.maps.places.AutocompletePrediction[] = [];
	const onInput = async () => {
		dirty = true;

		const prediction = predictions.find((prediction) => prediction.description === location);

		if (null === location || '' === location) {
			predictions = [];
		} else if (null === prediction || undefined === prediction) {
			predictions = await predict(location);
		} else {
			dirty = false;
			predictions = [];

			const result = await select(prediction);

			const viewport = result.geometry.viewport;
			locationNorthEastLat = viewport.getNorthEast().lat();
			locationNorthEastLng = viewport.getNorthEast().lng();
			locationSouthWestLat = viewport.getSouthWest().lat();
			locationSouthWestLng = viewport.getSouthWest().lng();
		}
	};

	const predict = async (value: string) => {
		const autoCompleteService = await autoCompleteServicePromise;
		const placePredictions = await autoCompleteService.getPlacePredictions({
			input: value,
			componentRestrictions: { country: 'ie' },
			types: ['geocode']
		});

		return placePredictions.predictions.map((prediction) => {
			prediction.description = prediction.description.replace(', Ireland', '');
			return prediction;
		});
	};

	const select = async (prediction: google.maps.places.AutocompletePrediction) => {
		const geoCoder = await geoCoderPromise;
		const geocoderResult = await geoCoder.geocode({ placeId: prediction.place_id });

		return geocoderResult.results[0];
	};

	const onBlur = () => {
		if (dirty) {
			predictions = [];
			location = null;
			locationNorthEastLat = null;
			locationNorthEastLng = null;
			locationSouthWestLat = null;
			locationSouthWestLng = null;
		}
	};
</script>

<input
	type="hidden"
	id={AdvertsSearchQueryStringNames.LocationNorthEastLat}
	name={AdvertsSearchQueryStringNames.LocationNorthEastLat}
	bind:value={locationNorthEastLat}
/>
<input
	type="hidden"
	id={AdvertsSearchQueryStringNames.LocationNorthEastLng}
	name={AdvertsSearchQueryStringNames.LocationNorthEastLng}
	bind:value={locationNorthEastLng}
/>
<input
	type="hidden"
	id={AdvertsSearchQueryStringNames.LocationSouthWestLat}
	name={AdvertsSearchQueryStringNames.LocationSouthWestLat}
	bind:value={locationSouthWestLat}
/>
<input
	type="hidden"
	id={AdvertsSearchQueryStringNames.LocationSouthWestLng}
	name={AdvertsSearchQueryStringNames.LocationSouthWestLng}
	bind:value={locationSouthWestLng}
/>

<div class="{$$props.class} relative">
	<Label for={AdvertsSearchQueryStringNames.Location}>Location</Label>
	<Input
		id={AdvertsSearchQueryStringNames.Location}
		bind:value={location}
		on:input={onInput}
		on:blur={onBlur}
		placeholder="County, town, street, ..."
	/>

	{#if 0 < predictions.length}
		<datalist id="list-{AdvertsSearchQueryStringNames.Location}">
			{#each predictions as predict}
				<option value={predict.description} />
			{/each}
		</datalist>
	{/if}
</div>
