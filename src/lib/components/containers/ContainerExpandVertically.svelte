<script lang="ts">
	export let maxHeightClass: string;

	let container: null | HTMLDivElement;

	let expanded = false;
</script>

<div class="overflow-hidden {expanded ? '' : maxHeightClass}" bind:this={container}>
	<slot />
</div>

{#if !expanded && container?.offsetHeight !== container?.scrollHeight}
	<div class="text-center">
		<div
			class="relative bg-gradient-to-t from-neutral-100 to-transparent h-[70px] mt-[-70px] mb-[10px]"
		/>

		<button
			class="text-neutral-800 hover:text-primary font-medium leading-[1.667em] transition duration-300"
			on:click={() => (expanded = true)}
		>
			Show more
		</button>
	</div>
{/if}
