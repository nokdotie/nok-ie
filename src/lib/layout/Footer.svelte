<script lang="ts">
	const navigation = [
		{ label: 'Privacy Policy', href: '/privacy-policy' },
		{ label: 'Terms of Service', href: '/terms-of-service' }
	];
</script>

<footer class="mx-auto max-w-7xl overflow-hidden px-6 py-10 sm:py-14 lg:px-8">
	<nav class="-mb-6 flex justify-center space-x-12" aria-label="Footer">
		{#each navigation as item}
			<div class="pb-6">
				<a href={item.href} class="text-sm leading-6 text-gray-600 hover:text-gray-900"
					>{item.label}</a
				>
			</div>
		{/each}
	</nav>
	<p class="mt-10 text-center text-xs leading-5 text-gray-500">
		&copy; 2023 Nok.ie. All rights reserved.
	</p>
</footer>
