<script lang="ts">
  import Navigation from "./navigation.svelte";
  import MobileNavigation from "./mobile-navigation.svelte";
  import Sounds_Fair_vit_cirkel from "../images/icons/Sounds_Fair_vit_cirkel.png";
  let innerWidth = $state(0);
</script>

<svelte:window bind:innerWidth />

<!-- <a class="logo rotate" href="/">
  <img alt="gefle skivmässa logo" src={Sounds_Fair_vit_cirkel} />
</a> -->
<a class="logo rotate" href="/">
  <img
    alt="gefle skivmässa logo"
    src="/logos/GEFLE SKIVMÄSSA NEUTRAL_LOGOTYP_VIT_SVART.png"
  />
</a>

<div class="header">
  {#if innerWidth > 1500}
    <Navigation />
  {:else}
    <MobileNavigation />
  {/if}
  <div class="header-heading">
    <div>10 maj, Gasklockorna Gävle. Öppet kl 12-16</div>
  </div>
</div>

<style>
  .header {
    grid-area: header;
    display: grid;
    grid-template-rows: 1fr 1fr;
    height: 120px;
    width: 100vw;
    align-items: stretch;
    justify-items: stretch;
    gap: 0;
    user-select: none;
  }

  .header-heading {
    font-family: "Saira", sans-serif;
    font-size: 2em;
    font-weight: 700;
    color: var(--black);
    background-color: var(--white);
    text-transform: uppercase;
    display: grid;
    justify-content: center;
    align-content: center;
    border-bottom: solid 1px var(--black);
  }
  .logo {
    position: fixed;
    top: -40px;
    left: -40px;
    user-select: none;
    z-index: 1000;
  }
  .logo img {
    float: left;
    grid-area: sidebar;
    width: 300px;
    box-shadow: 0px -1px 26px 3px rgba(0, 0, 0, 0.75);
    border-radius: 50%;
  }

  @media (max-width: 888px) {
    .logo {
      top: -40px;
      left: -40px;
    }
    .logo img {
      width: 100px;
    }

    .header-heading {
      font-size: 1.5em;
      gap: 20px;
    }
  }

  .rotate {
    animation: rotation 30s infinite linear;
  }
  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }
</style>
