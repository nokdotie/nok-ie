<script lang="ts">
	import ErrorCard from '$lib/errors/ErrorCard.svelte';
	import ErrorCardImage from '$lib/errors/ErrorCardImage.svelte';
	import ErrorCardHeader from '$lib/errors/ErrorCardHeader.svelte';
	import ErrorCardBody from '$lib/errors/ErrorCardBody.svelte';
</script>

<ErrorCard>
	<ErrorCardImage>
		<img src="/images/icons/search.svg" alt="Search Icon" class="h-full w-full p-[24px]" />
	</ErrorCardImage>
	<ErrorCardHeader>Not found</ErrorCardHeader>
	<ErrorCardBody>
		<p>Your search did not match any properties.</p>

		<div class="text-left">
			<p class="mt-[20px]">Suggestions:</p>
			<ul class="list-disc mt-[20px] ml-[20px]">
				<li>Make sure the spelling is correct.</li>
				<li>Try different keywords.</li>
				<li>Try more general keywords.</li>
			</ul>
		</div>
	</ErrorCardBody>
</ErrorCard>
