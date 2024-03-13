<script lang="ts">
	import { AdvertsSearch, AdvertsSearchQueryStringNames } from '$lib/adverts/search/AdvertsSearch';
	import Label from '$lib/components/forms/Label.svelte';
	import Select from '$lib/components/forms/Select.svelte';

	export let advertsSearch: AdvertsSearch;

	const options = [
		{ label: 'Apartment', value: 'Apartment' },
		{ label: 'Bungalow', value: 'Bungalow' },
		{ label: 'Detached', value: 'Detached' },
		{ label: 'Duplex', value: 'Duplex' },
		{ label: 'End of terrace', value: 'EndOfTerrace' },
		{ label: 'House', value: 'House' },
		{ label: 'Semi detached', value: 'SemiDetached' },
		{ label: 'Site', value: 'Site' },
		{ label: 'Studio', value: 'Studio' },
		{ label: 'Terraced', value: 'Terraced' }
	];
</script>

<div class="{$$props.class} relative">
	<Label for={AdvertsSearchQueryStringNames.PropertyType}>PropertyType</Label>
	<Select
		id={AdvertsSearchQueryStringNames.PropertyType}
		placeholder="House, Apartment, ..."
		{options}
		bind:value={advertsSearch.propertyType}
	/>
</div>
