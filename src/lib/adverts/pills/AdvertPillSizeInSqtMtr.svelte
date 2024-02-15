<script lang="ts">
	import AdvertPill from '$lib/adverts/pills/AdvertPill.svelte';
	import SizeIcon from '$lib/components/icons/SizeIcon.svelte';

	export let sizeInSqtMtr: number;
</script>

<AdvertPill>
	<SizeIcon class="h-[17px] text-neutral-600" />
	{sizeInSqtMtr.toLocaleString('en-IE', { maximumFractionDigits: 0 })} m²
</AdvertPill>
