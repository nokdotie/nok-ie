<script lang="ts">
	import PrimaryButton from './PrimaryButton.svelte';

	export let href: null | string = null;
</script>

<PrimaryButton {href} class="{$$props.class} bg-neutral-100 text-neutral-800" on:click>
	<slot />
</PrimaryButton>
