<script>
  import { appState } from "$lib/stores/state.svelte.js";
  import Map from "$lib/components/map.svelte";
</script>

<svelte:head>
  <meta name="description" content="Gefle Skivmässa. Kontakt" />
</svelte:head>

<div class="mx-auto w-full max-w-3xl px-4 md:w-1/2 md:px-0">
  <article>
    <h1>Kontakt</h1>
    Mail:<a href="mailto:info@soundsfair.com">info@soundsfair.com</a><br />
    Hemsida:
    <a href="https://www.soundsfair.se">www.soundsfair.se</a><br />
    Facebook:
    <a href="https://www.facebook.com/soundsfairgefle"
      >www.facebook.com/soundsfairgefle</a
    ><br />
    Instagram:
    <a href="https://www.instagram.com/soundsfair_kultur/"
      >www.instagram.com/soundsfair_kultur</a
    ><br />
    <br />
    <!-- <h2>Samarbetspartners</h2>
    <a
      href=" https://www.folkbildningsforum.se/"
      target="_blank"
      rel="noreferrer"
    >
      Folkbildningsforum
    </a><br />
    <a
      href="https://www.gavle.se/gasklockorna"
      target="_blank"
      rel="noreferrer"
    >
      Gasklockorna
    </a>
    <br /> -->
    <!-- <a href="https://www.bilda.nu/" target="_blank" rel="noreferrer"> Bilda </a>
    <Map /> -->
    <Map />
  </article>
</div>
