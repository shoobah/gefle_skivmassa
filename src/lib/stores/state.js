import { writable } from 'svelte/store';

export const state = writable({
  menuVisible: false,
  paths: [
    { path: '/', name: 'Hem', target: '_self' },
    { path: '/lineup', name: 'Lineup', target: '_self' },
    { path: '/about', name: 'Om', target: '_self' },
    { path: '/medlem', name: 'Medlem', target: '_self' },
    { path: '/contact', name: 'Kontakt', target: '_self' },
  ],
  ticketLink: 'https://billetto.se/e/gefle-skivmassa-biljetter-905937',
});
