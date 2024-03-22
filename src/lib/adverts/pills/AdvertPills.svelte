<script lang="ts">
	import type { Advert } from '$lib/adverts/Adverts';
	import AdvertPillBathroomsCount from '$lib/adverts/pills/AdvertPillBathroomsCount.svelte';
	import AdvertPillBedroomsCount from '$lib/adverts/pills/AdvertPillBedroomsCount.svelte';
	import AdvertPillSizeInSqtMtr from '$lib/adverts/pills/AdvertPillSizeInSqtMtr.svelte';
	import BerIcon from '$lib/adverts/icons/BerIcon.svelte';

	export let advert: Advert;
</script>

<div
	class="{$$props.class} h-[17px] flex gap-x-5 items-center text-sm font-semibold leading-[1.143em] text-neutral-600"
>
	<AdvertPillBedroomsCount class="h-full" count={advert.propertyBedroomsCount} />
	<AdvertPillBathroomsCount class="h-full" count={advert.propertyBathroomsCount} />
	<AdvertPillSizeInSqtMtr class="h-full" sizeInSqtMtr={advert.propertySizeInSqtMtr} />
	<BerIcon class="h-full shrink-0" buildingEnergyRating={advert.propertyBuildingEnergyRating} />
</div>
