<script lang="ts">
	import { autoCompleteServicePromise, geoCoderPromise } from '$lib/utils/GoogleMaps';
	import { AdvertsSearch, AdvertsSearchQueryStringNames } from '$lib/adverts/search/AdvertsSearch';
	import Label from '$lib/components/forms/Label.svelte';
	import Input from '$lib/components/forms/Input.svelte';
	import { GetCurrentPositionState, Geolocation } from '$lib/utils/browser/Geolocation';
	import Success from '$lib/components/icons/Success.svelte';
	import Failure from '$lib/components/icons/Failure.svelte';
	import Loading from '$lib/components/icons/Loading.svelte';

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

		const prediction = predictions.find(
			(prediction) =>
				prediction.description.trim().toLowerCase() === location?.trim()?.toLowerCase()
		);

		if (null === location || '' === location) {
			predictions = [];
		} else if (null === prediction || undefined === prediction) {
			predictions = await predict(location);
		} else {
			dirty = false;

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
			types: ['locality', 'sublocality', 'postal_town']
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

	let getCurrentPositionState: GetCurrentPositionState = GetCurrentPositionState.Pending;
	const onCurrentLocation = async () => {
		Geolocation.getCurrentPosition().subscribe((result) => {
			getCurrentPositionState = result.state;

			if (result.state == GetCurrentPositionState.Success) {
				dirty = false;

				location = 'Near Me';
				locationNorthEastLat = result.latitude + 0.01;
				locationNorthEastLng = result.longitude + 0.01;
				locationSouthWestLat = result.latitude - 0.01;
				locationSouthWestLng = result.longitude - 0.01;
			}
		});
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
	<Label for={AdvertsSearchQueryStringNames.Location}>
		<div class="flex justify-between items-center">
			Location

			<span class="text-sm font-normal text-neutral-600">
				{#if getCurrentPositionState == GetCurrentPositionState.Pending}
					<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-static-element-interactions a11y-missing-attribute -->
					<a class="hover:text-neutral-800" on:click={onCurrentLocation}>Near Me</a>
				{:else if getCurrentPositionState == GetCurrentPositionState.Loading}
					<Loading class="h-4 w-4 !text-neutral-800" />
				{:else if getCurrentPositionState == GetCurrentPositionState.Success}
					<Success class="h-5 w-5" />
				{:else if getCurrentPositionState == GetCurrentPositionState.Failure}
					<Failure class="h-5 w-5" />
				{/if}
			</span>
		</div>
	</Label>

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
