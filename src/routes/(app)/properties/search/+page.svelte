<script lang="ts">
	import RobotsIndex from '$lib/seo/RobotsIndex.svelte';
	import PropertiesRoute from '../(list)/Route';
	import Location from './Location.svelte';
	import FilterPrice from './FilterPrice.svelte';
	import FilterBedroomsCount from './FilterBedroomsCount.svelte';
	import FilterBathroomsCount from './FilterBathroomsCount.svelte';
	import FilterSize from './FilterSize.svelte';
	import { SearchFilters } from './SearchFilters';
	import { page } from '$app/stores';

	let searchFilters = SearchFilters.fromUrl($page.url);

	const title = 'Nok.ie | Search';
	const description = 'Search for a property to buy in Ireland.';
</script>

<RobotsIndex />

<svelte:head>
	<title>Nok.ie | Search</title>
	<meta name="description" content={title} />

	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
</svelte:head>

<div class="mx-auto w-full sm:w-[640px] px-4 mt-10">
	<form action={PropertiesRoute()}>
		<Location {searchFilters} />

		<div class="my-7 w-full border-t border-gray-300 text-right" />

		<FilterPrice {searchFilters} />
		<FilterBedroomsCount {searchFilters} />
		<FilterBathroomsCount {searchFilters} />
		<FilterSize {searchFilters} />

		<div class="text-right mt-10">
			<button
				type="submit"
				class="rounded-md bg-primary hover:bg-primary/70 px-3 py-2 font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
				>Search</button
			>
		</div>
	</form>
</div>
