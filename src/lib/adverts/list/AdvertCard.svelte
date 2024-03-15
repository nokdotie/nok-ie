<script lang="ts">
	import type { Advert } from '$lib/adverts/Adverts';
	import MapMarkerIcon from '$lib/components/icons/MapMarkerIcon.svelte';
	import HomeIcon from '$lib/components/icons/HomeIcon.svelte';
	import PropertiesOneRoute from '$routes/(app)/properties/[identifier]/Route';
	import AdvertPills from '$lib/adverts/pills/AdvertPills.svelte';
	import Image from '$lib/components/images/Image.svelte';
	import HorizontalLine from '$lib/components/HorizontalLine.svelte';
	import { priceInEur } from '$lib/utils/Number';

	export let advert: Advert;
</script>

<div
	class="{$$props.class} bg-neutral-100 shadow-400 transition duration-300 rounded-[20px] sm:rounded-3xl overflow-hidden hover:shadow-500"
>
	<a href={PropertiesOneRoute(advert.propertyIdentifier)}>
		<Image
			src={advert.propertyImageUrls[0]}
			alt=""
			class="w-full object-cover object-center aspect-[4/3]"
		/>
		<div class="pt-8 md:pt-10 pb-7 px-[25px] sm:px-8">
			<div class="text-neutral-800 text-xl md:text-[22px] font-bold leading-[1.364em] mb-3">
				{priceInEur(advert.advertPriceInEur)}
			</div>
			<h3 class="flex flex-row items-center gap-x-2 mb-2">
				<MapMarkerIcon class="w-[15px] text-neutral-600" />

				<div class="flex-1 text-neutral-600 text-base font-medium leading-[1.125em] truncate">
					{advert.propertyAddress}
				</div>
			</h3>
			<h3 class="flex flex-row items-center gap-x-2 mb-2 min-h-[15px]">
				{#if advert.propertyType != 'Unknown'}
					<HomeIcon class="w-[15px] text-neutral-600" />
				{/if}
				<div class="flex-1 text-neutral-600 text-base font-medium leading-[1.125em]">
					{#if advert.propertyType != 'Unknown'}
						{advert.propertyType}
					{/if}
				</div>
				{#if advert.propertyBuildingEnergyRating != null}
					<div>
						<Image
							src="/images/ber/{advert.propertyBuildingEnergyRating}.png"
							alt={advert.propertyBuildingEnergyRating}
							class="h-[19px]"
						/>
					</div>
				{/if}
			</h3>
			<!-- <h3>
				{#if advert.propertyBuildingEnergyRating != null}
					<Image src="/images/ber/{advert.propertyBuildingEnergyRating}.png" alt="{advert.propertyBuildingEnergyRating}" class="h-[17px]" />
				{/if}
			</h3> -->
			<HorizontalLine class="mt-5 mb-3" />
			<AdvertPills {advert} />
		</div>
	</a>
</div>
