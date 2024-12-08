<script>
  import { state } from "$lib/stores/state.svelte";
  import startimage from "$lib/images/_PAS7578-Förbättrat-BR.jpg";
  import SoundsFairLogo from "$lib/images/icons/Sounds_Fair_vit.png";

  let mobile = false;

  $effect(() => {
    mobile = window.innerWidth < 888;
  });
</script>

<svelte:head>
  <meta name="description" content="Gefle Skivmässa. Startsida" />
</svelte:head>

<div class="page-content">
  <!-- <a href={$state.ticketLink} style="text-decoration: none;">
    <h1>BILJETTER</h1>
  </a> -->
  <div class="imagebox">
    <a href={state.ticketLink} target="_blank">
      {#if mobile}
        <img src={startimage} alt="Poster" />
      {:else}
        <img src={startimage} alt="Poster" />
      {/if}
    </a>
  </div>
  <div class="logos-content">
    <div>
      <img src={SoundsFairLogo} alt="Blackbird Artists" />
    </div>
  </div>
</div>

<style>
  .page-content {
    display: grid;
    justify-items: center;
    gap: 20px;
    padding-top: 20px;
  }
  a {
    color: var(--text-color);
    text-decoration: underline;
    font-size: 1.5rem;
  }

  .ticketButton {
    width: 20vw;
    max-width: 200px;
    min-width: 100px;
  }
  .imagebox {
    display: grid;
    grid-auto-flow: column;
    gap: 10px;
  }

  .imagebox img {
    width: 50vw;
  }

  .logos-content {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
    justify-items: end;
    align-items: center;
    width: 50vw;
  }

  .logos-content img {
    transition: filter 0.2s ease-in-out;
    filter: brightness(0.6);
  }

  .logos-content img:hover {
    filter: brightness(1);
  }

  .logos-content img {
    height: 40px;
  }
  @media (max-width: 888px) {
    .imagebox img {
      width: 80vw;
    }

    .logos-content {
      grid-template-columns: repeat(3, 1fr);
      width: 90vw;
    }

    .logos-content img {
      height: 30px;
    }
  }
</style>
