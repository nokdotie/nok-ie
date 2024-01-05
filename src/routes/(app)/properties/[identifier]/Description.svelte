<script lang="ts">
	export let advert: {
		propertyDescription: string;
	};
</script>

{#if null !== advert.propertyDescription}
	<div class="prose prose-m text-gray-500">
		<!-- eslint-disable -->
		<p>{@html advert.propertyDescription.replace(/(?:\r\n|\r|\n)/g, '<br>')}</p>
	</div>
{/if}
