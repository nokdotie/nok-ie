<script lang="ts">
	import AdvertPill from '$lib/adverts/pills/AdvertPill.svelte';
	import BedIcon from '$lib/components/icons/BedIcon.svelte';

	export let count: number;
</script>

<AdvertPill class={$$props.class}>
	<BedIcon class="h-full" />
	{count}
</AdvertPill>
