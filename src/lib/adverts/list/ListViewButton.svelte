<script lang="ts">
	import ListIcon from '$lib/components/icons/ListIcon.svelte';
	import PropertiesListRoute from '$routes/(app)/properties/(list)/Route';
	import type { AdvertsSearch } from '$lib/adverts/search/AdvertsSearch';
	import PrimaryButtonLight from '$lib/components/buttons/PrimaryButtonLight.svelte';

	export let advertsSearch: AdvertsSearch;
</script>

<PrimaryButtonLight href={PropertiesListRoute(advertsSearch, null)} class="!w-auto">
	<ListIcon class="w-[20px] h-[20px] mr-0 sm:mr-[8px]" />
	<span class="hidden sm:block">List View</span>
</PrimaryButtonLight>
