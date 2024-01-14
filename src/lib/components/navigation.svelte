<script>
  import { page } from '$app/stores';
  import { state } from '$lib/stores/state';
  import ticketbutton from '$lib/images/icons/ticketbutton.png';
</script>

<nav>
  {#each $state.paths as path}
    <a
      data-sveltekit-preload-code="eager"
      data-sveltekit-preload-data
      class:active={$page.url.pathname === path.path}
      href={path.path}
      target={path.target}>{path.name}</a
    >
  {/each}
  <a href={$state.ticketLink} target="_blank">
    <img class="ticket" src={ticketbutton} alt="Köp biljett" />
  </a>
</nav>

<style>
  nav {
    background-color: var(--menu-background);
    color: var(--white);
    font-size: 2em;
    font-family: 'Saira', sans-serif;
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

  .ticket {
    height: 1.2em;
    margin-top: 10px
  }
</style>
