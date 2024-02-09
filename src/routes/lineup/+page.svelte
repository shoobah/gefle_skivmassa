<script>
  import { state } from "$lib/stores/state";

  import SkreackoedlanLogo from "$lib/images/bands/Skraeckoedlan/logotype.png";
  import Skreackoedlan from "$lib/images/bands/Skraeckoedlan/Skraeckoedlan-2-Foto Mats Ek.jpg";
  import XorsistLogo from "$lib/images/bands/Xorsist/Xorsist_logga_vit.png";
  import Xorsist from "$lib/images/bands/Xorsist/xorsist_lindaflorin-39.jpg";
  import BeardfishLogo from "$lib/images/bands/Beardfish/Logo.png";
  import Beardfish from "$lib/images/bands/Beardfish/Beardfish 2023 in studio.jpg";
  import SienaRootLogo from "$lib/images/bands/SienaRoot/SienaRoot_Logo vit.png";
  import SienaRoot from "$lib/images/bands/SienaRoot/Siena Root - Promobild 2022 44.jpeg";
  import HelgaLogo from "$lib/images/bands/Helga/HELGA Logo white.png";
  import Helga from "$lib/images/bands/Helga/HELGA-EsterSegarra-3443.jpg";
  import OrkanLogo from "$lib/images/bands/Orkan/Orkan logga vit.png";
  import Orkan from "$lib/images/bands/Orkan/Orkan 1.jpg";
</script>

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
  }

  .divider {
    margin: 20px 0;
    border-bottom: 1px solid var(--purple);
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

<div>
  <div class="bandimages">
    <div class="logobox">
      <img src={SkreackoedlanLogo} alt="Skraeckoedlan logo" />
    </div>
    <div class="imagebox">
      <img src={Skreackoedlan} alt="Skraeckoedlan" />
    </div>
  </div>
  <article>
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
  </article>
  <div class="divider"></div>
  <div class="bandimages">
    <div class="logobox">
      <img src={XorsistLogo} alt="Xorsist logo" />
    </div>
    <div class="imagebox">
      <img src={Xorsist} alt="Xorsist" />
    </div>
  </div>
  <article>
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
    <p>Xorsist presenteras i samarbete med Republic 66.</p>
  </article>
  <div class="divider"></div>
  <div class="bandimages">
    <div class="logobox">
      <img src={HelgaLogo} alt="Helga logo" />
    </div>
    <div class="imagebox">
      <img src={Helga} alt="Helga" />
    </div>
  </div>
  <article>
    <p>
      <a href={$state.ticketLink} target="_blank"> Helga spelar fredag 3:e maj </a>
    </p>
    <p>
      Med musik starkt präglad av körarrangemang, folkmusik och progressiv metal vandrar den dalabördiga och tidigare
      soloartisten Helga, genom de täta skogarna, ackompanjerad av fyra York-baserade musiker. Filmiskt, drömskt och
      vackert samtidigt kompromisslöst, tungt och tekniskt.
    </p>
    <p>
      Texterna är skrivna på både engelska och svenska, och just språket är viktigt för låtskrivare och frontperson
      Helga Gabriel. – ”Ibland går det inte att översätta från svenskan utan att det känns som ett svek mot var låten
      kommer ifrån”, säger Helga.
    </p>
    <p>Helga presenteras i samarbete med Doomstar Bookings.</p>
    <p>&nbsp;</p>
  </article>
  <div class="divider"></div>
  <div class="bandimages">
    <div class="logobox">
      <img src={BeardfishLogo} alt="Beardfish logo" />
    </div>
    <div class="imagebox">
      <img src={Beardfish} alt="Beardfish" />
    </div>
  </div>
  <article>
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
  </article>
  <div class="divider"></div>
  <div class="bandimages">
    <div class="logobox">
      <img src={SienaRootLogo} alt="Siena Root logo" />
    </div>
    <div class="imagebox">
      <img src={SienaRoot} alt="Siena Root" />
    </div>
  </div>
  <article>
    <p>
      <a href={$state.ticketLink} target="_blank"> Siena Root spelar lördag 4:e maj </a>
    </p>
    <p>
      Siena Root började redan på sent 90-tal att ge konserter i Stockholmsområdet och 2003 spelades debutalbumet in.
      Detta var en tid då många kastade sina gamla vinylsamlingar och ställde sina skivspelare på vinden. Ända från
      start strävade Siena Root efter att förfina det analoga musikskapandet. Med sju album i bagaget anses bandet idag
      vara pionjärer inom samtida root rock. Bandet har delat scen med alltifrån legender som Deep Purple och Ten Year
      After till samtida band inom scenen som Blues Pills, All Them Witches och Kadavar.
    </p>
    <p>
      Konserterna är kompromisslösa på alla sätt, alltifrån att ta med all den tunga vintageutrustningen som de flesta
      band saknar passion att få med sig på scen till det att ingen konsert är den andra lik då bandet ständigt tänjer
      på de musikaliska gränserna och förnyar sig. Det enorma engagemanget för att ta den klassiska rocken till scenen
      får Siena Root att stå ut från mängden.
    </p>
    <p>
      Den turnerande grunden med gitarr, sång, orgel, bas och trummor är Sam Riffer, Love H Forsberg, Johan Borgström
      och Zubaida Solid.
    </p>
    <p>Siena Root presenteras i samarbete med Walk On Agency.</p>
    <p>&nbsp;</p>
  </article>
  <div class="divider"></div>
  <div class="bandimages">
    <div class="logobox">
      <img src={OrkanLogo} alt="Orkan logo" />
    </div>
    <div class="imagebox">
      <img src={Orkan} alt="Orkan" />
    </div>
  </div>
  <article>
    <p>
      <a href={$state.ticketLink} target="_blank">Orkan spelar lördag 4:e maj</a>
    </p>
    <p>
      Ett av de mest spännande och starkast lysande namnen inom den svenska rockscenen just nu är proggkvintetten Orkan.
      Bandet berättar om systemets orättvisor, samhällets hänsynslöshet och naturens motstånd och hämnd, allt medan
      förstärkarna skriker och publiken jublar.
    </p>
    <p>
      Orkans koncept är tveklöst inspirerat av 70-talets svenska politiska proggrörelse, men bandet är knappast något
      nostalgiprojekt. Medan den ena foten vilar i arvet från proggen står den andra stadigt placerad i samtiden med
      berörande och insiktsfulla låttexter, vilka uppmuntrar till solidaritet och eftertänksamhet.
    </p>
    <p>&nbsp;</p>
  </article>
</div>
