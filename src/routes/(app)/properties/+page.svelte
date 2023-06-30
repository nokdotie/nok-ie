<script lang="ts">
	export let data;
</script>

<svelte:head>
	<title>NOK.IE | Properties</title>
</svelte:head>

<form class="flex flex-col sm:flex-row gap-3 my-[48px] sm:my-[58px] md:my-[68px]">
	<input
		name="address.contains"
		placeholder="Search for properties..."
		value={data.form?.address?.contains ?? ''}
		class="grow min-h-[64px] pl-[60px] pr-[24px] rounded-[14px] shadow duration-300 border border-neutral-300 hover:border-primary focus:border-primary outline-none text-paragraph-3 bg-[url('/images/icons/search.svg')] focus:bg-[url('/images/icons/search-focus.svg')] bg-no-repeat bg-[20px_50%] bg-[length:23px_23px]"
	/>

	<!--
		<div>
			Price

			<select name="priceInEur.greaterThanOrEqual">
				<option value="" selected={data.form?.priceInEur?.greaterThanOrEqual === null}
					>No Min</option
				>
				<option value="100000" selected={data.form?.priceInEur?.greaterThanOrEqual === 100000}
					>€ 100,000 Min</option
				>
				<option value="125000" selected={data.form?.priceInEur?.greaterThanOrEqual === 125000}
					>€ 125,000 Min</option
				>
				<option value="150000" selected={data.form?.priceInEur?.greaterThanOrEqual === 150000}
					>€ 150,000 Min</option
				>
				<option value="175000" selected={data.form?.priceInEur?.greaterThanOrEqual === 175000}
					>€ 175,000 Min</option
				>
				<option value="200000" selected={data.form?.priceInEur?.greaterThanOrEqual === 200000}
					>€ 200,000 Min</option
				>
				<option value="225000" selected={data.form?.priceInEur?.greaterThanOrEqual === 225000}
					>€ 225,000 Min</option
				>
				<option value="250000" selected={data.form?.priceInEur?.greaterThanOrEqual === 250000}
					>€ 250,000 Min</option
				>
				<option value="275000" selected={data.form?.priceInEur?.greaterThanOrEqual === 275000}
					>€ 275,000 Min</option
				>
				<option value="300000" selected={data.form?.priceInEur?.greaterThanOrEqual === 300000}
					>€ 300,000 Min</option
				>
				<option value="325000" selected={data.form?.priceInEur?.greaterThanOrEqual === 325000}
					>€ 325,000 Min</option
				>
				<option value="350000" selected={data.form?.priceInEur?.greaterThanOrEqual === 350000}
					>€ 350,000 Min</option
				>
				<option value="375000" selected={data.form?.priceInEur?.greaterThanOrEqual === 375000}
					>€ 375,000 Min</option
				>
				<option value="400000" selected={data.form?.priceInEur?.greaterThanOrEqual === 400000}
					>€ 400,000 Min</option
				>
				<option value="450000" selected={data.form?.priceInEur?.greaterThanOrEqual === 450000}
					>€ 450,000 Min</option
				>
				<option value="500000" selected={data.form?.priceInEur?.greaterThanOrEqual === 500000}
					>€ 500,000 Min</option
				>
				<option value="550000" selected={data.form?.priceInEur?.greaterThanOrEqual === 550000}
					>€ 550,000 Min</option
				>
				<option value="600000" selected={data.form?.priceInEur?.greaterThanOrEqual === 600000}
					>€ 600,000 Min</option
				>
				<option value="650000" selected={data.form?.priceInEur?.greaterThanOrEqual === 650000}
					>€ 650,000 Min</option
				>
				<option value="700000" selected={data.form?.priceInEur?.greaterThanOrEqual === 700000}
					>€ 700,000 Min</option
				>
				<option value="800000" selected={data.form?.priceInEur?.greaterThanOrEqual === 800000}
					>€ 800,000 Min</option
				>
				<option value="900000" selected={data.form?.priceInEur?.greaterThanOrEqual === 900000}
					>€ 900,000 Min</option
				>
			</select>

			<select name="priceInEur.lessThanOrEqual">
				<option value="100000" selected={data.form?.priceInEur?.lessThanOrEqual === 100000}
					>€ 100,000 Max</option
				>
				<option value="125000" selected={data.form?.priceInEur?.lessThanOrEqual === 125000}
					>€ 125,000 Max</option
				>
				<option value="150000" selected={data.form?.priceInEur?.lessThanOrEqual === 150000}
					>€ 150,000 Max</option
				>
				<option value="175000" selected={data.form?.priceInEur?.lessThanOrEqual === 175000}
					>€ 175,000 Max</option
				>
				<option value="200000" selected={data.form?.priceInEur?.lessThanOrEqual === 200000}
					>€ 200,000 Max</option
				>
				<option value="225000" selected={data.form?.priceInEur?.lessThanOrEqual === 225000}
					>€ 225,000 Max</option
				>
				<option value="250000" selected={data.form?.priceInEur?.lessThanOrEqual === 250000}
					>€ 250,000 Max</option
				>
				<option value="275000" selected={data.form?.priceInEur?.lessThanOrEqual === 275000}
					>€ 275,000 Max</option
				>
				<option value="300000" selected={data.form?.priceInEur?.lessThanOrEqual === 300000}
					>€ 300,000 Max</option
				>
				<option value="325000" selected={data.form?.priceInEur?.lessThanOrEqual === 325000}
					>€ 325,000 Max</option
				>
				<option value="350000" selected={data.form?.priceInEur?.lessThanOrEqual === 350000}
					>€ 350,000 Max</option
				>
				<option value="375000" selected={data.form?.priceInEur?.lessThanOrEqual === 375000}
					>€ 375,000 Max</option
				>
				<option value="400000" selected={data.form?.priceInEur?.lessThanOrEqual === 400000}
					>€ 400,000 Max</option
				>
				<option value="450000" selected={data.form?.priceInEur?.lessThanOrEqual === 450000}
					>€ 450,000 Max</option
				>
				<option value="500000" selected={data.form?.priceInEur?.lessThanOrEqual === 500000}
					>€ 500,000 Max</option
				>
				<option value="550000" selected={data.form?.priceInEur?.lessThanOrEqual === 550000}
					>€ 550,000 Max</option
				>
				<option value="600000" selected={data.form?.priceInEur?.lessThanOrEqual === 600000}
					>€ 600,000 Max</option
				>
				<option value="650000" selected={data.form?.priceInEur?.lessThanOrEqual === 650000}
					>€ 650,000 Max</option
				>
				<option value="700000" selected={data.form?.priceInEur?.lessThanOrEqual === 700000}
					>€ 700,000 Max</option
				>
				<option value="800000" selected={data.form?.priceInEur?.lessThanOrEqual === 800000}
					>€ 800,000 Max</option
				>
				<option value="900000" selected={data.form?.priceInEur?.lessThanOrEqual === 900000}
					>€ 900,000 Max</option
				>
				<option value="" selected={data.form?.priceInEur?.lessThanOrEqual === null}>No Max</option>
			</select>
		</div>

		<div>
			Size

			<select name="sizeInSqtMtr.greaterThanOrEqual">
				<option value="" selected={data.form?.sizeInSqtMtr?.greaterThanOrEqual === null}
					>No Min</option
				>
				<option value="25" selected={data.form?.sizeInSqtMtr?.greaterThanOrEqual === 25}
					>25 ㎡ Min</option
				>
				<option value="50" selected={data.form?.sizeInSqtMtr?.greaterThanOrEqual === 50}
					>50 ㎡ Min</option
				>
				<option value="75" selected={data.form?.sizeInSqtMtr?.greaterThanOrEqual === 75}
					>75 ㎡ Min</option
				>
				<option value="100" selected={data.form?.sizeInSqtMtr?.greaterThanOrEqual === 100}
					>100 ㎡ Min</option
				>
				<option value="125" selected={data.form?.sizeInSqtMtr?.greaterThanOrEqual === 125}
					>125 ㎡ Min</option
				>
				<option value="150" selected={data.form?.sizeInSqtMtr?.greaterThanOrEqual === 150}
					>150 ㎡ Min</option
				>
				<option value="175" selected={data.form?.sizeInSqtMtr?.greaterThanOrEqual === 175}
					>175 ㎡ Min</option
				>
				<option value="200" selected={data.form?.sizeInSqtMtr?.greaterThanOrEqual === 200}
					>200 ㎡ Min</option
				>
				<option value="250" selected={data.form?.sizeInSqtMtr?.greaterThanOrEqual === 250}
					>250 ㎡ Min</option
				>
				<option value="300" selected={data.form?.sizeInSqtMtr?.greaterThanOrEqual === 300}
					>300 ㎡ Min</option
				>
				<option value="350" selected={data.form?.sizeInSqtMtr?.greaterThanOrEqual === 350}
					>350 ㎡ Min</option
				>
				<option value="400" selected={data.form?.sizeInSqtMtr?.greaterThanOrEqual === 400}
					>400 ㎡ Min</option
				>
				<option value="500" selected={data.form?.sizeInSqtMtr?.greaterThanOrEqual === 500}
					>500 ㎡ Min</option
				>
				<option value="600" selected={data.form?.sizeInSqtMtr?.greaterThanOrEqual === 600}
					>600 ㎡ Min</option
				>
			</select>

			<select name="sizeInSqtMtr.lessThanOrEqual">
				<option value="25" selected={data.form?.sizeInSqtMtr?.lessThanOrEqual === 25}
					>25 ㎡ Max</option
				>
				<option value="50" selected={data.form?.sizeInSqtMtr?.lessThanOrEqual === 50}
					>50 ㎡ Max</option
				>
				<option value="75" selected={data.form?.sizeInSqtMtr?.lessThanOrEqual === 75}
					>75 ㎡ Max</option
				>
				<option value="100" selected={data.form?.sizeInSqtMtr?.lessThanOrEqual === 100}
					>100 ㎡ Max</option
				>
				<option value="125" selected={data.form?.sizeInSqtMtr?.lessThanOrEqual === 125}
					>125 ㎡ Max</option
				>
				<option value="150" selected={data.form?.sizeInSqtMtr?.lessThanOrEqual === 150}
					>150 ㎡ Max</option
				>
				<option value="175" selected={data.form?.sizeInSqtMtr?.lessThanOrEqual === 175}
					>175 ㎡ Max</option
				>
				<option value="200" selected={data.form?.sizeInSqtMtr?.lessThanOrEqual === 200}
					>200 ㎡ Max</option
				>
				<option value="250" selected={data.form?.sizeInSqtMtr?.lessThanOrEqual === 250}
					>250 ㎡ Max</option
				>
				<option value="300" selected={data.form?.sizeInSqtMtr?.lessThanOrEqual === 300}
					>300 ㎡ Max</option
				>
				<option value="350" selected={data.form?.sizeInSqtMtr?.lessThanOrEqual === 350}
					>350 ㎡ Max</option
				>
				<option value="400" selected={data.form?.sizeInSqtMtr?.lessThanOrEqual === 400}
					>400 ㎡ Max</option
				>
				<option value="500" selected={data.form?.sizeInSqtMtr?.lessThanOrEqual === 500}
					>500 ㎡ Max</option
				>
				<option value="600" selected={data.form?.sizeInSqtMtr?.lessThanOrEqual === 600}
					>600 ㎡ Max</option
				>
				<option value="" selected={data.form?.sizeInSqtMtr?.lessThanOrEqual === null}>No Max</option
				>
			</select>
		</div>

		<div>
			Bedrooms

			<select name="bedroomsCount.greaterThanOrEqual">
				<option value="" selected={data.form?.bedroomsCount?.greaterThanOrEqual === null}
					>No Min</option
				>
				<option value="1" selected={data.form?.bedroomsCount?.greaterThanOrEqual === 1}
					>1 Min</option
				>
				<option value="2" selected={data.form?.bedroomsCount?.greaterThanOrEqual === 2}
					>2 Min</option
				>
				<option value="3" selected={data.form?.bedroomsCount?.greaterThanOrEqual === 3}
					>3 Min</option
				>
				<option value="4" selected={data.form?.bedroomsCount?.greaterThanOrEqual === 4}
					>4 Min</option
				>
				<option value="5" selected={data.form?.bedroomsCount?.greaterThanOrEqual === 5}
					>5 Min</option
				>
				<option value="6" selected={data.form?.bedroomsCount?.greaterThanOrEqual === 6}
					>6 Min</option
				>
				<option value="7" selected={data.form?.bedroomsCount?.greaterThanOrEqual === 7}
					>7 Min</option
				>
			</select>

			<select name="bedroomsCount.lessThanOrEqual">
				<option value="1" selected={data.form?.bedroomsCount?.lessThanOrEqual === 1}>1 Max</option>
				<option value="2" selected={data.form?.bedroomsCount?.lessThanOrEqual === 2}>2 Max</option>
				<option value="3" selected={data.form?.bedroomsCount?.lessThanOrEqual === 3}>3 Max</option>
				<option value="4" selected={data.form?.bedroomsCount?.lessThanOrEqual === 4}>4 Max</option>
				<option value="5" selected={data.form?.bedroomsCount?.lessThanOrEqual === 5}>5 Max</option>
				<option value="6" selected={data.form?.bedroomsCount?.lessThanOrEqual === 6}>6 Max</option>
				<option value="7" selected={data.form?.bedroomsCount?.lessThanOrEqual === 7}>7 Max</option>
				<option value="" selected={data.form?.bedroomsCount?.lessThanOrEqual === null}
					>No Max</option
				>
			</select>
		</div>

		<div>
			Bathrooms

			<select name="bathroomsCount.greaterThanOrEqual">
				<option value="" selected={data.form?.bathroomsCount?.greaterThanOrEqual === null}
					>No Min</option
				>
				<option value="1" selected={data.form?.bathroomsCount?.greaterThanOrEqual === 1}
					>1 Min</option
				>
				<option value="2" selected={data.form?.bathroomsCount?.greaterThanOrEqual === 2}
					>2 Min</option
				>
				<option value="3" selected={data.form?.bathroomsCount?.greaterThanOrEqual === 3}
					>3 Min</option
				>
				<option value="4" selected={data.form?.bathroomsCount?.greaterThanOrEqual === 4}
					>4 Min</option
				>
				<option value="5" selected={data.form?.bathroomsCount?.greaterThanOrEqual === 5}
					>5 Min</option
				>
				<option value="6" selected={data.form?.bathroomsCount?.greaterThanOrEqual === 6}
					>6 Min</option
				>
				<option value="7" selected={data.form?.bathroomsCount?.greaterThanOrEqual === 7}
					>7 Min</option
				>
			</select>

			<select name="bathroomsCount.lessThanOrEqual">
				<option value="1" selected={data.form?.bathroomsCount?.lessThanOrEqual === 1}>1 Max</option>
				<option value="2" selected={data.form?.bathroomsCount?.lessThanOrEqual === 2}>2 Max</option>
				<option value="3" selected={data.form?.bathroomsCount?.lessThanOrEqual === 3}>3 Max</option>
				<option value="4" selected={data.form?.bathroomsCount?.lessThanOrEqual === 4}>4 Max</option>
				<option value="5" selected={data.form?.bathroomsCount?.lessThanOrEqual === 5}>5 Max</option>
				<option value="6" selected={data.form?.bathroomsCount?.lessThanOrEqual === 6}>6 Max</option>
				<option value="7" selected={data.form?.bathroomsCount?.lessThanOrEqual === 7}>7 Max</option>
				<option value="" selected={data.form?.bathroomsCount?.lessThanOrEqual === null}
					>No Max</option
				>
			</select>
		</div>
		-->

	<button
		type="submit"
		class="w-full sm:w-[150px] h-[64px] rounded-[14px] bg-primary text-neutral-100 text-paragraph-3 font-semibold duration-300 hover:scale-95"
		>Search</button
	>
