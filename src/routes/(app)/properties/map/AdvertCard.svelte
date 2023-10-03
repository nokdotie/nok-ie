<script lang="ts">
	import { onError } from '$lib/utils/HtmlImageElement';
	import PropertyBadges from '../PropertyBadges.svelte';

	export let advert: {
		advertPriceInEur: number;
		propertyAddress: string;
		propertyImageUrls: string[];
		propertySizeInSqtMtr: number;
		propertyBedroomsCount: number;
		propertyBathroomsCount: number;
	};
</script>

<div
	class="group flex overflow-hidden rounded-[24px] bg-neutral-100 shadow duration-300 hover:scale-95 mx-[10px]"
>
	<div class="w-[115px] z-10">
		<img
			class="duration-300 group-hover:scale-105 min-w-[115px] h-full object-cover object-center aspect-photo"
			src={advert.propertyImageUrls[0] ?? '/images/placeholder.svg'}
			on:error|preventDefault={onError('/images/placeholder.svg')}
			alt=""
		/>
	</div>
	<div class="py-[20px] px-[15px] self-center w-[calc(100vw-115px-20px)] sm:w-full">
		<div class="text-heading-5 font-bold mb-[12px] text-neutral-800">
			€ {advert.advertPriceInEur.toLocaleString('en-IE')}
		</div>
		<div class="flex text-neutral-600">
			<img class="max-w-[15px] mr-[8px]" src="/images/icons/location.svg" alt="Location Icon" />
			<div class="text-paragraph-4 whitespace-nowrap text-ellipsis overflow-hidden">
				{advert.propertyAddress}
			</div>
		</div>

		<div class="min-h-[1px] my-[10px] bg-neutral-400" />

		<PropertyBadges {advert} />
	</div>
</div>
