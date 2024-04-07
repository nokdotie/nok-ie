<script lang="ts">
	import type { Advert } from '$lib/adverts/Adverts';
	import EmailIcon from '$lib/components/icons/EmailIcon.svelte';
	import PhoneIcon from '$lib/components/icons/PhoneIcon.svelte';
	import Image from '$lib/components/images/Image.svelte';
	import HorizontalLine from '$lib/components/HorizontalLine.svelte';

	export let advert: Advert;

	let sourcesTypeNames = [
		'DaftIeAdvert',
		'DngIeAdvert',
		'MyHomeIeAdvert',
		'PropertyPalComAdvert',
		'SherryFitzIeAdvert',
		'MaherPropertyIeAdvert'
	];

	let sources = advert.sources
		.filter((source) => sourcesTypeNames.includes(source.__typename))
		.map((source) => ({
			url: source.url,
			hostname: new URL(source.url).hostname.replace('www.', '')
		}));
</script>

<div class="mt-10 sm:mt-[50px] md:mt-[60px] lg:mt-0">
	<div
		class="bg-neutral-100 shadow-400 mt-0 lg:mt-[-184px] sticky pt-10 lg:pt-12 pb-[42px] lg:pb-[50px] px-[25px] sm:px-[35px] md:px-10 lg:px-12 rounded-[20px] lg:rounded-3xl top-5"
	>
		<h3 class="text-neutral-800 text-[22px] font-bold leading-[1.364em] mt-0 mb-4">
			Reach the agent
		</h3>
		{#if null !== advert.advertiser}
			<div class="mb-[-15px]">
				<div class="flex items-center gap-[22px] mb-[15px]">
					<Image
						src={advert.advertiser.pictureUrl}
						alt=""
						class="w-[90px] sm:w-24 rounded-full object-cover object-center aspect-square"
					/>
					<div class="mb-3 text-neutral-800 text-xl font-bold leading-[1.1em]">
						{advert.advertiser.name}
					</div>
				</div>
				<div>
					<div class="grid gap-y-3">
						{#each advert.advertiser.phoneNumbers as phoneNumber}
							<a
								href="tel:{phoneNumber}"
								class="flex gap-x-[15px] items-center text-neutral-700 hover:text-primary text-lg font-medium leading-[1.111em] transition duration-300"
							>
								<PhoneIcon class="w-6 mt-[5px]" />
								{phoneNumber}
							</a>
						{/each}
						{#each advert.advertiser.emailAddresses as emailAddress}
							<a
								href="mailto:{emailAddress}"
								class="flex gap-x-[15px] items-center text-neutral-700 hover:text-primary text-lg font-medium leading-[1.111em] transition duration-300"
							>
								<EmailIcon class="w-6 mt-[5px]" />
								{emailAddress}
							</a>
						{/each}
					</div>
				</div>
			</div>
		{/if}
		{#if null !== advert.advertiser && 0 !== sources.length}
			<HorizontalLine class="mt-10 sm:mt-[42px] md:mt-[50px] lg:mt-[60px] mb-9" />
		{/if}
		{#if 0 !== sources.length}
			<div class="flex justify-center gap-x-3">
				{#each sources as source}
					<a href={source.url} target="_blank">
						<Image
							class="h-[50px] w-[50px] rounded-full"
							src="/images/services/{source.hostname}.png"
							alt=""
						/>
					</a>
				{/each}
			</div>
		{/if}
	</div>
</div>
