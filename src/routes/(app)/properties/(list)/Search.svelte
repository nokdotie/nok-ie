<script lang="ts">
	import { writable } from 'svelte/store';

	export let filters: { q: string };

	const availableFilters = [
		{
			legend: 'Price',
			inputs: [...Array(10)]
				.map((_, i) => ({ label: `€${i * 50}k to €${(i + 1) * 50}k`, inputValue: i }))
				.concat({ label: 'more', inputValue: -1 })
		},
		{
			legend: 'Size',
			inputs: [...Array(10)]
				.map((_, i) => ({ label: `${i * 50}m² to ${(i + 1) * 50}m²`, inputValue: i }))
				.concat({ label: 'more', inputValue: -1 })
		},
		{
			legend: 'Bedrooms',
			inputs: [...Array(10)]
				.map((_, i) => ({ label: `${i + 1}`, inputValue: i + 1 }))
				.concat({ label: 'more', inputValue: -1 })
		},
		{
			legend: 'Bathrooms',
			inputs: [...Array(10)]
				.map((_, i) => ({ label: `${i + 1}`, inputValue: i + 1 }))
				.concat({ label: 'more', inputValue: -1 })
		}
	];

	const activeFiltersCount =
		Object.values(filters).filter((value) => value !== undefined).length - 1;

	const menuOpen = writable(false);
</script>

<form action="/properties">
	<div class="w-full mx-auto max-w-2xl px-4 py-8 sm:px-6 lg:max-w-7xl lg:px-8">
		<div class="mt-2 flex">
			<div class="relative rounded-md w-full min-w-0">
				<label for="q" class="sr-only">Search</label>
				<input
					type="text"
					name="q"
					id="q"
					value={filters.q}
					class="peer block h-full w-full rounded-md border border-gray-300 focus:border-gray-500 focus:outline-none py-2 pl-10 text-base text-gray-900 placeholder:text-gray-400 sm:leading-6"
					placeholder="Search"
				/>
				<div
					class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 fill-gray-400 peer-focus:fill-gray-500"
				>
					<svg aria-hidden="true" viewBox="0 0 20 20" class="h-5 w-5"
						><path
							d="M16.293 17.707a1 1 0 0 0 1.414-1.414l-1.414 1.414ZM9 14a5 5 0 0 1-5-5H2a7 7 0 0 0 7 7v-2ZM4 9a5 5 0 0 1 5-5V2a7 7 0 0 0-7 7h2Zm5-5a5 5 0 0 1 5 5h2a7 7 0 0 0-7-7v2Zm8.707 12.293-3.757-3.757-1.414 1.414 3.757 3.757 1.414-1.414ZM14 9a4.98 4.98 0 0 1-1.464 3.536l1.414 1.414A6.98 6.98 0 0 0 16 9h-2Zm-1.464 3.536A4.98 4.98 0 0 1 9 14v2a6.98 6.98 0 0 0 4.95-2.05l-1.414-1.414Z"
						/></svg
					>
				</div>
			</div>

			<div class="ml-2 flex-shrink-0">
				<button
					class="flex w-full items-center justify-center rounded-md border border-transparent bg-primary px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-primary/90 focus:bg-primary/90 focus:outline-none"
					>Search</button
				>
			</div>
			<div class="ml-2 flex-shrink-0 hidden">
				<button
					type="button"
					class="flex w-full items-center justify-center rounded-md border px-3 py-2 text-base shadow-sm group hover:border-gray-500 focus:border-gray-500 focus:outline-none relative"
					aria-controls="disclosure-1"
					aria-expanded={$menuOpen}
					on:click={() => menuOpen.update((v) => !v)}
				>
					<svg
						class="h-6 w-5 flex-none text-gray-400 group-hover:text-gray-500 group-focus:text-gray-500"
						aria-hidden="true"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path
							fill-rule="evenodd"
							d="M2.628 1.601C5.028 1.206 7.49 1 10 1s4.973.206 7.372.601a.75.75 0 01.628.74v2.288a2.25 2.25 0 01-.659 1.59l-4.682 4.683a2.25 2.25 0 00-.659 1.59v3.037c0 .684-.31 1.33-.844 1.757l-1.937 1.55A.75.75 0 018 18.25v-5.757a2.25 2.25 0 00-.659-1.591L2.659 6.22A2.25 2.25 0 012 4.629V2.34a.75.75 0 01.628-.74z"
							clip-rule="evenodd"
						/>
					</svg>
					{#if activeFiltersCount > 0}
						<div
							class="absolute top-0 right-0 -mt-3 -mr-3 px-2 py-1 bg-primary text-white text-xs rounded-full"
						>
							{activeFiltersCount}
						</div>
					{/if}
				</button>
			</div>
		</div>
	</div>

	<section aria-labelledby="filter-heading" class="border-t border-gray-200">
		{#if $menuOpen}
			<div class="border-b py-10" id="disclosure-1">
				<div class="mx-auto max-w-7xl gap-x-4 px-4 text-sm sm:px-6 sm:gap-x-6 lg:px-8">
					<div
						class="grid auto-rows-min grid-cols-1 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-x-6"
					>
						{#each availableFilters as availableFilter}
							<fieldset>
								<legend class="block font-medium">{availableFilter.legend}</legend>
								<div class="space-y-4 pt-6 sm:space-y-4 sm:pt-4">
									{#each availableFilter.inputs as input}
										<div class="flex items-center text-base sm:text-sm">
											<input
												id="price-0"
												name="price[]"
												value={input.inputValue}
												type="checkbox"
												class="h-4 w-4 flex-shrink-0 rounded border-gray-300 text-primary focus:ring-primary/90"
											/>
											<label for="price-0" class="ml-3 min-w-0 flex-1 text-gray-600"
												>{input.label}</label
											>
										</div>
									{/each}
								</div>
							</fieldset>
						{/each}
					</div>
				</div>
			</div>
		{/if}
	</section>
</form>
