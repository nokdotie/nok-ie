<script lang="ts">
	import AdvertCardList from './AdvertCardList.svelte';
	import NotFound from './NotFound.svelte';
	import Meta from '$lib/seo/Meta.svelte';

	export let data;
</script>

<Meta
	title="Properties"
	description="Properties for sale around Ireland."
	index={null === data.after}
/>

{#if data.adverts.edges.length === 0}
	<NotFound />
{:else}
	<AdvertCardList connection={data.adverts} />
{/if}
