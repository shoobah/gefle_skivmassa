<script lang="ts">
  import { state } from "$lib/stores/state";
  export let id: string;
  export let logo: string = "";
  export let image: string;
  export let linkText: string;
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
    <a href={$state.ticketLink} target="_blank">
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
</style>
