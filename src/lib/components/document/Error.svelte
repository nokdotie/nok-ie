<script lang="ts">
	import Meta from '$lib/components/seo/Meta.svelte';
	import DocumentHeader from '$lib/components/document/DocumentHeader.svelte';
	import DocumentFooter from '$lib/components/document/DocumentFooter.svelte';
	import SearchIcon from '$lib/components/icons/SearchIcon.svelte';
	import MapMarkerIcon from '$lib/components/icons/MapMarkerIcon.svelte';
	import PrimaryButtonLight from '$lib/components/buttons/PrimaryButtonLight.svelte';
	import ContainerCenterSmall from '$lib/components/containers/ContainerCenterSmall.svelte';
	import PropertiesMapRoute from '$routes/(app)/properties/map/Route';
	import PropertiesSearchRoute from '$routes/(app)/properties/search/Route';

	export let title: string;
	export let description: string;
</script>

<Meta index={false} {title} {description} images={['https://nok.ie/android-chrome-512x512.png']} />

<DocumentHeader />

<div
	class="relative pt-[63px] sm:pt-20 md:pt-[100px] lg:pt-[155px] pb-[82px] sm:pb-[102px] md:pb-32 lg:pb-[200px]"
>
	<ContainerCenterSmall class="relative z-10">
		<div class="mt-0 mb-[15px] mx-0">
			<div
				class="bg-neutral-100 shadow-400 overflow-hidden px-[25px] sm:px-[35px] md:px-[70px] py-[60px] md:py-16 rounded-[20px] sm:rounded-3xl"
			>
				<div class="max-w-[476px] mx-auto px-4 sm:px-0">
					<div class="mb-10 md:mb-[45px] lg:mb-[54px]">
						<h1
							class="text-neutral-800 text-[23px] sm:text-[28px] md:text-[32px] font-bold leading-[1.375em] text-center mt-0 mb-2.5 sm:mb-[15px] md:mb-5 lg:mb-[22px] mx-0"
						>
							{title}
						</h1>
						<p class="text-neutral-600 text-lg font-medium leading-[1.667em] text-center mt-0 mb-5">
							{description}
						</p>
					</div>
				</div>
				<div
					class="flex justify-center flex-col sm:flex-row gap-y-[15px] sm:gap-x-[20px] md:gap-x-[28px]"
				>
					<PrimaryButtonLight href={PropertiesMapRoute(null)}>
						<MapMarkerIcon class="h-[20px] mr-[6px]" />
						Map
					</PrimaryButtonLight>
					<PrimaryButtonLight href={PropertiesSearchRoute(null)}>
						<SearchIcon class="h-[20px] mr-[6px]" />
						Search
					</PrimaryButtonLight>
				</div>
			</div>
		</div>
	</ContainerCenterSmall>
	<div class="bg-neutral-200 min-h-[50%] absolute top-auto bottom-0 inset-x-0" />
</div>

<DocumentFooter />
