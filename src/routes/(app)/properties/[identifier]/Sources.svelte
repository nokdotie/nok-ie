<script lang="ts">
	export let advert: {
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

	let serviceTypeNames = [
		'DaftIeAdvert',
		'DngIeAdvert',
		'MyHomeIeAdvert',
		'PropertyPalComAdvert',
		'SherryFitzIeAdvert'
	];

	let services = advert.sources
		.filter((source) => serviceTypeNames.includes(source.__typename))
		.map((source) => ({
			url: source.url,
			hostname: new URL(source.url).hostname.replace('www.', '')
		}));
</script>

<div class="mt-10 border-t border-gray-200 pt-10">
	<h3 class="text-sm font-medium text-gray-900">Details found on</h3>
	<ul role="list" class="mt-4 flex items-center space-x-6">
		{#each services as service}
			<a
				href={service.url}
				class="flex h-6 w-6 items-center justify-center grayscale hover:grayscale-0 duration-300"
				target="_blank"
			>
				<span class="sr-only">View on {service.hostname}</span>
				<img src="/images/services/{service.hostname}.png" alt="" class="w-[25px] inline" />
			</a>
		{/each}
	</ul>
</div>
