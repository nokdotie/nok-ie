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
			{#if $shouldShowPrevious}
				<a
					href="/"
					on:click|preventDefault={BrowserHistoryBack}
					class="relative inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0"
					>Previous</a
				>
			{/if}
			{#if connection.pageInfo.hasNextPage}
				<a
					href="{PropertiesRoute()}?{$urlSearchParams.toString()}"
					class="relative ml-3 inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0"
					>Next</a
				>
			{/if}
		</div>
	</nav>
</div>
