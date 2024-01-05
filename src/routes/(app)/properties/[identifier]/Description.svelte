<script lang="ts">
	export let advert: {
		propertyDescription: string;
	};
</script>

{#if null !== advert.propertyDescription}
	<div class="prose text-gray-700">
		<!-- eslint-disable -->
		{@html advert.propertyDescription.replace(/(?:[\r\n|\r|\n]+)/g, '<br /><br />')}
	</div>
{/if}
