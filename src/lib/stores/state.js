import { writable } from 'svelte/store';

export const state = writable({
  menuVisible: false,
  paths: [
    { path: '/', name: 'Hem', target: '_self' },
    { path: '/form', name: 'Sälj', target: '_self' },
    { path: '/about', name: 'Om', target: '_self' },
    { path: '/contact', name: 'Kontakt', target: '_self' },
  ],
  ticketLink: 'https://billetto.se/users/gasklockorna-gavle',
  //TODO: Ändra från tickster.
});
