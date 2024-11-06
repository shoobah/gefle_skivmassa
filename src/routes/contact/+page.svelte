<script>
  import { state } from "$lib/stores/state.js";
  import Map from "$lib/components/map.svelte";
</script>

<svelte:head>
  <meta name="description" content="Gefle Skivmässa. Kontakt" />
</svelte:head>

<div>
  <h1>Kontakt</h1>
  <article>
    Mail: <a href="mailto:info@soundsfair.com">info@soundsfair.com</a><br />
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
  </article>
</div>

<style>
  div {
    width: 50vw;
    padding-bottom: 20px;
  }

  @media (max-width: 820px) {
    div {
      width: 90vw;
    }
  }
</style>
