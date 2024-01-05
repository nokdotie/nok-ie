<script lang="ts">
	import type { Writable } from 'svelte/store';

	export let header: string;
	export let isOpen: boolean;
</script>

<div class="px-4 py-2 my-2">
	<h3 class="-mx-2 -my-3 flow-root">
		<button
			type="button"
			class="flex w-full items-center justify-between px-2 py-3 text-gray-400 hover:text-gray-900"
			class:text-gray-900={isOpen}
			on:click|preventDefault={() => (isOpen = !isOpen)}
		>
			<span class="font-medium">{header}</span>
			<span class="ml-6 flex items-center">
				<svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
					{#if isOpen}
						<path
							fill-rule="evenodd"
							d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z"
							clip-rule="evenodd"
						/>
					{:else}
						<path
							d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z"
						/>
					{/if}
				</svg>
			</span>
		</button>
	</h3>
	<div class="pt-3" class:hidden={!isOpen}>
		<slot />
	</div>
</div>
