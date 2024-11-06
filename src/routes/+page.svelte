<script>
  import { state } from "$lib/stores/state";
  import { onMount } from "svelte";

  import startimage from "$lib/images/Webbpic-7.jpg";
  import startimageMobile from "$lib/images/staende-webb.jpg";
  import Bildalogo from "$lib/images/icons/Bildalogo.svelte";
  import ticketButton from "$lib/images/icons/ticketbutton.png";
  import gasklockorna from "$lib/images/icons/gasklockorna loggo.png";
  import BBALogo from "$lib/images/icons/BBAlogowhite.png";
  import WoALogo from "$lib/images/icons/walk on agency_white.png";
  import Republic66Logo from "$lib/images/icons/Rep66_logo.png";
  import SoundsFairLogo from "$lib/images/icons/Sounds_Fair_vit.png";
  import FolkbildningsforumLogo from "$lib/images/icons/Folkbildningsforum_Logo_Liggande.png";

  import Horndal from "$lib/images/EVENT.jpg";
  import Sodakill from "$lib/images/SODAKILL-PUNK.jpg";

  let mobile = false;

  onMount(() => {
    mobile = window.innerWidth < 888;
  });
</script>

<svelte:head>
  <meta name="description" content="Gefle Skivmässa. Startsida" />
</svelte:head>

<div class="page-content">
  <div class="imagebox">
    <a href={$state.ticketLink} target="_blank">
      {#if mobile}
        <img src={Horndal} alt="Poster" />
      {:else}
        <img src={Horndal} alt="Poster" />
      {/if}
    </a>
  </div>
  <div class="imagebox">
    <a href={$state.ticketLink} target="_blank">
      {#if mobile}
        <img src={Sodakill} alt="Poster" />
      {:else}
        <img src={Sodakill} alt="Poster" />
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
