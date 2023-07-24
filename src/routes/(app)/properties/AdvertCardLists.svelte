<script lang="ts">
	import type { Connection } from '$lib/GraphQl';
	import BrowserHistoryBack from '$lib/utils/BrowserHistoryBack.js';
	import type { Advert } from './Advert';
	import AdvertCardClickable from './AdvertCardClickable.svelte';
	import { derived } from 'svelte/store';
	import { page } from '$app/stores';

	export let connection: Connection<Advert>;

	const shouldShowPrevious = derived(page, ($page) => $page.url.searchParams.has('after'));
	const urlSearchParams = derived(page, ($page) => {
		const urlSearchParams = new URLSearchParams($page.url.searchParams.toString());
		urlSearchParams.set('after', connection.pageInfo.endCursor || '');

		return urlSearchParams;
	});
</script>

<div class="flex flex-wrap flex-row gap-3 justify-center">
	{#each connection.edges as edge}
		<AdvertCardClickable advert={edge.node} />
	{/each}
</div>

<div class="my-[50px] flex gap-3 justify-center">
	{#if $shouldShowPrevious}
		<a
			class="text-center mt-[15px] py-[20px] w-[175px] rounded-[12px] text-neutral-800 bg-neutral-100 hover:scale-95 duration-300 shadow text-paragraph-3 font-semibold"
			href="/"
			on:click|preventDefault={BrowserHistoryBack}
		>
			Previous page
		</a>
	{/if}
	{#if connection.pageInfo.hasNextPage}
		<a
			class="text-center mt-[15px] py-[20px] w-[175px] rounded-[12px] text-neutral-100 bg-primary hover:scale-95 duration-300 shadow text-paragraph-3 font-semibold"
			href="/properties?{$urlSearchParams.toString()}"
		>
			Next page
		</a>
	{/if}
</div>
