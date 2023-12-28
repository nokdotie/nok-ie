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

{#if 0 !== advert.sources.length}
	<div class="mt-10 pt-10 border-t border-gray-200">
		<h3 class="text-sm font-medium text-gray-900">Contact seller on</h3>

		<div class="flex flex-col gap-2 mt-4 text-sm">
			{#each services as service}
				<a
					href={service.url}
					class="inline-flex items-center gap-x-1.5 rounded-md px-3 py-2 shadow-sm hover:bg-gray-50 ring-1 ring-inset ring-gray-300"
					target="_blank"
				>
					<img class="-ml-0.5 h-5 w-5" src="/images/services/{service.hostname}.png" alt="" />

					{service.hostname}
				</a>
			{/each}
		</div>
	</div>
{/if}
