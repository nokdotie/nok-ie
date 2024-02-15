<script>
	import ContainerCenterLarge from '$lib/components/containers/ContainerCenterLarge.svelte';
	import ContactRoute from '$routes/(app)/contact/Route';
	import PrivacyPolicyRoute from '$routes/(legal)/privacy-policy/Route';
	import TermsOfServiceRoute from '$routes/(legal)/terms-of-service/Route';
	import Image from '$lib/components/images/Image.svelte';
</script>

<div class="pt-[70px] md:pt-10 pb-10 border-t-neutral-400 border-t border-solid">
	<ContainerCenterLarge>
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
			</div>
		</div>
	</ContainerCenterLarge>
</div>
