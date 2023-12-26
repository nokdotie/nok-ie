<script lang="ts">
	import { onError } from '$lib/utils/HtmlImageElement';
	import Gallery from './Gallery.svelte';
	import Highlights from './Highlights.svelte';
	import JsonLd from './JsonLd.svelte';
	import Advertiser from './Advertiser.svelte';
	import RobotsIndex from '$lib/seo/RobotsIndex.svelte';

	let tabs = ['Gallery'];

	let activeTab = tabs[0];

	export let advert: {
		advertPriceInEur: number;
		propertyAddress: string;
		propertyCoordinates: {
			latitude: number;
			longitude: number;
		};
		propertyImageUrls: Array<string>;
		propertySizeInSqtMtr: number;
		propertyBedroomsCount: number;
		propertyBathroomsCount: number;
		advertiser?: {
			name: string;
			pictureUrl: string;
			emailAddresses: string[];
			phoneNumbers: string[];
			physicalAddresses: string[];
		};
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
				<Highlights {advert} />
			</div>

			<div class="mx-auto mt-16 w-full max-w-2xl md:col-span-5 md:mt-0 md:max-w-none">
				<div>
					<div class="border-b border-gray-200">
						<div class="-mb-px flex space-x-8" aria-orientation="horizontal" role="tablist">
							{#each tabs as tab}
								<button
									class="border-transparent {activeTab === tab
										? 'text-primary  border-primary'
										: 'text-gray-500 hover:text-gray-800 hover:border-gray-500'} whitespace-nowrap border-b-2 py-6 text-sm font-medium"
									aria-controls="tab-{tab}"
									role="tab"
									type="button"
									on:click={() => (activeTab = tab)}
								>
									{tab}
								</button>
							{/each}
						</div>
					</div>

					{#if activeTab === 'Gallery'}
						<div id="tab-panel-gallery" class="pt-10" aria-labelledby="tab-gallery" role="tabpanel">
							<Gallery {advert} />
						</div>
					{/if}
				</div>
			</div>
		</div>
	</div>
</div>
