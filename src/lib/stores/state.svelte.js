export const appState = $state({
  menuVisible: false,
  paths: [
    { path: "/", name: "Hem", target: "_self" },
    // { path: "/lineup", name: "Lineup", target: "_self" },
    // { path: "/about", name: "Om", target: "_self" },
    { path: "/form", name: "Anmälan", target: "_self" },
    { path: "/medlem", name: "Medlem", target: "_self" },
    { path: "/contact", name: "Kontakt", target: "_self" },
  ],
  ticketLink: "https://secure.tickster.com/sv/3njtrxtu52x4yla/products",
});
