<script lang="ts">
	import FilterIcon from '$lib/components/icons/FilterIcon.svelte';
	import PropertiesSearchRoute from '$routes/(app)/properties/search/Route';
	import { AdvertsSearch } from '$lib/adverts/search/AdvertsSearch';
	import PrimaryButtonLight from '$lib/components/buttons/PrimaryButtonLight.svelte';

	export let advertsSearch: AdvertsSearch;
	$: advertsSearchLength = AdvertsSearch.length(advertsSearch);
</script>

<PrimaryButtonLight href={PropertiesSearchRoute(advertsSearch)} class="!w-auto relative">
	<FilterIcon class="w-[20px] h-[20px] mr-0 md:mr-[6px]" />
	<span class="hidden md:block">Filters</span>
	{#if 0 !== advertsSearchLength}
		<span
			class="absolute top-0 right-0 -mt-2 -mr-2 bg-primary w-[22px] h-[22px] text-neutral-100 text-sm font-semibold leading-[1.143em] rounded-full flex justify-center items-center"
		>
			{advertsSearchLength}
		</span>
	{/if}
</PrimaryButtonLight>
