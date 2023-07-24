<script lang="ts">
	import type { Advert } from './Advert';

	export let advert: Advert;
</script>

<div
	class="group bg-neutral-100 shadow rounded-[20px] overflow-hidden duration-300 hover:scale-95 w-[345px]"
>
	<div class="overflow-hidden">
		<img
			class="duration-300 group-hover:scale-105 w-full object-cover object-center aspect-photo"
			src={advert.propertyImageUrls[0] ?? '/images/placeholder.svg'}
			on:error={(event) => (event.currentTarget.src = '/images/placeholder.svg')}
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
		<div class="flex mr-[-12px] mb-[-12px]">
			<div
				class="flex mr-[12px] mb-[12px] px-[14px] py-[10px] rounded-[40px] text-[14px] leading-[1.143em] text-neutral-800 font-semibold shadow"
			>
				<img class="max-w-[17px] mr-[6px]" src="/images/icons/size.svg" alt="Size Icon" />
				{Math.floor(advert.propertySizeInSqtMtr).toLocaleString('en-IE')} &#13217;
			</div>
			<div
				class="flex mr-[12px] mb-[12px] px-[14px] py-[10px] rounded-[40px] text-[14px] leading-[1.143em] text-neutral-800 font-semibold shadow"
			>
				<img class="max-w-[17px] mr-[6px]" src="/images/icons/bedroom.svg" alt="Bedroom Icon" />
				{advert.propertyBedroomsCount}
			</div>
			<div
				class="flex mr-[12px] mb-[12px] px-[14px] py-[10px] rounded-[40px] text-[14px] leading-[1.143em] text-neutral-800 font-semibold shadow"
			>
				<img class="max-w-[17px] mr-[6px]" src="/images/icons/bathroom.svg" alt="Bathroom Icon" />
				{advert.propertyBedroomsCount}
			</div>
		</div>
	</div>
</div>
