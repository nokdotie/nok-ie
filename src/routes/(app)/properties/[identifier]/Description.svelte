<script lang="ts">
	export let advert: {
		propertyDescription: string;
	};
</script>

{#if null !== advert.propertyDescription}
	<div class="prose prose-m text-gray-500">
		<!-- eslint-disable -->
		{@html advert.propertyDescription.replaceAll(/(?:[\r\n|\r|\n]+)/g, '<br /><br />')}
	</div>
{/if}
