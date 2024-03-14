<script lang="ts">
	import Property from './Property.svelte';
	import PropertyNotFound from './PropertyNotFound.svelte';

	export let data;
</script>

{#if data.advert === null}
	<PropertyNotFound />
{:else}
	<Property advert={data.advert} />
{/if}
