<script lang="ts">
	import Filter from './Filter.svelte';
	import { SearchFiltersQueryStringNames, type SearchFilters } from './SearchFilters';

	export let searchFilters: SearchFilters;

	const isOpen = searchFilters.priceInEurMin !== null || searchFilters.priceInEurMax !== null;
</script>

<Filter header="Price" {isOpen}>
	<div class="grid grid-cols-2 gap-3">
		<div class="relative">
			<label
				for={SearchFiltersQueryStringNames.PriceInEurMin}
				class="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900"
				>Min</label
			>
			<input
				type="number"
				name={SearchFiltersQueryStringNames.PriceInEurMin}
				id={SearchFiltersQueryStringNames.PriceInEurMin}
				value={searchFilters.priceInEurMin}
				class="peer block w-full rounded-md border-0 py-1.5 pl-7 pr-12 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-800 focus:outline-none sm:text-sm sm:leading-6"
			/>
			<div
				class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 sm:text-sm text-gray-500 peer-focus:text-gray-900"
			>
				€
			</div>
			<div
				class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 sm:text-sm text-gray-500 peer-focus:text-gray-900"
			>
				EUR
			</div>
		</div>
		<div class="relative">
			<label
				for={SearchFiltersQueryStringNames.PriceInEurMax}
				class="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900"
				>Max</label
			>
			<input
				type="number"
				name={SearchFiltersQueryStringNames.PriceInEurMax}
				id={SearchFiltersQueryStringNames.PriceInEurMax}
				value={searchFilters.priceInEurMax}
				class="peer block w-full rounded-md border-0 py-1.5 pl-7 pr-12 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-800 focus:outline-none sm:text-sm sm:leading-6"
			/>
			<div
				class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 sm:text-sm text-gray-500 peer-focus:text-gray-900"
			>
				€
			</div>
			<div
				class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 sm:text-sm text-gray-500 peer-focus:text-gray-900"
			>
				EUR
			</div>
		</div>
	</div>
</Filter>
