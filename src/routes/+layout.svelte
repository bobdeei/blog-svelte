<script lang="ts">
	import { onMount } from 'svelte';
	import classnames from 'classnames';

	import { Header, Footer } from '$lib/components';

	import { theme } from '$lib/stores';
	$theme === 'dark';

	import '../styles/app.css';

	onMount(() => {
		// On page load or when changing themes, best to add inline in `head` to avoid FOUC
		// if (
		// 	localStorage.theme === 'dark' ||
		// 	(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
		// ) {
		// 	document.documentElement.classList.add('dark');
		// } else {
		// 	document.documentElement.classList.remove('dark');
		// }
		// Whenever the user explicitly chooses to respect the OS preference
		// localStorage.removeItem('theme');
	});
</script>

<div class={classnames($theme === 'dark' && 'dark')}>
	<div class="md:layout-px bg-gray-50 dark:bg-black">
		<div
			class="layout-basic space-y-8 border-x bg-white dark:border-neutral-dark-border dark:bg-neutral-dark md:space-y-16"
		>
			<Header />

			<main>
				<slot />
			</main>

			<Footer />
		</div>
	</div>
</div>
