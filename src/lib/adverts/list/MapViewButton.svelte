<script lang="ts">
	import MapMarkerIcon from '$lib/components/icons/MapMarkerIcon.svelte';
	import PropertiesMapRoute from '$routes/(app)/properties/map/Route';
	import type { AdvertsSearch } from '$lib/adverts/search/AdvertsSearch';
	import PrimaryButtonLight from '$lib/components/buttons/PrimaryButtonLight.svelte';

	export let advertsSearch: AdvertsSearch;
</script>

<PrimaryButtonLight href={PropertiesMapRoute(advertsSearch)} class="!w-auto">
	<MapMarkerIcon class="w-[20px] h-[20px] mr-0 sm:mr-[6px]" />
	<span class="hidden sm:block">Map View</span>
</PrimaryButtonLight>
