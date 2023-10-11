<script lang="ts">
	import { onError } from '$lib/utils/HtmlImageElement';
	import Route from '../[identifier]/Route';

	export let advert: {
		advertPriceInEur: number;
		propertyIdentifier: string;
		propertyAddress: string;
		propertyImageUrls: string[];
		propertySizeInSqtMtr: number;
		propertyBedroomsCount: number;
		propertyBathroomsCount: number;
	};
</script>

<a href={Route(advert)} class="group">
	<div
		class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7"
	>
		<img
			src={advert.propertyImageUrls[0] ?? '/images/placeholder.svg'}
			on:error|preventDefault={onError('/images/placeholder.svg')}
			alt=""
			class="h-full w-full object-cover object-center aspect-photo group-hover:opacity-75"
		/>
	</div>
	<h3 class="mt-4 text-lg font-medium text-gray-900 truncate">
		{advert.propertyAddress}
	</h3>
	<p class="mt-1 text-sm text-gray-700">
		€{advert.advertPriceInEur.toLocaleString('en-IE')}
	</p>
	<div class="my-3 hidden">
		<span
			class="inline-flex items-center gap-x-1.5 rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600"
		>
			<svg
				width="17"
				height="17"
				viewBox="0 0 17 17"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M13.8535 1L15.4561 2.60258C15.5013 2.64771 15.5372 2.70132 15.5616 2.76032C15.5861 2.81933 15.5987 2.88258 15.5987 2.94645C15.5987 3.01033 15.5861 3.07358 15.5616 3.13258C15.5372 3.19159 15.5013 3.24519 15.4561 3.29033L13.8535 4.8929"
					stroke="#8D8D91"
					stroke-width="1.2"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
				<path
					d="M2.94629 15.5987V3.92C2.94629 3.66189 3.04882 3.41434 3.23134 3.23183C3.41386 3.04931 3.6614 2.94678 3.91952 2.94678H15.5982"
					stroke="#8D8D91"
					stroke-width="1.2"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
				<path
					d="M4.8929 13.854L3.29097 15.4559C3.24578 15.5012 3.19213 15.537 3.13307 15.5615C3.07401 15.586 3.01071 15.5986 2.94678 15.5986C2.88285 15.5986 2.81955 15.586 2.76049 15.5615C2.70143 15.537 2.64777 15.5012 2.60258 15.4559L1 13.854"
					stroke="#8D8D91"
					stroke-width="1.2"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
				<path
					d="M14.625 15.5987C14.8831 15.5987 15.1307 15.4962 15.3132 15.3137C15.4957 15.1311 15.5982 14.8836 15.5982 14.6255"
					stroke="#8D8D91"
					stroke-width="1.2"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
				<path
					d="M12.6793 15.5986H11.7061"
					stroke="#8D8D91"
					stroke-width="1.2"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
				<path
					d="M9.75936 15.5986H8.78613"
					stroke="#8D8D91"
					stroke-width="1.2"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
				<path
					d="M6.83944 15.5986H5.86621"
					stroke="#8D8D91"
					stroke-width="1.2"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
				<path
					d="M15.5986 12.6788V11.7056"
					stroke="#8D8D91"
					stroke-width="1.2"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
				<path
					d="M15.5986 9.75887V8.78564"
					stroke="#8D8D91"
					stroke-width="1.2"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
				<path
					d="M15.5986 6.83944V5.86621"
					stroke="#8D8D91"
					stroke-width="1.2"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg>
			{Math.floor(advert.propertySizeInSqtMtr)} m²
		</span>
		<span
			class="inline-flex items-center gap-x-1.5 rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600"
		>
			<svg
				width="19"
				height="15"
				viewBox="0 0 19 15"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M2.65234 7.05945V5.40688C2.65234 5.11469 2.76842 4.83447 2.97503 4.62786C3.18164 4.42125 3.46186 4.30518 3.75405 4.30518H8.16088C8.45307 4.30518 8.7333 4.42125 8.93991 4.62786C9.14652 4.83447 9.26259 5.11469 9.26259 5.40688V7.05945"
					stroke="#8D8D91"
					stroke-width="1.2"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
				<path
					d="M9.2627 7.05945V5.40688C9.2627 5.11469 9.37877 4.83447 9.58538 4.62786C9.79199 4.42125 10.0722 4.30518 10.3644 4.30518H14.7712C15.0634 4.30518 15.3436 4.42125 15.5503 4.62786C15.7569 4.83447 15.8729 5.11469 15.8729 5.40688V7.05945"
					stroke="#8D8D91"
					stroke-width="1.2"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
				<path
					d="M2.46894 7.05957H16.0567C16.4463 7.05957 16.8199 7.21433 17.0954 7.48981C17.3709 7.76529 17.5256 8.13893 17.5256 8.52851V12.0173H1V8.52851C1 8.13893 1.15476 7.76529 1.43024 7.48981C1.70572 7.21433 2.07936 7.05957 2.46894 7.05957V7.05957Z"
					stroke="#8D8D91"
					stroke-width="1.2"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
				<path
					d="M1 12.0171V14.2205"
					stroke="#8D8D91"
					stroke-width="1.2"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
				<path
					d="M17.5254 12.0171V14.2205"
					stroke="#8D8D91"
					stroke-width="1.2"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
				<path
					d="M15.8728 7.05939V2.10171C15.8728 1.80952 15.7568 1.52929 15.5502 1.32268C15.3435 1.11607 15.0633 1 14.7711 1H3.75405C3.46186 1 3.18164 1.11607 2.97503 1.32268C2.76842 1.52929 2.65234 1.80952 2.65234 2.10171V7.05939"
					stroke="#8D8D91"
					stroke-width="1.2"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg>

			{advert.propertyBedroomsCount}
		</span>
		<span
			class="inline-flex items-center gap-x-1.5 rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600"
		>
			<svg
				width="17"
				height="17"
				viewBox="0 0 17 17"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M8.89674 9.88379H15.8064L15.3694 12.5068C15.2158 13.4289 14.7401 14.2665 14.0268 14.8707C13.3136 15.4749 12.4091 15.8064 11.4744 15.8063H5.33202C4.39727 15.8064 3.4928 15.4749 2.77956 14.8707C2.06632 14.2665 1.59056 13.4289 1.43695 12.5068L1 9.88379H3.96128"
					stroke="#8D8D91"
					stroke-width="1.2"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
				<path
					d="M8.40286 13.8319H4.45448C4.32359 13.8319 4.19805 13.78 4.10549 13.6874C4.01294 13.5948 3.96094 13.4693 3.96094 13.3384V9.88358C3.96094 9.62178 4.06493 9.37071 4.25005 9.1856C4.43517 9.00048 4.68624 8.89648 4.94803 8.89648H7.90931C8.1711 8.89648 8.42217 9.00048 8.60729 9.1856C8.79241 9.37071 8.8964 9.62178 8.8964 9.88358V13.3384C8.8964 13.4693 8.8444 13.5948 8.75185 13.6874C8.65929 13.78 8.53375 13.8319 8.40286 13.8319Z"
					stroke="#8D8D91"
					stroke-width="1.2"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
				<path
					d="M10.8711 2.97419C10.8711 2.4506 11.0791 1.94846 11.4493 1.57823C11.8196 1.20799 12.3217 1 12.8453 1C13.3689 1 13.871 1.20799 14.2412 1.57823C14.6115 1.94846 14.8195 2.4506 14.8195 2.97419V9.88384"
					stroke="#8D8D91"
					stroke-width="1.2"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
				<path
					d="M8.89648 4.94831C8.89648 4.42472 9.10448 3.92258 9.47471 3.55235C9.84494 3.18212 10.3471 2.97412 10.8707 2.97412C11.3943 2.97412 11.8964 3.18212 12.2666 3.55235C12.6369 3.92258 12.8449 4.42472 12.8449 4.94831H8.89648Z"
					stroke="#8D8D91"
					stroke-width="1.2"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg>

			{advert.propertyBathroomsCount}
		</span>
	</div>
</a>
