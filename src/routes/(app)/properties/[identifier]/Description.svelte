<script lang="ts">
	export let advert: {
		propertyDescription: string;
	};
</script>

{#if null !== advert.propertyDescription}
	<div>
		<h3 class="text-sm font-medium text-gray-900">Description</h3>
		<p>{@html advert.propertyDescription.replace('\n', '<br>')}</p>
	</div>
{/if}
