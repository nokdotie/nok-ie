<script lang="ts">
	import PropertiesListRoute from '$routes/(app)/properties/(list)/Route';
	import PrimaryButtonDark from '$lib/components/buttons/PrimaryButtonDark.svelte';
	import type { AdvertsSearch } from '$lib/adverts/search/AdvertsSearch';
	import type { PageInfo } from '$lib/utils/GraphQl';

	export let advertsSearch: AdvertsSearch;
	export let pageInfo: PageInfo;
</script>

{#if pageInfo.hasNextPage}
	<div class="flex justify-center mt-[50px] sm:mt-[60px] md:mt-8 lg:mt-[66px]">
		<PrimaryButtonDark href={PropertiesListRoute(advertsSearch, pageInfo.endCursor)}>
			Next page
		</PrimaryButtonDark>
	</div>
{/if}
