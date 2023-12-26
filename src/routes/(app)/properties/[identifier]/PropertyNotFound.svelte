<script lang="ts">
	import RobotsNoIndex from '$lib/seo/RobotsNoIndex.svelte';
</script>

<RobotsNoIndex />

<div class="bg-white">
	<div class="mx-auto px-4 sm:px-6 md:max-w-7xl md:px-8">
		<div class="rounded-md bg-blue-50 p-4 mb-7">
			<div class="flex">
				<div class="flex-shrink-0">
					<svg
						class="h-5 w-5 text-blue-400"
						viewBox="0 0 20 20"
						fill="currentColor"
						aria-hidden="true"
					>
						<path
							fill-rule="evenodd"
							d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z"
							clip-rule="evenodd"
						/>
					</svg>
				</div>
				<div class="ml-3 flex flex-1 justify-between text-sm">
					<p class=" text-blue-700">No longer available</p>

					<p class="">
						<a href="/" class="whitespace-nowrap font-medium text-blue-700 hover:text-blue-600">
							back
							<span aria-hidden="true"> &rarr;</span>
						</a>
					</p>
				</div>
			</div>
		</div>

		<div class="md:grid md:grid-cols-8 md:grid-rows-1 md:gap-x-8 md:gap-y-10 xl:gap-x-16">
			<div class="md:col-span-5 md:row-end-1">
				<div class="aspect-photo overflow-hidden rounded-lg bg-gray-100">
					<div class="flex items-center justify-center w-full h-full bg-gray-300 rounded" />
				</div>
			</div>

			<div
				class="mx-auto mt-14 max-w-2xl sm:mt-16 md:col-span-3 md:row-span-2 md:row-end-2 md:mt-0 md:w-full"
			>
				<h1 class="mt-4 text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 pt-2 pb-1">
					<span class="block h-[1.2rem] sm:h-[1.35rem] bg-gray-200 rounded-full w-[75%]" />
				</h1>

				<p class="mt-1 text-xl sm:text-2xl text-gray-500 pt-2">
					<span class="block h-[1rem] sm:h-[1.2rem] bg-gray-200 rounded-full w-[30%]" />
				</p>
			</div>
		</div>
	</div>
</div>
