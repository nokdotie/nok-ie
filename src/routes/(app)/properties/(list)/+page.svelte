<script lang="ts">
	import AdvertCardList from './AdvertCardList.svelte';
	import NotFound from './NotFound.svelte';
	import JsonLd from './JsonLd.svelte';
	import RobotsIndex from '$lib/seo/RobotsIndex.svelte';

	export let data;
</script>

<RobotsIndex />
<JsonLd />

{#if data.adverts.edges.length === 0}
	<NotFound />
{:else}
	<AdvertCardList connection={data.adverts} />
{/if}
