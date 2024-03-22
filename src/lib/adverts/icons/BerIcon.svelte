<script lang="ts">
	import BerA1Icon from '$lib/adverts/icons/ber/BerA1Icon.svelte';
	import BerA2Icon from '$lib/adverts/icons/ber/BerA2Icon.svelte';
	import BerA3Icon from '$lib/adverts/icons/ber/BerA3Icon.svelte';
	import BerB1Icon from '$lib/adverts/icons/ber/BerB1Icon.svelte';
	import BerB2Icon from '$lib/adverts/icons/ber/BerB2Icon.svelte';
	import BerB3Icon from '$lib/adverts/icons/ber/BerB3Icon.svelte';
	import BerC1Icon from '$lib/adverts/icons/ber/BerC1Icon.svelte';
	import BerC2Icon from '$lib/adverts/icons/ber/BerC2Icon.svelte';
	import BerC3Icon from '$lib/adverts/icons/ber/BerC3Icon.svelte';
	import BerD1Icon from '$lib/adverts/icons/ber/BerD1Icon.svelte';
	import BerD2Icon from '$lib/adverts/icons/ber/BerD2Icon.svelte';
	import BerE1Icon from '$lib/adverts/icons/ber/BerE1Icon.svelte';
	import BerE2Icon from '$lib/adverts/icons/ber/BerE2Icon.svelte';
	import BerFIcon from '$lib/adverts/icons/ber/BerFIcon.svelte';
	import BerGIcon from '$lib/adverts/icons/ber/BerGIcon.svelte';

	export let buildingEnergyRating: string;
</script>

{#if buildingEnergyRating == 'A1'}
	<BerA1Icon class={$$props.class} />
{:else if buildingEnergyRating == 'A2'}
	<BerA2Icon class={$$props.class} />
{:else if buildingEnergyRating == 'A3'}
	<BerA3Icon class={$$props.class} />
{:else if buildingEnergyRating == 'B1'}
	<BerB1Icon class={$$props.class} />
{:else if buildingEnergyRating == 'B2'}
	<BerB2Icon class={$$props.class} />
{:else if buildingEnergyRating == 'B3'}
	<BerB3Icon class={$$props.class} />
{:else if buildingEnergyRating == 'C1'}
	<BerC1Icon class={$$props.class} />
{:else if buildingEnergyRating == 'C2'}
	<BerC2Icon class={$$props.class} />
{:else if buildingEnergyRating == 'C3'}
	<BerC3Icon class={$$props.class} />
{:else if buildingEnergyRating == 'D1'}
	<BerD1Icon class={$$props.class} />
{:else if buildingEnergyRating == 'D2'}
	<BerD2Icon class={$$props.class} />
{:else if buildingEnergyRating == 'E1'}
	<BerE1Icon class={$$props.class} />
{:else if buildingEnergyRating == 'E2'}
	<BerE2Icon class={$$props.class} />
{:else if buildingEnergyRating == 'F'}
	<BerFIcon class={$$props.class} />
{:else if buildingEnergyRating == 'G'}
	<BerGIcon class={$$props.class} />
{/if}
