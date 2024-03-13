<script lang="ts">
	import PrimaryButtonDark from '$lib/components/buttons/PrimaryButtonDark.svelte';
	import type { PageInfo } from '$lib/utils/GraphQl';

	export let pageInfo: PageInfo;
	export let nextPageHref: (endCursor: null | string) => string;
</script>

{#if pageInfo.hasNextPage}
	<div class="flex justify-center mt-[50px] sm:mt-[60px] md:mt-8 lg:mt-[66px]">
		<PrimaryButtonDark href={nextPageHref(pageInfo.endCursor)}>Next page</PrimaryButtonDark>
	</div>
{/if}
