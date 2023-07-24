<script lang="ts">
	import type { Advert } from './Advert';
	import AdvertCard from './AdvertCard.svelte';

	export let advert: Advert;
</script>

<a href={advert.advertUrl}>
	<AdvertCard {advert} />
</a>
