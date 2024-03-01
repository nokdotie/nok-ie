<script lang="ts">
	import { AdvertsSearch, AdvertsSearchQueryStringNames } from '$lib/adverts/search/AdvertsSearch';
	import Label from '$lib/components/forms/Label.svelte';
	import Select from '$lib/components/forms/Select.svelte';

	export let advertsSearch: AdvertsSearch;
</script>

<div class="{$$props.class} relative">
	<Label for={AdvertsSearchQueryStringNames.PropertyType}>PropertyType</Label>
	<Select
	    options={[
	        "Apartment",
            "Bungalow",
            "Detached",
            "Duplex",
            "EndOfTerrace",
            "House",
            "SemiDetached",
            "Site",
            "Studio",
            "Terraced"
	    ]}
		id={AdvertsSearchQueryStringNames.PropertyType}
		display_func={o => o}
		bind:value={advertsSearch.propertyType}
	/>
</div>
