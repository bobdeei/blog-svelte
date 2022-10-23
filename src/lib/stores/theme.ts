import { writable } from 'svelte/store';

const { subscribe, update } = writable<'light' | 'dark'>('dark');

export default {
	subscribe,
	toggleTheme: () =>
		update((state) => {
			if (state === 'light') {
				return (localStorage.theme = 'dark');
			}

			return (localStorage.theme = 'light');
		})
};
