<script lang="ts">
	import AdvertPill from '$lib/adverts/pills/AdvertPill.svelte';
	import Image from '$lib/components/images/Image.svelte';

	export let berRating: string;
</script>

{#if berRating != null}
	<AdvertPill>
		<Image src="/images/ber/{berRating}.png" alt="{berRating}" class="h-[17px]" />
	</AdvertPill>
{/if}
