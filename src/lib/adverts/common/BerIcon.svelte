<script lang="ts">
	import type { Advert } from '$lib/adverts/Adverts';
	import Image from '$lib/components/images/Image.svelte';

	export let advert: Advert;
</script>

{#if advert.propertyBuildingEnergyRating != null}
	<div>
		<Image
			src="/images/ber/{advert.propertyBuildingEnergyRating}.svg"
			alt={advert.propertyBuildingEnergyRating}
			class="h-[19px]"
		/>
	</div>
{/if}
