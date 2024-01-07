<script lang="ts">
	import { page } from '$app/stores';
	import Meta from '$lib/seo/Meta.svelte';
	import { derived } from 'svelte/store';

	const errors: Record<string, { status: number; title: string; message: string }> = {
		'Not Found': {
			status: 404,
			title: 'Not found.',
			message: 'Sorry, we couldn’t find the page you’re looking for.'
		},
		'Internal Error': {
			status: 500,
			title: 'Internal error.',
			message: 'Sorry, something went wrong.'
		}
	};

	const error = derived(page, ($page) => errors[$page.error?.message ?? 'Internal Error']);
</script>

<Meta
	title="{$error.status} {$error.title}"
	description="Move Along, Nothing to See Here"
	index={false}
/>

<div class="flex min-h-full flex-col bg-white pb-12 pt-16">
	<main class="mx-auto flex w-full max-w-7xl flex-grow flex-col justify-center px-6 lg:px-8">
		<div class="flex flex-shrink-0 justify-center">
			<a href="/" class="inline-flex">
				<span class="sr-only">Nok.ie</span>
				<img class="h-12 w-auto" src="/images/logo.svg" alt="Nok.ie Logo" />
			</a>
		</div>
		<div class="py-16">
			<div class="text-center">
				<p class="text-base font-semibold text-primary">{$error.status}</p>
				<h1 class="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
					{$error.title}
				</h1>
				<p class="mt-2 text-base text-gray-500">{$error.message}</p>
				<div class="mt-6">
					<a href="/" class="text-base font-medium text-primary hover:text-primary/90">
						Go back home
						<span aria-hidden="true"> &rarr;</span>
					</a>
				</div>
			</div>
		</div>
	</main>
</div>
