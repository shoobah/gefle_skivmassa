<script>
  import { page } from "$app/stores";
  import { appState } from "$lib/stores/state.svelte";
</script>

<nav>
  {#each appState.paths as path}
    <a class:active={$page.url.pathname === path.path} href={path.path}
      >{path.name}</a
    >
  {/each}
</nav>

<style>
  nav {
    background-color: var(--menu-background);
    color: var(--white);
    font-size: 2em;
    font-family: "Saira", sans-serif;
    font-weight: 700;
    width: 100vw;
    display: grid;
    grid-auto-flow: column;
    justify-items: center;
    grid-gap: 40px;
    justify-items: center;
    align-items: center;
    justify-content: center;
  }

  nav a {
    font-stretch: expanded;
    text-transform: uppercase;
    text-decoration: none;
    transition: all 0.5s ease-in-out;
    color: var(--white);
    filter: brihtness(0.5);
  }

  nav a:hover {
    color: var(--yellow);
    filter: brihtness(1);
  }

  .active {
    color: var(--yellow);
  }

  /* .ticket {
    height: 1.2em;
    margin-top: 10px;
  } */
</style>
