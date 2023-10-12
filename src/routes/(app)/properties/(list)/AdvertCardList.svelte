<script lang="ts">
	import type { Connection } from '$lib/GraphQl';
	import BrowserHistoryBack from '$lib/utils/BrowserHistoryBack.js';
	import AdvertCard from './AdvertCard.svelte';
	import PropertiesRoute from './Route';
	import { derived } from 'svelte/store';
	import { page } from '$app/stores';

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
	const urlSearchParams = derived(page, ($page) => {
		const urlSearchParams = new URLSearchParams($page.url.searchParams.toString());
		urlSearchParams.set('after', connection.pageInfo.endCursor || '');

		return urlSearchParams;
	});
</script>

<div class="mx-auto max-w-2xl px-4 py-8 sm:px-6 lg:max-w-7xl lg:px-8">
	<h2 class="sr-only">Properties</h2>

	<div
		class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
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
				href="{PropertiesRoute()}?{$urlSearchParams.toString()}"
				class="relative inline-flex items-center rounded-md bg-primary hover:bg-primary/90 text-white px-3 py-2 text-sm font-semibold focus:outline-none ml-3"
				class:pointer-events-none={!connection.pageInfo.hasNextPage}
				class:bg-gray-300={!connection.pageInfo.hasNextPage}>Next</a
			>
		</div>
	</nav>
</div>
