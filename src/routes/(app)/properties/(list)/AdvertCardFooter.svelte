<script lang="ts">
	import type { Advert } from '../Advert';

	export let advert: Advert;
</script>

<div
	class="flex gap-3 mb-[-12px] whitespace-nowrap justify-center text-[14px] leading-[1.143em] text-neutral-800 font-semibold"
>
	<div class="flex mb-[12px] px-[14px] py-[10px] rounded-[40px] shadow">
		<img class="max-w-[17px] mr-[6px]" src="/images/icons/size.svg" alt="Size Icon" />
		{Math.floor(advert.propertySizeInSqtMtr).toLocaleString('en-IE')} &#13217;
	</div>
	<div class="flex mb-[12px] px-[14px] py-[10px] rounded-[40px] shadow">
		<img class="max-w-[17px] mr-[6px]" src="/images/icons/bedroom.svg" alt="Bedroom Icon" />
		{advert.propertyBedroomsCount}
	</div>
	<div class="flex mb-[12px] px-[14px] py-[10px] rounded-[40px] shadow">
		<img class="max-w-[17px] mr-[6px]" src="/images/icons/bathroom.svg" alt="Bathroom Icon" />
		{advert.propertyBedroomsCount}
	</div>
</div>
