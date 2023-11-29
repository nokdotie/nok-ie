<script lang="ts">
	export let advert: {
		advertiser?: {
			name: string;
			pictureUrl: string;
			emailAddresses: string[];
			phoneNumbers: string[];
			physicalAddresses: string[];
		};
	};
</script>

{#if advert.advertiser}
	<div class="mt-10 pt-10 border-t border-gray-200">
		<div class="flex items-center gap-2">
			<img
				class="h-20 w-20 object-contain flex-shrink-0 rounded-md"
				src={advert.advertiser.pictureUrl}
				alt=""
			/>
			<div class="flex-col truncate">
				<h3 class="font-medium text-gray-900 truncate">{advert.advertiser.name}</h3>
				<p class="text-sm text-gray-500 truncate">{advert.advertiser.physicalAddresses[0]}</p>
			</div>
		</div>

		<div class="flex flex-col gap-2 mt-7 text-sm">
			{#each advert.advertiser.emailAddresses as emailAddress}
				<a
					href="mailto:{emailAddress}"
					class="inline-flex items-center gap-x-1.5 rounded-md px-3 py-2 shadow-sm hover:bg-gray-50 ring-1 ring-inset ring-gray-300"
				>
					<svg class="-ml-0.5 h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
						<path
							d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z"
						/>
						<path
							d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z"
						/>
					</svg>
					{emailAddress}
				</a>
			{/each}
			{#each advert.advertiser.phoneNumbers as phoneNumber}
				<a
					href="tel:{phoneNumber}"
					class="inline-flex items-center gap-x-1.5 rounded-md px-3 py-2 shadow-sm hover:bg-gray-50 ring-1 ring-inset ring-gray-300"
				>
					<svg class="-ml-0.5 h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
						><path
							fill-rule="evenodd"
							d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z"
							clip-rule="evenodd"
						/>
					</svg>
					{phoneNumber}
				</a>
			{/each}
		</div>
	</div>
{/if}
