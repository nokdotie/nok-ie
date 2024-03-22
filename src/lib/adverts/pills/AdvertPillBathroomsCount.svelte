<script lang="ts">
	import AdvertPill from '$lib/adverts/pills/AdvertPill.svelte';
	import BathIcon from '$lib/components/icons/BathIcon.svelte';

	export let count: number;
</script>

<AdvertPill class={$$props.class}>
	<BathIcon class="h-full" />
	{count}
</AdvertPill>
