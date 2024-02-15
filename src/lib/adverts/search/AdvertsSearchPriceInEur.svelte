<script lang="ts">
	import {
		AdvertsSearchQueryStringNames,
		type AdvertsSearch
	} from '$lib/adverts/search/AdvertsSearch';
	import Input from '$lib/components/forms/Input.svelte';
	import InputSuffix from '$lib/components/forms/InputSuffix.svelte';
	import Label from '$lib/components/forms/Label.svelte';

	export let advertsSearch: AdvertsSearch;
</script>

<div>
	<Label for={AdvertsSearchQueryStringNames.PriceInEurMin}>Price Min</Label>
	<div class="relative">
		<Input
			id={AdvertsSearchQueryStringNames.PriceInEurMin}
			class="pr-14 sm:pr-16"
			type="number"
			placeholder="Minimum price"
			value={advertsSearch.priceInEurMin}
		/>
		<InputSuffix>EUR</InputSuffix>
	</div>
</div>
<div>
	<Label for={AdvertsSearchQueryStringNames.PriceInEurMax}>Price Max</Label>
	<div class="relative">
		<Input
			id={AdvertsSearchQueryStringNames.PriceInEurMax}
			class="pr-14 sm:pr-16"
			type="number"
			placeholder="Maximum price"
			value={advertsSearch.priceInEurMax}
		/>
		<InputSuffix>EUR</InputSuffix>
	</div>
</div>
