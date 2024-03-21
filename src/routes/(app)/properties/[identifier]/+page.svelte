<script lang="ts">
	import Meta from '$lib/components/seo/Meta.svelte';
	import AdvertJsonLd from '$lib/adverts/AdvertJsonLd.svelte';
	import DocumentHeader from '$lib/components/document/DocumentHeader.svelte';
	import DocumentFooter from '$lib/components/document/DocumentFooter.svelte';
	import MapMarkerIcon from '$lib/components/icons/MapMarkerIcon.svelte';
	import AdvertImageWide from '$lib/adverts/identifier/AdvertImageWide.svelte';
	import AdvertPills from '$lib/adverts/pills/AdvertPills.svelte';
	import AdvertAdvertiser from '$lib/adverts/identifier/AdvertAdvertiser.svelte';
	import AdvertDescription from '$lib/adverts/identifier/AdvertDescription.svelte';
	import AdvertImagesGallery from '$lib/adverts/identifier/AdvertImagesGallery.svelte';
	import ImagesModal from '$lib/components/images/ImagesModal.svelte';
	import AdvertMap from '$lib/adverts/identifier/AdvertMap.svelte';
	import ContainerCenterLarge from '$lib/components/containers/ContainerCenterLarge.svelte';
	import HorizontalLine from '$lib/components/HorizontalLine.svelte';
	import BerIcon from '$lib/adverts/common/BerIcon.svelte';
	import PropertyTypeIcon from '$lib/adverts/common/PropertyTypeIcon.svelte';
	import { priceInEur, priceInEurAbbrieviated } from '$lib/utils/Number.js';

	export let data;

	const galleryIdentifier = 'gallery';
	const scrollToGallery = () =>
		document.getElementById(galleryIdentifier)?.scrollIntoView({ behavior: 'smooth' });
	let selectedImageIndex: null | number = null;
</script>

<Meta
	index={true}
	title={data.response.data.advert.propertyAddress}
	description={`Property for sale: ${priceInEurAbbrieviated(
		data.response.data.advert.advertPriceInEur
	)}, ${data.response.data.advert.propertySizeInSqtMtr.toLocaleString('en-IE', {
		maximumFractionDigits: 0
	})} m², ${data.response.data.advert.propertyBedroomsCount} bedrooms, ${
		data.response.data.advert.propertyBathroomsCount
	} bathrooms, ${data.response.data.advert.propertyDescription}`}
	images={data.response.data.advert.propertyImageUrls}
/>

<AdvertJsonLd advert={data.response.data.advert} />

<DocumentHeader />

<AdvertImageWide
	imageUrl={data.response.data.advert.propertyImageUrls[0]}
	onBrowseGalleryButtonClick={0 === data.response.data.advert.propertyImageUrls.length
		? null
		: scrollToGallery}
/>

<ContainerCenterLarge class="pt-[60px] md:pt-[67px] lg:pt-[84px] mb-10">
	<div class="flex flex-col lg:flex-row justify-between">
		<div>
			<div
				class="text-neutral-800 text-[23px] sm:text-[28px] md:text-[32px] font-bold leading-[1.375em] mb-1.5"
			>
				{priceInEur(data.response.data.advert.advertPriceInEur)}
			</div>
			<h1
				class="text-neutral-600 text-lg font-medium leading-[1.111em] flex items-center gap-x-2.5 mb-5"
			>
				<MapMarkerIcon class="w-[18px]" />
				<span class="flex-1">{data.response.data.advert.propertyAddress}</span>
			</h1>
			<div
				class="text-neutral-600 text-lg font-medium leading-[1.111em] flex items-center gap-x-2.5 mb-5"
			>
				<PropertyTypeIcon advert={data.response.data.advert} />
				<BerIcon advert={data.response.data.advert} />
			</div>
			<AdvertPills advert={data.response.data.advert} />
		</div>
		<AdvertAdvertiser advert={data.response.data.advert} />
	</div>
</ContainerCenterLarge>

{#if null !== data.response.data.advert.propertyDescription}
	<HorizontalLine class="my-[10px] sm:my-[12px] md:my-[20px] lg:my-[30px]" />
	<AdvertDescription description={data.response.data.advert.propertyDescription} />
{/if}

{#if 0 !== data.response.data.advert.propertyImageUrls.length}
	<HorizontalLine class="my-[10px] sm:my-[12px] md:my-[20px] lg:my-[30px]" />
	<div id={galleryIdentifier} />

	<AdvertImagesGallery
		imageUrls={data.response.data.advert.propertyImageUrls}
		onImageClick={(index) => (selectedImageIndex = index)}
	/>
	<ImagesModal
		imageUrls={data.response.data.advert.propertyImageUrls}
		selectedIndex={selectedImageIndex}
	/>
{/if}

{#if 0 !== data.response.data.advert.propertyCoordinates.latitude && 0 !== data.response.data.advert.propertyCoordinates.longitude}
	<HorizontalLine class="my-[10px] sm:my-[12px] md:my-[20px] lg:my-[30px]" />
	<AdvertMap coordinates={data.response.data.advert.propertyCoordinates} />
{/if}

<DocumentFooter />
