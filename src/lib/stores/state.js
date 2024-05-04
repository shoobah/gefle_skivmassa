import { writable } from "svelte/store";

export const state = writable({
  menuVisible: false,
  paths: [
    { path: "/", name: "Hem", target: "_self" },
    { path: "/lineup", name: "Lineup", target: "_self" },
    { path: "/schedule", name: "Schema", target: "_self" },
    { path: "/about", name: "Om", target: "_self" },
    { path: "/volontar", name: "Volontär", target: "_self" },
    { path: "/medlem", name: "Medlem", target: "_self" },
    { path: "/contact", name: "Kontakt", target: "_self" },
  ],
  ticketLink:
    "https://billetto.se/e/gefle-skivmassa-biljetter-991697?utm_source=organiser&utm_medium=share&utm_campaign=copy_link&utm_content=991697",
});
