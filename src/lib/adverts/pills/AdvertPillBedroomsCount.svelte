<script lang="ts">
	import AdvertPill from '$lib/adverts/pills/AdvertPill.svelte';
	import BedIcon from '$lib/components/icons/BedIcon.svelte';

	export let count: number;
</script>

<AdvertPill>
	<BedIcon class="h-[17px] text-neutral-600" />
	{count}
</AdvertPill>
