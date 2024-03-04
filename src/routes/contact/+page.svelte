<script>
  import { onMount } from "svelte";
  import { state } from "$lib/stores/state.js";
  import Map from "$lib/components/map.svelte";

  onMount(() => {
    mapkit.init({
      authorizationCallback: function (done) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "/services/jwt");
        xhr.addEventListener("load", function () {
          done(this.responseText);
        });
        xhr.send();
      },
    });

    var Cupertino = new mapkit.CoordinateRegion(
      new mapkit.Coordinate(37.3316850890998, -122.030067374026),
      new mapkit.CoordinateSpan(0.167647972, 0.354985255)
    );
    var map = new mapkit.Map("map");
    map.region = Cupertino;
  });
</script>

<style>
  div {
    width: 50vw;
    padding-bottom: 20px;
  }

  #map {
    width: 100%;
    height: 600px;
  }

  @media (max-width: 820px) {
    div {
      width: 90vw;
    }
  }
</style>

<svelte:head>
  <meta name="description" content="Gefle Skivmässa. Kontakt" />
</svelte:head>

<div>
  <h1>Kontakt</h1>
  <article>
    Mail: <a href="mailto:info@soundsfair.com">info@soundsfair.com</a><br />
    Facebook:
    <a href="https://www.facebook.com/gefleskivmassa">www.facebook.com/gefleskivmassa</a><br />
    Instagram:
    <a href="https://www.instagram.com/gefleskivmassa">www.instagram.com/gefleskivmassa</a><br />
    <br />
    <h2>Samarbetspartners</h2>
    <a href=" https://www.folkbildningsforum.se/" target="_blank" rel="noreferrer"> Folkbildningsforum </a><br />
    <a href="https://www.gavle.se/gasklockorna" target="_blank" rel="noreferrer"> Gasklockorna </a>
    <br />
    <a href="https://www.bilda.nu/" target="_blank" rel="noreferrer"> Bilda </a>
    <Map />
    <div id="map"></div>
  </article>
</div>
