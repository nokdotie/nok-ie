<script lang="ts">
	import PropertyBadges from '../PropertyBadges.svelte';

	export let data;

	let serviceTypeNames = [
		'DaftIeAdvert',
		'DngIeAdvert',
		'MyHomeIeAdvert',
		'PropertyPalComAdvert',
		'SherryFitzIeAdvert'
	];

	let services = data.advert.sources
		.filter((source) => serviceTypeNames.includes(source.__typename))
		.map((source) => ({
			url: source.url,
			hostname: new URL(source.url).hostname.replace('www.', '')
		}));
</script>

<img
	src={data.advert.propertyImageUrls[0]}
	alt=""
	class="w-full min-h-[300px] max-h-[300px] md:max-h-[515px] object-cover object-center"
/>

<div class="max-w-[1318px] mx-auto px-[16px] pt-[84px] md:flex gap-2 justify-between">
	<div class="grow">
		<h1 class="text-heading-3 sm:text-heading-2 font-bold mb-[10px]">
			{data.advert.propertyAddress}
		</h1>

		<PropertyBadges advert={data.advert} />
	</div>
	<div class="min-w-[290px]">
		<div class="mt-[20px] md:mt-[-184px] p-[48px] bg-neutral-100 rounded-[24px] shadow">
			<div class="text-heading-5 text-neutral-600">Property for sale</div>
			<div class="text-heading-3 sm:text-heading-2 font-bold">
				€ {data.advert.advertPriceInEur.toLocaleString('en-IE')}
			</div>
			<div class="min-h-[1px] mt-[36px] mb-[26px] bg-neutral-400" />
			<div>
				<div class="text-heading-6 sm:text-heading-5 mb-[10px] font-bold">Details found on</div>
				<div class="flex flex-col">
					{#each services as service}
						<a href={service.url} class="hover:text-primary duration-300" target="_blank">
							<img src="/images/services/{service.hostname}.png" alt="" class="w-[25px] inline" />
							{service.hostname}
						</a>
					{/each}
				</div>
			</div>
		</div>
	</div>
</div>

<div class="max-w-[1318px] mx-auto px-[16px] pt-[60px] sm:pt-[67px] md:pt-[84px]">
	<h2 class="text-heading-3 sm:text-heading-2 font-bold mb-[28px]">Gallery</h2>
	<div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 justify-between gap-3">
		{#each data.advert.propertyImageUrls as propertyImageUrl}
			<img
				src={propertyImageUrl}
				alt=""
				class="w-full h-full object-cover object-center aspect-photo"
			/>
		{/each}
	</div>
</div>

<div class="mb-[82px] sm:mb-[102px] md:mb-[128px] lg:mb-[160px]" />
