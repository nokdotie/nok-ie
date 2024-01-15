<script lang="ts">
	import PrimaryButton from './PrimaryButton.svelte';

	export let href: null | string = null;
</script>

<PrimaryButton {href} class="{$$props.class} bg-neutral-800 text-neutral-100" on:click>
	<slot />
</PrimaryButton>
