<script lang="ts">
	import PropertiesListRoute from '$routes/(app)/properties/(list)/Route';
	import Meta from '$lib/components/seo/Meta.svelte';
	import DocumentHeader from '$lib/components/document/DocumentHeader.svelte';
	import DocumentFooter from '$lib/components/document/DocumentFooter.svelte';
	import AdvertsSearchHint from '$lib/adverts/search/AdvertsSearchHint.svelte';
	import ContainerCenterLarge from '$lib/components/containers/ContainerCenterLarge.svelte';
	import ContainerCenterSmall from '$lib/components/containers/ContainerCenterSmall.svelte';
	import ContainerColumnOneTwo from '$lib/components/containers/ContainerColumnOneTwo.svelte';
	import PrimaryButtonDark from '$lib/components/buttons/PrimaryButtonDark.svelte';
	import AdvertsSearchPriceInEur from '$lib/adverts/search/AdvertsSearchPriceInEur.svelte';
	import AdvertsSearchSizeInSqtMtr from '$lib/adverts/search/AdvertsSearchSizeInSqtMtr.svelte';
	import AdvertsSearchBedroomsCount from '$lib/adverts/search/AdvertsSearchBedroomsCount.svelte';
	import AdvertsSearchBathroomsCount from '$lib/adverts/search/AdvertsSearchBathroomsCount.svelte';
	import AdvertsSearchLocation from '$lib/adverts/search/AdvertsSearchLocation.svelte';
	import AdvertsSearchPropertyType from '$lib/adverts/search/AdvertsSearchPropertyType.svelte';
	import HorizontalLine from '$lib/components/HorizontalLine.svelte';

	export let data;
</script>

<Meta
	index={true}
	title="Search"
	description="Search for properties in Ireland"
	images={['https://nok.ie/android-chrome-512x512.png']}
/>

<DocumentHeader />

<div class="pt-10 sm:pt-[50px] md:pt-[60px] lg:pt-20 pb-[82px] sm:pb-[102px] md:pb-32 lg:pb-40">
	<ContainerCenterSmall class="mb-[33px] sm:mb-[58px] md:mb-[70px] lg:mb-[84px]">
		<h1
			class="text-neutral-800 text-[33px] sm:text-[40px] md:text-5xl font-bold leading-[1.25em] text-center mb-5"
		>
			Search for properties
		</h1>
		<p class="text-neutral-600 text-lg font-medium leading-[1.667em] text-center">
			Filter through our listings by location, size, and more to find properties that matches your
			needs and wants.
		</p>
	</ContainerCenterSmall>
	<ContainerCenterLarge>
		<form action={PropertiesListRoute(null, null)}>
			<ContainerColumnOneTwo>
				<div slot="left" class="hidden lg:block">
					<AdvertsSearchHint
						icon="MapMarkerIcon"
						title="1. Where?"
						description="A county? A town? A street?"
					/>
					<AdvertsSearchHint
						icon="HomeIcon"
						title="2. What?"
						description="A small studio? A large bungalow?"
					/>
				</div>

				<div slot="right">
					<div
						class="bg-neutral-100 shadow-400 mb-[52px] py-[48px] sm:py-[58px] md:py-[68px] px-[25px] sm:px-[35px] md:px-[51px] rounded-3xl"
					>
						<div class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8 mb-10 sm:mb-[50px]">
							<AdvertsSearchLocation class="md:col-span-2" advertsSearch={data.advertsSearch} />
							<HorizontalLine class="md:col-span-2 my-[18px]" />
							<AdvertsSearchPropertyType class="md:col-span-2" advertsSearch={data.advertsSearch} />
							<AdvertsSearchPriceInEur advertsSearch={data.advertsSearch} />
							<AdvertsSearchSizeInSqtMtr advertsSearch={data.advertsSearch} />
							<AdvertsSearchBedroomsCount advertsSearch={data.advertsSearch} />
							<AdvertsSearchBathroomsCount advertsSearch={data.advertsSearch} />
						</div>
					</div>
					<PrimaryButtonDark>Search</PrimaryButtonDark>
				</div>
			</ContainerColumnOneTwo>
		</form>
	</ContainerCenterLarge>
</div>

<DocumentFooter />
