<script lang="ts">
  import { appState } from "$lib/stores/state.svelte";

  const { id, logo = "", image, linkText } = $props();
</script>

<div class="bandimages" {id}>
  {#if logo}
    <div class="logobox">
      <img src={logo} alt={id + " logo"} />
    </div>
  {/if}
  <div class="imagebox">
    <img src={image} alt={id} />
  </div>
</div>
<article>
  <p>
    <a href={appState.ticketLink} target="_blank">
      {linkText}
    </a>
  </p>
  <slot />
</article>

<style>
  img {
    border: none;
    width: 35vw;
  }

  .bandimages {
    display: grid;
    grid-auto-flow: column;
    gap: 10px;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 888px) {
    .bandimages {
      display: grid;
      grid-auto-flow: row;
      gap: 10px;
      align-items: center;
    }
    img {
      width: 100%;
    }
    .imagebox,
    .logobox {
      grid-auto-flow: row;
    }

    .imagebox img,
    .logobox img {
      max-width: 100%;
    }
  }
</style>
