<script lang="ts">
	import BrowserHistoryBack from '$lib/utils/BrowserHistoryBack';
	import ContactRoute from '../../contact/Route';
</script>

<div class="bg-white">
	<div class="px-6 lg:px-8 py-24 sm:py-32">
		<div class="mx-auto max-w-2xl text-center">
			<h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Coming Soon</h2>
			<p class="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
				Our website is currently under construction, and we're hard at work on this feature. If you
				need any assistance in the meantime, don't hesitate to reach out.
			</p>
			<div class="mt-10 flex items-center justify-center gap-x-6">
				<a
					href={ContactRoute()}
					class="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary/90"
					>Get in touch</a
				>
				<a
					href="/"
					on:click|preventDefault={BrowserHistoryBack}
					class="text-sm font-semibold leading-6 text-gray-900"
					>Back <span aria-hidden="true">→</span></a
				>
			</div>
		</div>
	</div>
</div>
