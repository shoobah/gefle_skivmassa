<script>
  import { state } from '$lib/stores/state';
  import { fade } from 'svelte/transition';
  import { page } from '$app/stores';
  import DropDownMenu from './drop-down-menu.svelte';

  $: currentPage = $state.paths.find((path) => path.path === $page.url.pathname);
</script>

<nav>
  <span>{currentPage?.name}</span>
  <button in:fade on:click|stopPropagation={() => ($state.menuVisible = !$state.menuVisible)}>
    <img src="/icons/hamburger.svg" alt="menu" />
  </button>
  {#if $state.menuVisible}
    <DropDownMenu on:click={() => ($state.menuVisible = false)} />
  {/if}
</nav>

<style>
  nav {
    background-color: var(--menu-background);
    color: var(--white);
    font-family: 'Saira', sans-serif;
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
    font-family: 'Saira', sans-serif;
    font-weight: 700;
    font-size: 1em;
    cursor: pointer;
  }

  img {
    user-select: none;
    width: 30px;
  }
</style>
