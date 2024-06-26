<script lang="ts">
	import AdvertCard from '$lib/adverts/list/AdvertCard.svelte';
	import Meta from '$lib/components/seo/Meta.svelte';
	import DocumentHeader from '$lib/components/document/DocumentHeader.svelte';
	import DocumentFooter from '$lib/components/document/DocumentFooter.svelte';
	import ContainerCenterLarge from '$lib/components/containers/ContainerCenterLarge.svelte';
	import FilterButton from '$lib/adverts/list/FilterButton.svelte';
	import MapViewButton from '$lib/adverts/list/MapViewButton.svelte';
	import PaginationButtons from '$lib/adverts/list/PaginationButtons.svelte';
	import CountyRoute from '$routes/(app)/counties/[identifier]/properties/Route';
	export let data;
</script>

<Meta
	index={null === data.after}
	title="County {data.county.name}"
	description="Properties for sale in Ireland."
	images={['https://nok.ie/android-chrome-512x512.png']}
/>

<DocumentHeader />

<div class="bg-neutral-200 relative">
	<ContainerCenterLarge class="grid grid-cols-1 items-center lg:grid-cols-2">
		<div class="py-10 sm:py-[50px] md:py-[60px] lg:py-40 lg:pr-10 text-center lg:text-left">
			<h1 class="text-neutral-800 text-2xl sm:text-3xl md:text-4xl font-bold leading-[1.25em]">
				Properties in County {data.county.name}
			</h1>
			<p class="text-neutral-600 text-lg font-medium leading-[1.667em] my-4">
				{data.county.description}
			</p>
		</div>
	</ContainerCenterLarge>
	<div class="lg:absolute lg:top-0 lg:left-1/2 lg:w-1/2 lg:h-full">
		<img
			alt="County {data.county.name}"
			src="/images/counties/{data.county.identifier}.jpg"
			class="object-cover object-center w-full h-full"
		/>
	</div>
</div>

<ContainerCenterLarge
	class="pt-[60px] sm:pt-[67px] md:pt-[84px] lg:pt-[84px] pb-[82px] sm:pb-[102px] md:pb-[128px] lg:pb-[160px]"
>
	<div class="mb-[25px] flex justify-end gap-x-[15px]">
		<MapViewButton advertsSearch={data.advertsSearch} />
		<FilterButton advertsSearch={data.advertsSearch} />
	</div>

	<div class="grid gap-x-[26px] gap-y-[45px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
		{#each data.response.data.adverts.edges as edge}
			<AdvertCard advert={edge.node} />
		{/each}
	</div>

	<PaginationButtons
		pageInfo={data.response.data.adverts.pageInfo}
		nextPageHref={(after) => CountyRoute(data.county.identifier, after)}
	/>
</ContainerCenterLarge>

<DocumentFooter />
