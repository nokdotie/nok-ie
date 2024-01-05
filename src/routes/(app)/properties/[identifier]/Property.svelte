<script lang="ts">
	import { onError } from '$lib/utils/HtmlImageElement';
	import Gallery from './Gallery.svelte';
	import Map from './Map.svelte';
	import Highlights from './Highlights.svelte';
	import JsonLd from './JsonLd.svelte';
	import Advertiser from './Advertiser.svelte';
	import Description from './Description.svelte';
	import RobotsIndex from '$lib/seo/RobotsIndex.svelte';
	import Sources from './Sources.svelte';

	enum Tabs {
		Gallery = 'Gallery',
		Map = 'Map',
		Description = 'Description'
	}

	let activeTab = Tabs.Gallery;

	export let advert: {
		advertPriceInEur: number;
		propertyDescription: string;
		propertyAddress: string;
		propertyCoordinates: {
			latitude: number;
			longitude: number;
		};
		propertyImageUrls: Array<string>;
		propertySizeInSqtMtr: number;
		propertyBedroomsCount: number;
		propertyBathroomsCount: number;
		advertiser: null | {
			name: string;
			pictureUrl: string;
			emailAddresses: string[];
			phoneNumbers: string[];
			physicalAddresses: string[];
		};
		sources: Array<
			| {
					__typename: 'DaftIeAdvert';
					url: string;
			  }
			| {
					__typename: 'DngIeAdvert';
					url: string;
			  }
			| {
					__typename: 'MyHomeIeAdvert';
					url: string;
			  }
			| {
					__typename: 'PropertyPalComAdvert';
					url: string;
			  }
			| {
					__typename: 'SherryFitzIeAdvert';
					url: string;
			  }
			| {
					__typename: 'BuildingEnergyRatingCertificate';
					url: string;
					number?: string;
					rating?: string;
					energyRatingInKWhPerSqtMtrPerYear?: number;
					carbonDioxideEmissionsIndicatorInKgCO2PerSqtMtrPerYear?: number;
			  }
		>;
	};
</script>

<RobotsIndex />
<JsonLd {advert} />

<div class="bg-white">
	<div class="mx-auto px-4 sm:px-6 md:max-w-7xl md:px-8">
		<div class="md:grid md:grid-cols-8 md:grid-rows-1 md:gap-x-8 md:gap-y-10 xl:gap-x-16">
			<div class="md:col-span-5 md:row-end-1">
				<div class="aspect-photo overflow-hidden rounded-lg bg-gray-100">
					<img
						src={advert.propertyImageUrls[0]}
						on:error|preventDefault={onError('/images/placeholder.svg')}
						alt=""
						class="w-full h-full object-cover object-center"
					/>
				</div>
			</div>

			<div
				class="mx-auto mt-14 max-w-2xl sm:mt-16 md:col-span-3 md:row-span-2 md:row-end-2 md:mt-0 md:w-full"
			>
				<h1 class="mt-4 text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">
					{advert.propertyAddress}
				</h1>

				<p class="mt-1 text-xl sm:text-2xl text-gray-500">
					€{advert.advertPriceInEur.toLocaleString('en-IE')}
				</p>

				<Advertiser {advert} />
				<Sources {advert} />
				<Highlights {advert} />
			</div>
			<div class="mx-auto mt-16 w-full max-w-2xl md:col-span-5 md:mt-0 md:max-w-none">
				<div>
					<div class="border-b border-gray-200">
						<div class="-mb-px flex" aria-orientation="horizontal" role="tablist">
							{#each Object.values(Tabs) as tab}
								{#if tab !== Tabs.Description || null !== advert.propertyDescription}
									<button
										class="p-5 border-b-2 text-sm font-medium"
										class:text-primary={activeTab === tab}
										class:border-primary={activeTab === tab}
										class:text-gray-500={activeTab !== tab}
										class:border-transparent={activeTab !== tab}
										class:hover:text-gray-800={activeTab !== tab}
										class:hover:border-gray-800={activeTab !== tab}
										aria-controls="tab-{tab}"
										role="tab"
										type="button"
										on:click={() => (activeTab = tab)}
									>
										{tab}
									</button>
								{/if}
							{/each}
						</div>
					</div>

					<div class="pt-10">
						{#if activeTab === Tabs.Gallery}
							<Gallery {advert} />
						{:else if activeTab === Tabs.Map}
							<Map {advert} />
						{:else if activeTab === Tabs.Description}
							<Description {advert} />
						{/if}
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
