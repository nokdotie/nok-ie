<script lang="ts">
	import Filter from './Filter.svelte';
	import { SearchFiltersQueryStringNames, type SearchFilters } from './SearchFilters';

	export let searchFilters: SearchFilters;

	const isOpen =
		searchFilters.bathroomsCountMin !== null || searchFilters.bathroomsCountMax !== null;
</script>

<Filter header="Bathrooms" {isOpen}>
	<div class="grid grid-cols-2 gap-3">
		<div class="relative">
			<label
				for={SearchFiltersQueryStringNames.BathroomsCountMin}
				class="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900"
				>Min</label
			>
			<input
				type="number"
				name={SearchFiltersQueryStringNames.BathroomsCountMin}
				id={SearchFiltersQueryStringNames.BathroomsCountMin}
				bind:value={searchFilters.bathroomsCountMin}
				class="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-800 focus:outline-none sm:text-sm sm:leading-6"
			/>
		</div>
		<div class="relative">
			<label
				for={SearchFiltersQueryStringNames.BathroomsCountMax}
				class="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900"
				>Max</label
			>
			<input
				type="number"
				name={SearchFiltersQueryStringNames.BathroomsCountMax}
				id={SearchFiltersQueryStringNames.BathroomsCountMax}
				bind:value={searchFilters.bathroomsCountMax}
				class="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-800 focus:outline-none sm:text-sm sm:leading-6"
			/>
		</div>
	</div>
</Filter>