</form>

<div
	class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[26px] gap-y-[45px] max-w-[660px] md:max-w-none mx-auto"
>
	{#each data.adverts.edges as edge}
		<a
			href={edge.node.advertUrl}
			class="group bg-neutral-100 shadow rounded-[20px] overflow-hidden duration-300 hover:scale-95"
		>
			<div class="overflow-hidden">
				<img
					class="duration-300 group-hover:scale-105 w-full object-cover object-center aspect-photo"
					src={edge.node.propertyImageUrls[0] ?? '/images/placeholder.svg'}
					alt=""
				/>
			</div>
			<div class="px-[25px] sm:px-[32px] pt-[32px] md:pt-[40px] pb-[28px]">
				<div class="text-heading-4 md:text-heading-3 font-bold mb-[12px] text-neutral-800">
					€ {edge.node.advertPriceInEur.toLocaleString('en-IE')}
				</div>
				<!-- <h2
					class="text-heading-6 md:text-heading-5 font-bold mb-[10px] text-neutral-800 duration-300 group-hover:text-primary"
				>
					{property.label}
				</h2> -->
				<div class="flex text-neutral-600">
					<img class="max-w-[15px] mr-[8px]" src="/images/icons/location.svg" alt="Location Icon" />
					<div class="text-paragraph-4">{edge.node.propertyAddress}</div>
				</div>
				<div class="min-h-[1px] mt-[36px] mb-[26px] bg-neutral-400" />
				<div class="flex mr-[-12px] mb-[-12px]">
					<div
						class="flex mr-[12px] mb-[12px] px-[14px] py-[10px] rounded-[40px] text-[14px] leading-[1.143em] text-neutral-800 font-semibold shadow"
					>
						<img class="max-w-[17px] mr-[6px]" src="/images/icons/size.svg" alt="Size Icon" />
						{edge.node.propertySizeInSqtMtr.toLocaleString('en-IE')} &#13217;
					</div>
					<div
						class="flex mr-[12px] mb-[12px] px-[14px] py-[10px] rounded-[40px] text-[14px] leading-[1.143em] text-neutral-800 font-semibold shadow"
					>
						<img class="max-w-[17px] mr-[6px]" src="/images/icons/bedroom.svg" alt="Bedroom Icon" />
						{edge.node.propertyBedroomsCount}
					</div>
					<div
						class="flex mr-[12px] mb-[12px] px-[14px] py-[10px] rounded-[40px] text-[14px] leading-[1.143em] text-neutral-800 font-semibold shadow"
					>
						<img
							class="max-w-[17px] mr-[6px]"
							src="/images/icons/bathroom.svg"
							alt="Bathroom Icon"
						/>
						{edge.node.propertyBedroomsCount}
					</div>
				</div>
			</div>
		</a>
	{/each}
</div>

<div class="mt-[50px] flex gap-[15px] justify-center">
	<!-- <a
		class="text-center mt-[15px] py-[20px] w-[200px] rounded-[12px] text-neutral-800 bg-neutral-100 hover:scale-95 duration-300 shadow text-paragraph-3 font-semibold"
		href="/properties?{data.url.searchParams}after="
	>
		Previous page
	</a> -->
	{#if data.adverts.pageInfo.hasNextPage}
		<a
			class="text-center mt-[15px] py-[20px] w-[200px] rounded-[12px] text-neutral-100 bg-primary hover:scale-95 duration-300 shadow text-paragraph-3 font-semibold"
			href="/properties?{data.url.searchParams}&after={data.adverts.pageInfo.endCursor}"
		>
			Next page
		</a>
	{/if}
</div>
