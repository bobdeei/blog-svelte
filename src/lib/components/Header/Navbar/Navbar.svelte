<script lang="ts">
	import Icon from '@iconify/svelte';

	import { theme } from '$lib/stores';
	import { routes } from '$lib/constants';

	import LargeScreenMenu from './LargeScreenMenu.svelte';
	import MobileMenu from './MobileMenu.svelte';

	// States
	let open = false;

	// Handlers
	const openMenu = () => (open = true);
	const closeMenu = () => (open = false);
</script>

<nav class="layout-x py-6">
	<div class="flex items-center gap-4">
		<a
			class="h-12 w-12 overflow-hidden rounded-full border-2 border-white shadow"
			href={routes.HOME.href}
		>
			<img class="h-full w-full object-cover" src="/avatar.png" alt="" />
		</a>

		<LargeScreenMenu />

		<button
			class="ml-auto inline-flex items-center gap-3 rounded-full border px-4 py-2.5 dark:border-gray-700 dark:bg-slate-800 dark:text-white dark:hover:border-gray-600 md:hidden"
			on:click={openMenu}
		>
			<span>Menu</span>
			<Icon icon="bx:chevron-down" width="16" />
		</button>

		<button
			class="inline-block rounded-full border px-4 py-2.5 text-gray-600 dark:border-gray-700 dark:bg-slate-800 dark:text-white dark:hover:border-gray-600"
			type="button"
			on:click={theme.toggleTheme}
		>
			<Icon
				class={$theme === 'dark' ? 'text-emerald-400' : ''}
				icon={$theme === 'light' ? 'bi:sun' : 'bi:moon'}
				width="20"
			/>
		</button>
	</div>

	<MobileMenu {open} {closeMenu} />
</nav>
