<script lang="ts" async>
	import { autoCompleteServicePromise, geoCoderPromise } from '$lib/google/Maps';
	import { SearchFiltersQueryStringNames, type SearchFilters } from './SearchFilters';

	export let searchFilters: SearchFilters;

	let location = searchFilters.location;
	let locationNorthEastLat = searchFilters.locationNorthEastLat;
	let locationNorthEastLng = searchFilters.locationNorthEastLng;
	let locationSouthWestLat = searchFilters.locationSouthWestLat;
	let locationSouthWestLng = searchFilters.locationSouthWestLng;

	let suggestions: Array<google.maps.places.AutocompletePrediction> = [];
	const suggest = async (event: Event & { currentTarget: EventTarget & HTMLInputElement }) => {
		if (event.currentTarget.value === '') {
			suggestions = [];
			return;
		}

		const value = event.currentTarget.value;

		const autoCompleteService = await autoCompleteServicePromise;
		const placePredictions = await autoCompleteService.getPlacePredictions({
			input: value,
			componentRestrictions: { country: 'ie' },
			types: ['geocode']
		});

		suggestions = placePredictions.predictions;
	};

	const select = (suggestion: google.maps.places.AutocompletePrediction) => async () => {
		suggestions = [];

		const geoCoder = await geoCoderPromise;
		const geocoderResult = await geoCoder.geocode({ placeId: suggestion.place_id });

		if (0 === geocoderResult.results.length) return;

		location = geocoderResult.results[0].formatted_address.replace(', Ireland', '');

		const viewport = geocoderResult.results[0].geometry.viewport;
		locationNorthEastLat = viewport.getNorthEast().lat();
		locationNorthEastLng = viewport.getNorthEast().lng();
		locationSouthWestLat = viewport.getSouthWest().lat();
		locationSouthWestLng = viewport.getSouthWest().lng();
	};
</script>

<div>
	<div class="relative mt-2">
		<input type="hidden" value={location} />
		<input
			type="hidden"
			id={SearchFiltersQueryStringNames.LocationNorthEastLat}
			name={SearchFiltersQueryStringNames.LocationNorthEastLat}
			value={locationNorthEastLat}
		/>
		<input
			type="hidden"
			id={SearchFiltersQueryStringNames.LocationNorthEastLng}
			name={SearchFiltersQueryStringNames.LocationNorthEastLng}
			value={locationNorthEastLng}
		/>
		<input
			type="hidden"
			id={SearchFiltersQueryStringNames.LocationSouthWestLat}
			name={SearchFiltersQueryStringNames.LocationSouthWestLat}
			value={locationSouthWestLat}
		/>
		<input
			type="hidden"
			id={SearchFiltersQueryStringNames.LocationSouthWestLng}
			name={SearchFiltersQueryStringNames.LocationSouthWestLng}
			value={locationSouthWestLng}
		/>

		<input
			id={SearchFiltersQueryStringNames.Location}
			name={SearchFiltersQueryStringNames.Location}
			value={location}
			type="text"
			class="peer w-full text-2xl leading-10 rounded-md border-0 bg-white py-1.5 pl-12 pr-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-gray-800 focus:outline-none focus:placeholder:opacity-0"
			on:input={suggest}
			placeholder="Region, county, town, ..."
		/>

		<div
			class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400 peer-focus:text-gray-900"
		>
			<svg class="h-7 w-7" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
				<path
					fill-rule="evenodd"
					d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
					clip-rule="evenodd"
				/>
			</svg>
		</div>

		{#if suggestions.length > 0}
			<ul
				class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm peer-"
			>
				{#each suggestions as suggest}
					<li class="text-gray-900 hover:bg-gray-100">
						<button class="w-full py-2 px-3 text-left truncate" on:click={select(suggest)}>
							{suggest.description.replace(', Ireland', '')}
						</button>
					</li>
				{/each}
			</ul>
		{/if}
	</div>
</div>
