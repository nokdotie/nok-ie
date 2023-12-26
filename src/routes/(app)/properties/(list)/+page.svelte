<script lang="ts">
	import AdvertCardList from './AdvertCardList.svelte';
	import NotFound from './NotFound.svelte';
	import Search from './Search.svelte';
	import JsonLd from './JsonLd.svelte';
	import RobotsIndex from '$lib/seo/RobotsIndex.svelte';

	export let data;
</script>

<RobotsIndex />
<JsonLd />

<Search filters={data.filters} />

{#if data.adverts.edges.length === 0}
	<NotFound />
{:else}
	<AdvertCardList connection={data.adverts} />
{/if}
