<script lang="ts">
	import { derived } from 'svelte/store';
	import SearchRoute from '../../routes/(app)/properties/search/Route';
	import { page } from '$app/stores';

	const url = derived(page, ($page) => $page.url);
</script>

<header class="bg-white">
	<nav class="mx-auto flex max-w-7xl items-center justify-between p-6 sm:px-8" aria-label="Global">
		<a href="/" class="-m-1.5 p-1.5 flex items-center">
			<span class="sr-only">Nok.ie</span>
			<img class="h-8 w-auto" src="/images/logo.svg" alt="Nok.ie Logo" />
			<h1 class="font-bold tracking-tight text-gray-900 text-xl">Nok.ie</h1>
		</a>

		<div>
			<a href={SearchRoute($url)} class="text-gray-600 hover:text-gray-900">
				<span class="relative inline-block">
					<svg class="h-7 w-7" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
						<path
							fill-rule="evenodd"
							d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
							clip-rule="evenodd"
						/>
					</svg>

					{#if '' !== $url.search}
						<span
							class="absolute right-0 top-0 block h-2.5 w-2.5 rounded-full bg-primary ring-2 ring-white animate-bounce"
						/>
					{/if}
				</span>
			</a>
		</div>
	</nav>
</header>
