<script lang="ts">
	export let data;
</script>

<div
	class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[26px] gap-y-[45px] max-w-[660px] md:max-w-none mx-auto"
>
	{#each data.properties as property}
		<a
			href="/properties/{property.id}"
			class="group bg-neutral-100 shadow rounded-[20px] overflow-hidden duration-300 hover:scale-95"
		>
			<div class="overflow-hidden">
				<img
					class="duration-300 group-hover:scale-105"
					src={property.image.url}
					alt={property.image.label}
				/>
			</div>
			<div class="px-[25px] sm:px-[32px] pt-[32px] md:pt-[40px] pb-[28px]">
				<div class="text-heading-4 md:text-heading-3 font-bold mb-[12px] text-neutral-800">
					€ {property.price.inEur.toLocaleString('en-IE')}
				</div>
				<h2
					class="text-heading-6 md:text-heading-5 font-bold mb-[10px] text-neutral-800 duration-300 group-hover:text-primary"
				>
					{property.label}
				</h2>
				<div class="flex text-neutral-600">
					<img class="max-w-[15px] mr-[8px]" src="/images/icons/location.svg" alt="Location Icon" />
					<div class="text-paragraph-4">{property.address}</div>
				</div>
				<div class="min-h-[1px] mt-[36px] mb-[26px] bg-neutral-400" />
				<div class="flex mr-[-12px] mb-[-12px]">
					<div
						class="flex mr-[12px] mb-[12px] px-[14px] py-[10px] rounded-[40px] text-[14px] leading-[1.143em] text-neutral-800 font-semibold shadow"
					>
						<img class="max-w-[17px] mr-[6px]" src="/images/icons/size.svg" alt="Size Icon" />
						{property.size.inSqtMtr.toLocaleString('en-IE')} &#13217;
					</div>
					<div
						class="flex mr-[12px] mb-[12px] px-[14px] py-[10px] rounded-[40px] text-[14px] leading-[1.143em] text-neutral-800 font-semibold shadow"
					>
						<img class="max-w-[17px] mr-[6px]" src="/images/icons/bedroom.svg" alt="Bedroom Icon" />
						{property.bedroomsCount}
					</div>
					<div
						class="flex mr-[12px] mb-[12px] px-[14px] py-[10px] rounded-[40px] text-[14px] leading-[1.143em] text-neutral-800 font-semibold shadow"
					>
						<img
							class="max-w-[17px] mr-[6px]"
							src="/images/icons/bathroom.svg"
							alt="Bathroom Icon"
						/>
						{property.bedroomsCount}
					</div>
				</div>
			</div>
		</a>
	{/each}
</div>

<div class="mt-[50px] flex gap-[15px] justify-center">
	<a
		class="text-center mt-[15px] py-[20px] w-[200px] rounded-[12px] text-neutral-800 bg-neutral-100 hover:scale-95 duration-300 shadow text-paragraph-3 font-semibold"
		href="/properties?after="
	>
		Previous page
	</a>
	<a
		class="text-center mt-[15px] py-[20px] w-[200px] rounded-[12px] text-neutral-100 bg-primary hover:scale-95 duration-300 shadow text-paragraph-3 font-semibold"
		href="/properties?after="
	>
		Next page
	</a>
</div>
