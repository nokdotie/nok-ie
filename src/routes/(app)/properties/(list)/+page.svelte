<script lang="ts">
	import AdvertCardList from './AdvertCardList.svelte';
	import NotFound from './NotFound.svelte';
	import Search from './Search.svelte';
	import Seo from './Seo.svelte';

	export let data;
</script>

<Seo />

<Search filters={data.filters} />

{#if data.adverts.edges.length === 0}
	<NotFound />
{:else}
	<AdvertCardList connection={data.adverts} />
{/if}
