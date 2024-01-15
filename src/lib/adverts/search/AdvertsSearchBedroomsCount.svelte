<script lang="ts">
	import {
		AdvertsSearchQueryStringNames,
		type AdvertsSearch
	} from '$lib/adverts/search/AdvertsSearch';
	import Input from '$lib/components/forms/Input.svelte';
	import Label from '$lib/components/forms/Label.svelte';

	export let advertsSearch: AdvertsSearch;
</script>

<div>
	<Label for={AdvertsSearchQueryStringNames.BedroomsCountMin}>Beds Min</Label>
	<Input
		id={AdvertsSearchQueryStringNames.BedroomsCountMin}
		type="number"
		placeholder="Minimum beds"
		value={advertsSearch.bedroomsCountMin}
	/>
</div>
<div>
	<Label for={AdvertsSearchQueryStringNames.BedroomsCountMax}>Beds Max</Label>
	<Input
		id={AdvertsSearchQueryStringNames.BedroomsCountMax}
		type="number"
		placeholder="Maximum beds"
		value={advertsSearch.bedroomsCountMax}
	/>
</div>
