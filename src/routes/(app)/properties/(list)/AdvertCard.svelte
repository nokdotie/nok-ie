<script lang="ts">
	import { onError } from '$lib/utils/HtmlImageElement';
	import route from '../[identifier]/route';
	import AdvertCardFooter from './AdvertCardFooter.svelte';

	export let advert: {
		advertPriceInEur: number;
		propertyIdentifier: string;
		propertyAddress: string;
		propertyImageUrls: string[];
		propertySizeInSqtMtr: number;
		propertyBedroomsCount: number;
		propertyBathroomsCount: number;
	};
</script>

<a href={route(advert)}>
	<div
		class="group bg-neutral-100 shadow rounded-[20px] overflow-hidden duration-300 hover:scale-95 w-[345px]"
	>
		<div class="overflow-hidden">
			<img
				class="duration-300 group-hover:scale-105 w-full object-cover object-center aspect-photo"
				src={advert.propertyImageUrls[0] ?? '/images/placeholder.svg'}
				on:error|preventDefault={onError('/images/placeholder.svg')}
				alt=""
			/>
		</div>
		<div class="px-[25px] sm:px-[32px] pt-[32px] md:pt-[40px] pb-[28px]">
			<div class="text-heading-4 md:text-heading-3 font-bold mb-[12px] text-neutral-800">
				€ {advert.advertPriceInEur.toLocaleString('en-IE')}
			</div>
			<div class="flex text-neutral-600">
				<img class="max-w-[15px] mr-[8px]" src="/images/icons/location.svg" alt="Location Icon" />
				<div class="text-paragraph-4">{advert.propertyAddress}</div>
			</div>
			<div class="min-h-[1px] mt-[36px] mb-[26px] bg-neutral-400" />

			<AdvertCardFooter {advert} />
		</div>
	</div>
</a>
