<script lang="ts">
	import { derived } from 'svelte/store';
	import PropertiesRoute from '../../routes/(app)/properties/(list)/Route';
	import { page } from '$app/stores';

	const q = derived(page, ($page) => $page.url.searchParams.get('q'));
</script>

<header class="bg-white">
	<nav class="mx-auto flex max-w-7xl items-center justify-between p-6 sm:px-8" aria-label="Global">
		<a href="/" class="-m-1.5 p-1.5 flex items-center">
			<span class="sr-only">Nok.ie</span>
			<img class="h-8 w-auto" src="/images/logo.svg" alt="Nok.ie Logo" />
			<h1 class="font-bold tracking-tight text-gray-900 text-xl">Nok.ie</h1>
		</a>

		<div class="sm:w-96">
			<form action={PropertiesRoute()}>
				<label for="q" class="sr-only">Search</label>
				<div class="relative">
					<input
						id="q"
						name="q"
						value={$q}
						class="peer block w-full rounded-md border-0 bg-white py-1.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
						placeholder="Search"
						type="search"
					/>

					<div
						class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400 peer-focus:text-gray-600"
					>
						<svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
							<path
								fill-rule="evenodd"
								d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
								clip-rule="evenodd"
							/>
						</svg>
					</div>
				</div>
			</form>
		</div>
	</nav>
</header>
