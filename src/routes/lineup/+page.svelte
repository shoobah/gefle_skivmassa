<script>
  import { state } from '$lib/stores/state';
</script>

<div>
  <article>
    <div class="imagebox">
      <img src="/images/Skraeckoedlan/logotype.png" alt="Skraeckoedlan logo" />
    </div>
    <p>
      <a href={$state.ticketLink} target="_blank"> Skraeckoedlan spelar fredag 3:e maj </a>
    </p>
    <p>
      Norrköpingsbaserade Skreackoedlan har sedan starten 2009 levererat svängig, mörk och fuzzig stonerrock som gett
      eko över hela världen. Faktiskt även ut i den mörka världsrymden och vidare i galaxen. Snart kommer The Vermillion
      Sky, album nummer fyra och det firas såklart med turné, fest och gamman. I en galax inte allt för långt borta
      diskuteras släppet redan:
    </p>
    <p>
      “Alright, as your Captain I order you all, myself included, to stop with whatever you are doing. We are listening
      to this fourth album of theirs right now. What's it called, Aijk?”<br />
      “One sec… here we go. It's the… you're not gonna believe this, Captain. It's called The Vermillion Sky!”<br />
      “Holy Bumblebeast! No way? I guess some Northerners have better tastes than others then. Well come on, play it! And
      make it loud. Like Mech-loud.”<br />
      “Hold on, Captain. Looks like we have a message incoming.”<br />
      “...trol to… million…”
    </p>
    <p>Skraeckoedlan presenteras i samarbete med Blackbird Artists</p>
    <div class="imagebox">
      <img src="/images/Skraeckoedlan/Skraeckoedlan-2-Foto Mats Ek.jpg" alt="Skraeckoedlan" />
    </div>
  </article>
  <div class="divider"></div>
  <article>
    <div class="imagebox">
      <img src="/images/Xorsist/Xorsist_logga_vit.png" alt="Xorsist logo" />
    </div>
    <p>
      <a href={$state.ticketLink} target="_blank"> Xorsist spelar fredag 3:e maj </a>
    </p>
    <p>
      Xorsist från Stockholm spelar klassisk, svensk Death Metal. Trots att bandmedlemmarna inte ens var födda under den
      eran är bandet fast beslutna att föra denna stolta tradition vidare internationellt. Den 6 oktober släppte XORSIST
      sitt nya album "At the Somber Steps to Serenity" genom det klassiska amerikanska skivbolaget Prosthetic Records,
      och skivan har producerats av gudfadern himself, Mr Tomas Skogsberg. HM-2:or och rens! SVT:s Per Sinding-Larsen om
      bandet: ”Xorsist är den nya generationens svenska dödsmetall!”.
    </p>
    <div class="imagebox">
      <img src="/images/Xorsist/xorsist_lindaflorin-39.jpg" alt="Xorsist" />
    </div>
  </article>
  <div class="divider"></div>
  <article>
    <div class="imagebox">
      <img src="/images/Beardfish/Logo.png" alt="Beardfish logo" />
    </div>
    <p>
      <a href={$state.ticketLink} target="_blank"> Beardfish spelar lördag 4:e maj </a>
    </p>
    <p>
      Gävlebandet Beardfish har sedan starten 2001 levererat flertalet album med delikat progressiv rock. De turnerade
      flitigt i stora delar av Europa, USA och Sydamerika men valde efter albumet ”+4626 COMFORTZONE” att lägga ner
      bandet 2016.
    </p>
    <p>
      Sex år senare, alltså 2022, väcktes ändå bandet till liv igen. Rikard hade skrivit nya låtar och de andades
      Beardfish rätt igenom. Efter världshistoriens kortaste överläggning med övriga i bandet, ser vi alltså åter
      Beardfish på livescenerna igen! En ny skiva spelas in i detta nu och innan de beger sig till We Love Rock-
      festivalen i Norge och Night of the Progg i Tyskland ses de på Gefle Skivmässas scen under lördagen 4 maj. Räkna
      med ett spelsuget band, full med ny energi och nya låtar.
    </p>
    <p>Beardfish är Rikard Sjöblom, David Zackrison, Robert Hansen och Magnus Östgren.</p>
    <p>&nbsp;</p>
    <div class="imagebox">
      <img src="/images/Beardfish/Beardfish 2023 in studio.jpg" alt="Beardfish" />
    </div>
  </article>
</div>

<style>
  img {
    border: none;
  }

  .imagebox {
    display: grid;
    grid-auto-flow: column;
    gap: 10px;
  }

  .imagebox img {
    max-width: 50vw;
  }

  .divider {
    margin: 20px 0;
    border-bottom: 2px solid var(--yellow);
  }

  @media (max-width: 888px) {
    .imagebox {
      grid-auto-flow: row;
    }

    .imagebox img {
      max-width: 80vw;
    }
  }
</style>
