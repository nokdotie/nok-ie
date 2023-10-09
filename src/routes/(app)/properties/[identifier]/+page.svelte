<script lang="ts">
	import { onError } from '$lib/utils/HtmlImageElement';
	import Gallery from './Gallery.svelte';
	import Highlights from './Highlights.svelte';
	import Sources from './Sources.svelte';

	export let data;

	let tabs = ['Gallery'];

	let activeTab = tabs[0];
</script>

<svelte:head>
	<title>NOK.IE | {data.advert.propertyAddress}</title>
</svelte:head>

<div class="bg-white">
	<div class="mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
		<div class="lg:grid lg:grid-cols-8 lg:grid-rows-1 lg:gap-x-8 lg:gap-y-10 xl:gap-x-16">
			<div class="lg:col-span-5 lg:row-end-1">
				<div class="aspect-photo overflow-hidden rounded-lg bg-gray-100">
					<img
						src={data.advert.propertyImageUrls[0]}
						on:error|preventDefault={onError('/images/placeholder.svg')}
						alt=""
						class="w-full h-full object-cover object-center"
					/>
				</div>
			</div>

			<div
				class="mx-auto mt-14 max-w-2xl sm:mt-16 lg:col-span-3 lg:row-span-2 lg:row-end-2 lg:mt-0 lg:w-full"
			>
				<h1 class="mt-4 text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">
					{data.advert.propertyAddress}
				</h1>

				<p class="mt-1 text-xl sm:text-2xl text-gray-500">
					€ {data.advert.advertPriceInEur.toLocaleString('en-IE')}
				</p>

				<Sources advert={data.advert} />
				<Highlights advert={data.advert} />
			</div>

			<div class="mx-auto mt-16 w-full max-w-2xl lg:col-span-5 lg:mt-0 lg:max-w-none">
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
							<Gallery advert={data.advert} />
						</div>
					{/if}
				</div>
			</div>
		</div>
	</div>
</div>
