<script lang="ts">
	import AdvertPill from '$lib/adverts/pills/AdvertPill.svelte';
	import SizeIcon from '$lib/components/icons/SizeIcon.svelte';

	export let sizeInSqtMtr: number;
</script>

<AdvertPill class={$$props.class}>
	<SizeIcon class="h-full" />
	<div class="whitespace-nowrap">
		{sizeInSqtMtr.toLocaleString('en-IE', { maximumFractionDigits: 0 })} m²
	</div>
</AdvertPill>
