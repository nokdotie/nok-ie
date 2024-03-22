<script lang="ts">
	import type { Advert } from '$lib/adverts/Adverts';
	import MapMarkerIcon from '$lib/components/icons/MapMarkerIcon.svelte';
	import PropertiesOneRoute from '$routes/(app)/properties/[identifier]/Route';
	import AdvertPills from '$lib/adverts/pills/AdvertPills.svelte';
	import Image from '$lib/components/images/Image.svelte';
	import { priceInEur } from '$lib/utils/Number';

	export let advert: Advert;
</script>

<a
	href={PropertiesOneRoute(advert.propertyIdentifier)}
	class="flex items-center bg-neutral-100 overflow-hidden rounded-xl"
>
	<Image
		src={advert.propertyImageUrls[0]}
		alt=""
		class="object-cover object-center aspect-square w-[120px] sm:w-[130px]"
	/>
	<div class="px-3 sm:px-6 overflow-hidden">
		<div class="text-neutral-800 text-lg font-bold leading-[1.364em] mb-1">
			{priceInEur(advert.advertPriceInEur)}
		</div>
		<div class="flex flex-row items-center gap-x-2 mb-4">
			<MapMarkerIcon class="w-[12px] text-neutral-600" />

			<div class="flex-1 text-neutral-600 text-sm font-medium leading-[1.125em] truncate">
				{advert.propertyAddress}
			</div>
		</div>
		<AdvertPills {advert} class="text-xs h-[14px] !gap-x-2" />
	</div>
</a>
