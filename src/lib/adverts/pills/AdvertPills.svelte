<script lang="ts">
	import type { Advert } from '$lib/adverts/Adverts';
	import AdvertPillBathroomsCount from '$lib/adverts/pills/AdvertPillBathroomsCount.svelte';
	import AdvertPillBedroomsCount from '$lib/adverts/pills/AdvertPillBedroomsCount.svelte';
	import AdvertPillSizeInSqtMtr from '$lib/adverts/pills/AdvertPillSizeInSqtMtr.svelte';
	import AdvertPillBerRating from '$lib/adverts/pills/AdvertPillBERRating.svelte';

	export let advert: Advert;
</script>

<div class="{$$props.class} flex flex-wrap">
	<AdvertPillSizeInSqtMtr sizeInSqtMtr={advert.propertySizeInSqtMtr} />
	<AdvertPillBedroomsCount count={advert.propertyBedroomsCount} />
	<AdvertPillBathroomsCount count={advert.propertyBathroomsCount} />
	<AdvertPillBerRating berRating={advert.propertyBuildingEnergyRating} />
</div>
