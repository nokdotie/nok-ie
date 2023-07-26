<script lang="ts">
	import AdvertCardLists from './AdvertCardLists.svelte';
	import NotFoundCard from './NotFoundCard.svelte';

	export let data;
</script>

<svelte:head>
	<title>NOK.IE | Properties</title>
</svelte:head>

{#if data.adverts.edges.length === 0}
	<NotFoundCard />
{:else}
	<AdvertCardLists connection={data.adverts} />
{/if}
