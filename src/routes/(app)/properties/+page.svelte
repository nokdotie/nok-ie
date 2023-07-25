<script lang="ts">
	import BrowserHistoryBack from '$lib/utils/BrowserHistoryBack.js';

	export let data;
</script>

<svelte:head>
	<title>NOK.IE | Properties</title>
</svelte:head>

<div class="flex flex-wrap flex-row gap-3 justify-center">
	{#each data.adverts.edges as edge}
		<a
			href={edge.node.advertUrl}
			class="group bg-neutral-100 shadow rounded-[20px] overflow-hidden duration-300 hover:scale-95 w-[345px]"
		>
			<div class="overflow-hidden">
				<img
					class="duration-300 group-hover:scale-105 w-full object-cover object-center aspect-photo"
					src={edge.node.propertyImageUrls[0] ?? '/images/placeholder.svg'}
					alt=""
				/>
			</div>
			<div class="px-[25px] sm:px-[32px] pt-[32px] md:pt-[40px] pb-[28px]">
				<div class="text-heading-4 md:text-heading-3 font-bold mb-[12px] text-neutral-800">
					€ {edge.node.advertPriceInEur.toLocaleString('en-IE')}
				</div>
				<div class="flex text-neutral-600">
					<img class="max-w-[15px] mr-[8px]" src="/images/icons/location.svg" alt="Location Icon" />
					<div class="text-paragraph-4">{edge.node.propertyAddress}</div>
				</div>
				<div class="min-h-[1px] mt-[36px] mb-[26px] bg-neutral-400" />
				<div class="flex mr-[-12px] mb-[-12px]">
					<div
						class="flex mr-[12px] mb-[12px] px-[14px] py-[10px] rounded-[40px] text-[14px] leading-[1.143em] text-neutral-800 font-semibold shadow"
					>
						<img class="max-w-[17px] mr-[6px]" src="/images/icons/size.svg" alt="Size Icon" />
						{Math.floor(edge.node.propertySizeInSqtMtr).toLocaleString('en-IE')} &#13217;
					</div>
					<div
						class="flex mr-[12px] mb-[12px] px-[14px] py-[10px] rounded-[40px] text-[14px] leading-[1.143em] text-neutral-800 font-semibold shadow"
					>
						<img class="max-w-[17px] mr-[6px]" src="/images/icons/bedroom.svg" alt="Bedroom Icon" />
						{edge.node.propertyBedroomsCount}
					</div>
					<div
						class="flex mr-[12px] mb-[12px] px-[14px] py-[10px] rounded-[40px] text-[14px] leading-[1.143em] text-neutral-800 font-semibold shadow"
					>
						<img
							class="max-w-[17px] mr-[6px]"
							src="/images/icons/bathroom.svg"
							alt="Bathroom Icon"
						/>
						{edge.node.propertyBedroomsCount}
					</div>
				</div>
			</div>
		</a>
	{/each}
</div>

<div class="my-[50px] flex gap-3 justify-center">
	{#if data.url.searchParams.after}
		<a
			class="text-center mt-[15px] py-[20px] w-[175px] rounded-[12px] text-neutral-800 bg-neutral-100 hover:scale-95 duration-300 shadow text-paragraph-3 font-semibold"
			href="/"
			on:click={BrowserHistoryBack}
		>
			Previous page
		</a>
	{/if}
	{#if data.adverts.pageInfo.hasNextPage}
		<a
			class="text-center mt-[15px] py-[20px] w-[175px] rounded-[12px] text-neutral-100 bg-primary hover:scale-95 duration-300 shadow text-paragraph-3 font-semibold"
			href="/properties?q={data.url.searchParams.q}&after={data.adverts.pageInfo.endCursor}"
		>
			Next page
		</a>
	{/if}
</div>
