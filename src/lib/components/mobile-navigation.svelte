<script>
  import { appState } from "$lib/stores/state.svelte";
  import { fade } from "svelte/transition";
  import { page } from "$app/stores";
  import DropDownMenu from "./drop-down-menu.svelte";
  import hamburger from "$lib/images/icons/hamburger.svg";

  let currentPage = $derived(
    appState.paths.find((path) => path.path === $page.url.pathname),
  );
</script>

<nav>
  <span>{currentPage?.name}</span>
  <button
    in:fade
    onclick={(e) => {
      appState.menuVisible = !appState.menuVisible;
      e.stopPropagation();
    }}
  >
    <img src={hamburger} alt="menu" />
  </button>
  {#if appState.menuVisible}
    <DropDownMenu on:click={() => (appState.menuVisible = false)} />
  {/if}
</nav>

<style>
  nav {
    background-color: var(--menu-background);
    color: var(--white);
    font-family: "Saira", sans-serif;
    font-weight: 700;
    font-size: 2em;
    display: grid;
    grid-auto-flow: column;
    align-items: center;
    justify-content: end;
    padding-right: 20px;
  }

  button {
    background-color: transparent;
    border: none;
    color: var(--white);
    font-family: "Saira", sans-serif;
    font-weight: 700;
    font-size: 1em;
    cursor: pointer;
  }

  img {
    user-select: none;
    width: 30px;
  }
</style>
