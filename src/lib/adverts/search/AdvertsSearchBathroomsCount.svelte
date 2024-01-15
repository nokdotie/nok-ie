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
	<Label for={AdvertsSearchQueryStringNames.BathroomsCountMin}>Baths Min</Label>
	<Input
		id={AdvertsSearchQueryStringNames.BathroomsCountMin}
		type="number"
		placeholder="Minimum baths"
		value={advertsSearch.bathroomsCountMin}
	/>
</div>
<div>
	<Label for={AdvertsSearchQueryStringNames.BathroomsCountMax}>Baths Max</Label>
	<Input
		id={AdvertsSearchQueryStringNames.BathroomsCountMax}
		type="number"
		placeholder="Maximum baths"
		value={advertsSearch.bathroomsCountMax}
	/>
</div>
