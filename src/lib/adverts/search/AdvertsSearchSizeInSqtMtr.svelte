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
	<Label for={AdvertsSearchQueryStringNames.SizeInSqtMtrMin}>Size Min</Label>
	<div class="relative">
		<Input
			id={AdvertsSearchQueryStringNames.SizeInSqtMtrMin}
			class="pr-14 sm:pr-16"
			type="number"
			placeholder="Minimum size"
			value={advertsSearch.sizeInSqtMtrMin}
		/>
		<InputSuffix>m²</InputSuffix>
	</div>
</div>
<div>
	<Label for={AdvertsSearchQueryStringNames.SizeInSqtMtrMax}>Size Max</Label>
	<div class="relative">
		<Input
			id={AdvertsSearchQueryStringNames.SizeInSqtMtrMax}
			class="pr-14 sm:pr-16"
			type="number"
			placeholder="Maximum size"
			value={advertsSearch.sizeInSqtMtrMax}
		/>
		<InputSuffix>m²</InputSuffix>
	</div>
</div>
