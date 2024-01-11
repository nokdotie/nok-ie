<script lang="ts">
	import PropertiesRoute from '../(list)/Route';
	import Location from './Location.svelte';
	import FilterPrice from './FilterPrice.svelte';
	import FilterBedroomsCount from './FilterBedroomsCount.svelte';
	import FilterBathroomsCount from './FilterBathroomsCount.svelte';
	import FilterSize from './FilterSize.svelte';
	import { SearchFilters } from './SearchFilters';
	import { page } from '$app/stores';
	import Meta from '$lib/seo/Meta.svelte';

	let searchFilters = SearchFilters.fromPage(page);
</script>

<Meta title="Search" description="Search for properties in Ireland." />

<div class="mx-auto w-full sm:w-[640px] px-4 mt-10">
	<form action={PropertiesRoute(null, null)}>
		<Location searchFilters={$searchFilters} />

		<div class="my-7 w-full border-t border-gray-300 text-right" />

		<FilterPrice searchFilters={$searchFilters} />
		<FilterBedroomsCount searchFilters={$searchFilters} />
		<FilterBathroomsCount searchFilters={$searchFilters} />
		<FilterSize searchFilters={$searchFilters} />

		<div class="text-right mt-10">
			<button
				type="submit"
				class="rounded-md bg-primary hover:bg-primary/70 px-3 py-2 font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
				>Search</button
			>
		</div>
	</form>
</div>
