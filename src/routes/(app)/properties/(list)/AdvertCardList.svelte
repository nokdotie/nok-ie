<script lang="ts">
	import type { Connection } from '$lib/GraphQl';
	import BrowserHistoryBack from '$lib/utils/BrowserHistoryBack.js';
	import AdvertCard from './AdvertCard.svelte';
	import PropertiesRoute from './Route';
	import PropertiesMapRoute from '../map/Route';
	import { derived } from 'svelte/store';
	import { page } from '$app/stores';
	import { SearchFilters } from '../search/SearchFilters';

	export let connection: Connection<{
		advertPriceInEur: number;
		propertyIdentifier: string;
		propertyAddress: string;
		propertyImageUrls: string[];
		propertySizeInSqtMtr: number;
		propertyBedroomsCount: number;
		propertyBathroomsCount: number;
	}>;

	const shouldShowPrevious = derived(page, ($page) => $page.url.searchParams.has('after'));

	const searchFilters = SearchFilters.fromPage(page);
</script>

<div class="mx-auto max-w-2xl px-4 py-8 sm:px-6 lg:max-w-7xl lg:px-8">
	<div class="flex justify-between items-center">
		<h2 class="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">Properties</h2>
		<a
			class="relative inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0 text-gray-900 gap-1"
			href={PropertiesMapRoute($searchFilters)}
		>
			<svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path
					d="M5.7 15C4.03377 15.6353 3 16.5205 3 17.4997C3 19.4329 7.02944 21 12 21C16.9706 21 21 19.4329 21 17.4997C21 16.5205 19.9662 15.6353 18.3 15M12 9H12.01M18 9C18 13.0637 13.5 15 12 18C10.5 15 6 13.0637 6 9C6 5.68629 8.68629 3 12 3C15.3137 3 18 5.68629 18 9ZM13 9C13 9.55228 12.5523 10 12 10C11.4477 10 11 9.55228 11 9C11 8.44772 11.4477 8 12 8C12.5523 8 13 8.44772 13 9Z"
					stroke="#000000"
					stroke-width="1.5"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg>
			Map View
		</a>
	</div>

	<div
		class="mt-3 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
	>
		{#each connection.edges as edge}
			<AdvertCard advert={edge.node} />
		{/each}
	</div>
</div>

<div class="mx-auto w-full max-w-2xl px-4 py-8 sm:px-6 lg:max-w-7xl lg:px-8">
	<nav aria-label="Pagination">
		<div class="flex flex-1 justify-between sm:justify-end">
			<a
				href="/"
				on:click|preventDefault={BrowserHistoryBack}
				class="relative inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0"
				class:pointer-events-none={!$shouldShowPrevious}
				class:bg-gray-50={!$shouldShowPrevious}
				class:text-gray-500={!$shouldShowPrevious}
				class:text-gray-900={$shouldShowPrevious}
				class:ring-gray-200={!$shouldShowPrevious}>Previous</a
			>
			<a
				href={PropertiesRoute($searchFilters, connection.pageInfo.endCursor)}
				class="relative inline-flex items-center rounded-md hover:bg-primary/70 text-white px-3 py-2 text-sm font-semibold focus:outline-none ml-3"
				class:pointer-events-none={!connection.pageInfo.hasNextPage}
				class:bg-primary={connection.pageInfo.hasNextPage}
				class:bg-gray-300={!connection.pageInfo.hasNextPage}>Next</a
			>
		</div>
	</nav>
</div>
