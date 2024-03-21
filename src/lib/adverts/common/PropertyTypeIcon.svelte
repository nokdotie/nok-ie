<script lang="ts">
	import type { Advert } from '$lib/adverts/Adverts';
	import HomeIcon from '$lib/components/icons/HomeIcon.svelte';

	export let advert: Advert;
</script>

{#if advert.propertyType != 'Unknown'}
	<HomeIcon class="w-[15px] text-neutral-600" />
{/if}
<div class="flex-1 text-neutral-600 text-base font-medium leading-[1.125em]">
	{#if advert.propertyType != 'Unknown'}
		{advert.propertyType}
	{/if}
</div>
