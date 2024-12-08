<script>
  import { page } from "$app/stores";
  import { slide } from "svelte/transition";
  import { state } from "$lib/stores/state.svelte";
  import ticketbutton from "$lib/images/icons/ticketbutton.png";
</script>

<ul transition:slide={{ duration: 100 }}>
  {#each state.paths as path}
    <li>
      <a
        data-sveltekit-preload-data
        class:active={$page.url.pathname === path.path}
        href={path.path}
        target={path.target}
      >
        <div>
          {path.name}
        </div>
      </a>
    </li>
  {/each}
  {#if state.ticketLink}
    <li>
      <a href={state.ticketLink} target="_blank">
        <img class="ticket" src={ticketbutton} alt="Köp biljett" />
      </a>
    </li>
  {/if}
</ul>

<style>
  ul a {
    font-stretch: expanded;
    text-transform: uppercase;
    text-decoration: none;
  }

  ul a:hover {
    transition: all 0.2s ease;
    color: var(--purple);
  }

  ul {
    z-index: 100;
    position: absolute;
    right: 50px;
    top: 0px;
    background-color: var(--menu-background);
    filter: brightness(1.2);
    list-style-type: none;
    list-style-position: outside;
    padding: 5px;
    box-shadow: 6px 10px 27px 0px rgba(0, 0, 0, 0.75);
  }

  .active {
    color: var(--yellow);
  }

  .ticket {
    height: 1.2em;
  }
</style>
