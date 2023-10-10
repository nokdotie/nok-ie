<script lang="ts">
	export let advert: {
		propertySizeInSqtMtr: number;
		propertyBedroomsCount: number;
		propertyBathroomsCount: number;
	};
</script>

<div class="mt-10 border-t border-gray-200 pt-10">
	<h3 class="text-sm font-medium text-gray-900">Highlights</h3>
	<div class="prose prose-sm mt-4 text-gray-500">
		<ul role="list">
			<li>{Math.floor(advert.propertySizeInSqtMtr)} m²</li>
			<li>{advert.propertyBedroomsCount} bedrooms</li>
			<li>{advert.propertyBathroomsCount} bathrooms</li>
		</ul>
	</div>
</div>
