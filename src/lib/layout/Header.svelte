<script lang="ts">
	import { writable } from 'svelte/store';
	import PropertiesRoute from '../../routes/(app)/properties/(list)/Route';

	const mobileMenuOpen = writable(false);

	const navigation = [
		{ label: 'Buy', href: PropertiesRoute() }
		// { label: 'Search', href: '/search' },
	];
</script>

<header class="bg-white">
	<nav class="mx-auto flex max-w-7xl items-center justify-between p-6 sm:px-8" aria-label="Global">
		<a href="/" class="-m-1.5 p-1.5 flex items-center">
			<span class="sr-only">Nok.ie</span>
			<img class="h-8 w-auto" src="/images/logo.svg" alt="Nok.ie Logo" />
			<h1 class="font-bold tracking-tight text-gray-900 text-xl">Nok.ie</h1>
		</a>
		<div class="flex sm:hidden">
			<button
				type="button"
				class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
				on:click={() => mobileMenuOpen.update((v) => !v)}
			>
				<span class="sr-only">Toggle menu</span>
				<svg
					class="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					aria-hidden="true"
				>
					{#if $mobileMenuOpen}
						<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
					{:else}
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
						/>
					{/if}
				</svg>
			</button>
		</div>
		<div class="hidden sm:flex sm:gap-x-12">
			{#each navigation as item}
				<a href={item.href} class="text-sm font-semibold leading-6 text-gray-900">{item.label}</a>
			{/each}
		</div>
	</nav>

	{#if $mobileMenuOpen}
		<div class="sm:hidden" role="dialog" aria-modal="true">
			<div class="fixed top-14 bottom-0 left-0 z-10 w-full overflow-y-auto bg-white px-6 py-6">
				<div class="space-y-2">
					{#each navigation as item}
						<a
							href={item.href}
							class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
							on:click={() => mobileMenuOpen.set(false)}>{item.label}</a
						>
					{/each}
				</div>
			</div>
		</div>
	{/if}
</header>
