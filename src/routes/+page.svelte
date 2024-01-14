<script>
  import { state } from '$lib/stores/state';
  import { onMount } from 'svelte';
  import Countdown from '$lib/components/countdown.svelte';
  import startimage from '$lib/images/Webbpic 4.jpg';
  import startimageMobile from '$lib/images/Webbpic standing.jpg';
  import Bildalogo from '$lib/images/icons/Bildalogo.svelte';
  import ticketButton from '$lib/images/icons/ticketbutton.png';
  import gasklockorna from '$lib/images/icons/gasklockorna loggo.png';
  import BBALogo from '$lib/images/icons/BBAlogowhite.png';
  import WoALogo from '$lib/icons/walk on agency_white.png';
  import Republic66Logo from '$lib/images/icons/Rep66_logo.png';

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
        <img src={startimageMobile} alt="Poster" />
      {:else}
        <img src={startimage} alt="Poster" />
      {/if}
    </a>
  </div>
  <div>
    <a href={$state.ticketLink} target="_blank">
      <img class="ticketButton" src={ticketButton} alt="Köp biljett" />
    </a>
  </div>
  <div class="logos-content">
    <div>
      <img src="/icons/Sounds_Fair_vit.png" alt="Blackbird Artists" />
    </div>
    <div>
      <a href="https://www.gavle.se/gasklockorna" target="_blank" rel="noreferrer">
        <img src={gasklockorna} alt="Gasklockorna" />
      </a>
    </div>
    <div>
      <a href="https://www.bilda.nu/" target="_blank" rel="noreferrer">
        <Bildalogo />
      </a>
    </div>
  </div>
  <div class="logos-content">
    <div>
      <img src={BBALogo} alt="Blackbird Artists" />
    </div>
    <div>
      <a href="https://www.republic66.com/projekt" target="_blank" rel="noreferrer">
        <img src={Republic66Logo} alt="Republic 66" />
      </a>
    </div>
    <div>
      <a href="https://www.walkonagency.com/" target="_blank" rel="noreferrer">
        <img src={WoALogo} alt="Walk On Agency" />
      </a>
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
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    justify-items: center;
    align-items: center;
    width: 50vw;
    justify-items: center;
  }

  .logos-content img,
  .logos-content svg {
    transition: filter 0.2s ease-in-out;
    filter: brightness(0.6);
  }

  .logos-content img:hover,
  .logos-content svg:hover {
    filter: brightness(1);
  }

  .logos-content img,
  .logos-content svg {
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

    .logos-content img,
    .logos-content svg {
      height: 30px;
    }
  }
</style>
