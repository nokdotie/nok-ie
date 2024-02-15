<script lang="ts">
	import AdvertPill from '$lib/adverts/pills/AdvertPill.svelte';
	import BathIcon from '$lib/components/icons/BathIcon.svelte';

	export let count: number;
</script>

<AdvertPill>
	<BathIcon class="h-[17px] text-neutral-600" />
	{count}
</AdvertPill>
