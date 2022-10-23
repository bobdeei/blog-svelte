<script lang="ts">
	import { page } from '$app/stores';

	import { navigation } from '$lib/constants';
</script>

<ul
	class="mx-auto hidden gap-8 rounded-full border px-6 py-2.5 dark:border-gray-700 dark:bg-slate-800 md:flex"
>
	{#each navigation as navItem}
		<li>
			<a
				class={$page.url.pathname === navItem.href ? 'text-emerald-400' : 'text-white'}
				href={navItem.href}
			>
				{navItem.text}
			</a>
		</li>
	{/each}
</ul>
