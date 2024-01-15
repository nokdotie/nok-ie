<script lang="ts">
	import type { Advert } from '$lib/adverts/Adverts';
	import AdvertPillBathroomsCount from '$lib/adverts/pills/AdvertPillBathroomsCount.svelte';
	import AdvertPillBedroomsCount from '$lib/adverts/pills/AdvertPillBedroomsCount.svelte';
	import AdvertPillSizeInSqtMtr from '$lib/adverts/pills/AdvertPillSizeInSqtMtr.svelte';

	export let advert: Advert;
</script>

<div class="flex flex-wrap">
	<AdvertPillSizeInSqtMtr sizeInSqtMtr={advert.propertySizeInSqtMtr} />
	<AdvertPillBedroomsCount count={advert.propertyBedroomsCount} />
	<AdvertPillBathroomsCount count={advert.propertyBathroomsCount} />
</div>
