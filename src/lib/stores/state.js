import { writable } from 'svelte/store';

export const state = writable({
	menuVisible: false,
	paths: [
		{ path: '/', name: 'Hem', target: '_self' },
		{ path: '/gasklockan', name: 'Schema gasklockan', target: '_self' },
		{ path: '/retorten', name: 'Schema retorten', target: '_self' },
		// { path: '/retorten', name: 'Retorten', target: '_self' },
		{ path: '/about', name: 'Om', target: '_self' },
		// { path: '/contact', name: 'Kontakt', target: '_self' },
		// { path: '/schedule', name: 'Schema', target: '_self' }
	],
	ticketLink: 'https://secure.tickster.com/sv/eyed05ag4hu0m4l/products',
});
