<script lang="ts">
	import { fade } from 'svelte/transition';
	import Icon from '@iconify/svelte';

	import { navigation } from '$lib/constants';

	// Props
	export let open: boolean;
	export let closeMenu: () => void;
</script>

{#if open}
	<div
		transition:fade={{ duration: 150 }}
		class="fixed inset-0 z-10 bg-black/50 px-4 py-8 md:hidden"
	>
		<div class="space-y-6 rounded-2xl bg-white px-6 py-8 dark:bg-gray-800">
			<div class="flex items-center justify-between">
				<span class="text-sm font-semibold text-gray-500 dark:text-gray-300">Navigation</span>
				<button class="text-gray-500" type="button" on:click={closeMenu}>
					<Icon icon="bi:x" width="28" />
				</button>
			</div>

			<ul class="divide-y divide-gray-100 dark:divide-gray-700">
				{#each navigation as navItem}
					<li class="transition-all duration-300 hover:pl-4">
						<a class="block py-2 dark:text-white/90" href={navItem.href} on:click={closeMenu}>
							{navItem.text}
						</a>
					</li>
				{/each}
			</ul>
		</div>
	</div>
{/if}
