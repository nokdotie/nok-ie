<script>
	import ContainerCenterLarge from '$lib/components/containers/ContainerCenterLarge.svelte';
	import ContactRoute from '$routes/(app)/contact/Route';
	import PrivacyPolicyRoute from '$routes/(legal)/privacy-policy/Route';
	import TermsOfServiceRoute from '$routes/(legal)/terms-of-service/Route';
	import Image from '$lib/components/images/Image.svelte';
	import { Counties } from '$lib/counties/Counties';
	import CountyPropertiesRoute from '$routes/(app)/counties/[identifier]/properties/Route';
	import CopyrightProtectionAndInfringementRoute from '$routes/(legal)/copyright-protection-and-infringement/Route';
</script>

<div class="pt-[70px] md:pt-10 pb-10 border-t-neutral-400 border-t border-solid">
	<ContainerCenterLarge>
		<div class="mb-12">
			<h4 class="text-neutral-800 text-lg md:text-xl font-bold leading-[1.4em] mb-8 md:mb-10">
				Counties
			</h4>
			<div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-5">
				{#each Counties.all as county}
					<a
						href={CountyPropertiesRoute(county.identifier, null)}
						class="text-neutral-700 text-base font-medium leading-[1.125em] transition duration-300 hover:text-primary"
						>{county.name}</a
					>
				{/each}
			</div>
		</div>

		<div class="bg-neutral-400 h-[1px] w-full my-12 sm:my-14 md:my-[67px] lg:my-20" />

		<div class="flex flex-col md:flex-row justify-between items-center">
			<a href="/" class="flex items-center"
				><Image src="/images/logo.svg" alt="Nok.ie - Logo" class="h-[40px]" /><span
					class="transition duration-300 text-neutral-800/90 group-hover:text-neutral-800 text-2xl font-bold leading-[1.667em]"
					>Nok.ie</span
				>
			</a>

			<div
				class="text-neutral-600 text-center font-medium leading-[1.667em] mx-0 md:ml-5 md:mr-0 pt-[17px] md:pt-0"
			>
				Copyright © Nok.ie | <a
					href={ContactRoute()}
					target="_blank"
					class="transition duration-300 text-neutral-800 hover:text-primary">Contact</a
				>
				-
				<a
					href={PrivacyPolicyRoute()}
					target="_blank"
					class="transition duration-300 text-neutral-800 hover:text-primary">Privacy Policy</a
				>
				-
				<a
					href={TermsOfServiceRoute()}
					target="_blank"
					class="transition duration-300 text-neutral-800 hover:text-primary">Terms of Service</a
				>
				-
				<a
					href={CopyrightProtectionAndInfringementRoute()}
					target="_blank"
					class="transition duration-300 text-neutral-800 hover:text-primary">Copyright</a
				>
			</div>
		</div>
	</ContainerCenterLarge>
</div>
