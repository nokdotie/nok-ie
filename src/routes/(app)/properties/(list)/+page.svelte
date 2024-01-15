<script lang="ts">
	import AdvertCard from '$lib/adverts/list/AdvertCard.svelte';
	import Meta from '$lib/components/seo/Meta.svelte';
	import DocumentHeader from '$lib/components/document/DocumentHeader.svelte';
	import DocumentFooter from '$lib/components/document/DocumentFooter.svelte';
	import ContainerCenterLarge from '$lib/components/containers/ContainerCenterLarge.svelte';
	import FilterButton from '$lib/adverts/list/FilterButton.svelte';
	import MapViewButton from '$lib/adverts/list/MapViewButton.svelte';
	import PaginationButtons from '$lib/adverts/list/PaginationButtons.svelte';

	export let data;
</script>

<Meta
	index={null === data.after}
	title="Properties"
	description="Properties for sale in Ireland."
	images={['https://nok.ie/android-chrome-512x512.png']}
/>

<DocumentHeader />

<div
	class="pt-[40px] sm:pt-[50px] md:pt-[58px] pb-[82px] sm:pb-[102px] md:pb-[128px] lg:pb-[160px]"
>
	<ContainerCenterLarge>
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
			advertsSearch={data.advertsSearch}
		/>
	</ContainerCenterLarge>
</div>

<DocumentFooter />
