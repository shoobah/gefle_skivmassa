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
  import BerguvLogo from "$lib/images/bands/Berguv/Logga Vit.png";
  import Berguv from "$lib/images/bands/Berguv/Berguv Band.jpg";
  import SonsOfSin from "$lib/images/bands/SonsOfSin/Bild Sons of sin.jpg";
  import JunoPearl from "$lib/images/bands/JunoPearl/Juno Pearl - Bild.jpg";
  import Vypera from "$lib/images/bands/Vypera/Vypera promo.jpg";
  import Nonsa from "$lib/images/bands/Nonsa/Nonsa - Bild.jpg";
  import Band from "$lib/components/band.svelte";
</script>

<div class="container">
  <div class="bands">
    <div>
      <Band
        id="Skraeckoedlan"
        logo={SkreackoedlanLogo}
        image={Skreackoedlan}
        linkText="Skraeckoedlan spelar fredag 3:e maj"
      >
        <p>
          Norrköpingsbaserade Skreackoedlan har sedan starten 2009 levererat
          svängig, mörk och fuzzig stonerrock som gett eko över hela världen.
          Faktiskt även ut i den mörka världsrymden och vidare i galaxen. Snart
          kommer The Vermillion Sky, album nummer fyra och det firas såklart med
          turné, fest och gamman. I en galax inte allt för långt borta
          diskuteras släppet redan:
        </p>
        <p>
          “Alright, as your Captain I order you all, myself included, to stop
          with whatever you are doing. We are listening to this fourth album of
          theirs right now. What's it called, Aijk?”<br />
          “One sec… here we go. It's the… you're not gonna believe this, Captain.
          It's called The Vermillion Sky!”<br />
          “Holy Bumblebeast! No way? I guess some Northerners have better tastes
          than others then. Well come on, play it! And make it loud. Like Mech-loud.”<br
          />
          “Hold on, Captain. Looks like we have a message incoming.”<br />
          “...trol to… million…”
        </p>
        <p>Skraeckoedlan presenteras i samarbete med Blackbird Artists</p>
      </Band>
      <div class="divider"></div>
      <Band
        id="Xorsist"
        logo={XorsistLogo}
        image={Xorsist}
        linkText="Xorsist spelar fredag 3:e maj"
      >
        <p>
          Xorsist från Stockholm spelar klassisk, svensk Death Metal. Trots att
          bandmedlemmarna inte ens var födda under den eran är bandet fast
          beslutna att föra denna stolta tradition vidare internationellt. Den 6
          oktober släppte XORSIST sitt nya album "At the Somber Steps to
          Serenity" genom det klassiska amerikanska skivbolaget Prosthetic
          Records, och skivan har producerats av gudfadern himself, Mr Tomas
          Skogsberg. HM-2:or och rens! SVT:s Per Sinding-Larsen om bandet:
          ”Xorsist är den nya generationens svenska dödsmetall!”.
        </p>
        <p>Xorsist presenteras i samarbete med Republic 66.</p>
      </Band>
      <div class="divider"></div>
      <Band
        id="Helga"
        logo={HelgaLogo}
        image={Helga}
        linkText="Helga spelar fredag 3:e maj"
      >
        <p>
          Med musik starkt präglad av körarrangemang, folkmusik och progressiv
          metal vandrar den dalabördiga och tidigare soloartisten Helga, genom
          de täta skogarna, ackompanjerad av fyra York-baserade musiker.
          Filmiskt, drömskt och vackert samtidigt kompromisslöst, tungt och
          tekniskt.
        </p>
        <p>
          Texterna är skrivna på både engelska och svenska, och just språket är
          viktigt för låtskrivare och frontperson Helga Gabriel. – ”Ibland går
          det inte att översätta från svenskan utan att det känns som ett svek
          mot var låten kommer ifrån”, säger Helga.
        </p>
        <p>Helga presenteras i samarbete med Doomstar Bookings.</p>
        <p>&nbsp;</p>
      </Band>
      <div class="divider"></div>
      <Band
        id="Beardfish"
        logo={BeardfishLogo}
        image={Beardfish}
        linkText="Beardfish spelar lördag 4:e maj"
      >
        <p>
          Gävlebandet Beardfish har sedan starten 2001 levererat flertalet album
          med delikat progressiv rock. De turnerade flitigt i stora delar av
          Europa, USA och Sydamerika men valde efter albumet ”+4626 COMFORTZONE”
          att lägga ner bandet 2016.
        </p>
        <p>
          Sex år senare, alltså 2022, väcktes ändå bandet till liv igen. Rikard
          hade skrivit nya låtar och de andades Beardfish rätt igenom. Efter
          världshistoriens kortaste överläggning med övriga i bandet, ser vi
          alltså åter Beardfish på livescenerna igen! En ny skiva spelas in i
          detta nu och innan de beger sig till We Love Rock- festivalen i Norge
          och Night of the Progg i Tyskland ses de på Gefle Skivmässas scen
          under lördagen 4 maj. Räkna med ett spelsuget band, full med ny energi
          och nya låtar.
        </p>
        <p>
          Beardfish är Rikard Sjöblom, David Zackrison, Robert Hansen och Magnus
          Östgren.
        </p>
        <p>&nbsp;</p>
      </Band>
      <div class="divider"></div>
      <Band
        id="SienaRoot"
        logo={SienaRootLogo}
        image={SienaRoot}
        linkText="SienaRoot spelar lördag 4:e maj"
      >
        <p>
          Siena Root började redan på sent 90-tal att ge konserter i
          Stockholmsområdet och 2003 spelades debutalbumet in. Detta var en tid
          då många kastade sina gamla vinylsamlingar och ställde sina
          skivspelare på vinden. Ända från start strävade Siena Root efter att
          förfina det analoga musikskapandet. Med sju album i bagaget anses
          bandet idag vara pionjärer inom samtida root rock. Bandet har delat
          scen med alltifrån legender som Deep Purple och Ten Year After till
          samtida band inom scenen som Blues Pills, All Them Witches och
          Kadavar.
        </p>
        <p>
          Konserterna är kompromisslösa på alla sätt, alltifrån att ta med all
          den tunga vintageutrustningen som de flesta band saknar passion att få
          med sig på scen till det att ingen konsert är den andra lik då bandet
          ständigt tänjer på de musikaliska gränserna och förnyar sig. Det
          enorma engagemanget för att ta den klassiska rocken till scenen får
          Siena Root att stå ut från mängden.
        </p>
        <p>
          Den turnerande grunden med gitarr, sång, orgel, bas och trummor är Sam
          Riffer, Love H Forsberg, Johan Borgström och Zubaida Solid.
        </p>
        <p>Siena Root presenteras i samarbete med Walk On Agency.</p>
        <p>&nbsp;</p>
      </Band>

      <div class="divider"></div>
      <Band
        id="Orkan"
        logo={OrkanLogo}
        image={Orkan}
        linkText="Orkan spelar lördag 4:e maj"
      >
        <p>
          Ett av de mest spännande och starkast lysande namnen inom den svenska
          rockscenen just nu är proggkvintetten Orkan. Bandet berättar om
          systemets orättvisor, samhällets hänsynslöshet och naturens motstånd
          och hämnd, allt medan förstärkarna skriker och publiken jublar.
        </p>
        <p>
          Orkans koncept är tveklöst inspirerat av 70-talets svenska politiska
          proggrörelse, men bandet är knappast något nostalgiprojekt. Medan den
          ena foten vilar i arvet från proggen står den andra stadigt placerad i
          samtiden med berörande och insiktsfulla låttexter, vilka uppmuntrar
          till solidaritet och eftertänksamhet.
        </p>
      </Band>
      <div class="divider"></div>
      <Band
        id="Berguv"
        logo={BerguvLogo}
        image={Berguv}
        linkText="Berguv spelar lördag 4:e maj"
      >
        <p>
          Med ”mörk rock från Gävletrakten” som mantra föddes 2019 idén till
          Berguv. Tanken var från början att göra något liknande The Sounds, men
          efter att ha skapat låten Måla hela världen svart blev det uppenbart
          att soundet för tankarna till ett ”rockigt Kent”.
        </p>
        <p>
          Berguv är - med sina tunga riff, ledsna melodier och texter förankrade
          i verkliga händelser och situationer - sin egen varelse.
        </p>
        <p>
          Ett självbetitlat album gavs ut 2021 via digitala plattformar och i
          dagsläget pågår färdigställandet av ett uppföljande album. <br />
          Förväntat släpp 2024.
        </p>
        <p>Berguv presenteras i samarbete med Bilda.</p>
        <p>&nbsp;</p>
      </Band>
      <div class="divider"></div>
      <Band
        id="SonsOfSin"
        image={SonsOfSin}
        linkText="Sons of sin spelar lördag 4:e maj kl 15:00 på scen Retorten"
      >
        <p>
          Sons of Sin är ett coverband från Hudiksvall som alltid utlovar en
          ordentlig show på scenen!
        </p>
        <p>
          Även om inte alla covers ursprungligen är rocklåtar får de sig absolut
          en skitigare touch när Sons of Sin lagt vantarna på dem. Ett
          partyrockband med attityd och spelglädje som är svårmatchad.
        </p>
        <p>
          Sons of Sin presenteras av Studieförbundet Vuxenskolan och
          Folkbildningsforum. Scen retorten
        </p>
      </Band>
      <div class="divider"></div>
      <Band
        id="JunoPearl"
        image={JunoPearl}
        linkText="Juno Pearl spelar lördag 4:e maj kl 16:00 på scen Retorten"
      >
        <p>
          Från Gävle kommer Juno Pearl, ett indie-rock band med dramatiska
          texter och härliga melodier.
        </p>
        <p>
          Juno Pearl presenteras av ABF Gästrikebygden och Folkbildningsforum
        </p>
      </Band>
      <div class="divider"></div>
      <Band
        id="Nonsa"
        image={Nonsa}
        linkText="Nonsa spelar lördag 4:e maj kl 17:00 på scen Retorten"
      >
        <p>
          Att sammanfatta soundet av Nonsa är omöjligt. Enligt egen utsaga har
          de en fetisch för snygga skjortor, surfrock och Simon Sundkvist.
        </p>
        <p>Deras låtar är som nyskrapade rutor på en Volvo.</p>
        <p>Nonsa presenteras av ABF Gästrikebygden och Folkbildningsforum</p>
      </Band>
      <div class="divider"></div>
      <Band
        id="Vypera"
        image={Vypera}
        linkText="Vypera spelar lördag 4:e maj kl 18:00 på scen Retorten"
      >
        <p>
          Vypera vill få lyssnaren att minnas det glada 80-talets blandband,
          inspelade från radioprogrammet Rockbox.
        </p>
        <p>
          Under en tid när pengar inte styrde utan allting handlade om bra låtar
          och snygga refränger. Det var därför man kunde höra band som Icon,
        </p>
        <p>
          Wasp, Triumph, Rainbow och mycket mer därtill under ett och samma
          avsnitt. Det är därifrån Sandvikens Vypera hämtar sin inspiration.
        </p>
        <p>
          Från lika delar hårda som melodiösa gitarrer krönta av snygga solon
          och allsångsvänliga refränger som gjorda att sjunga med i.
        </p>
        <p>Vypera presenteras av Studiefrämjandet och Folkbildningsforum</p>
      </Band>
      <div class="playlists">
        <h1>Lyssna på årets band</h1>
        <iframe
          title="Spotify playlist"
          src="https://open.spotify.com/embed/playlist/2ImcmB8WX5w3reer47ICJA?utm_source=generator"
          height="450"
          frameBorder="0"
          allowfullscreen="true"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
        <iframe
          title="Apple Music playlist"
          allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
          frameborder="0"
          height="450"
          sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
          src="https://embed.music.apple.com/se/playlist/gefle-skivm%C3%A4ssa-2024/pl.u-zPyLl9Rux8V5p4?l=en-GB"
        ></iframe>
      </div>
    </div>
  </div>
</div>

<style>
  .divider {
    margin: 20px 0;
    border-bottom: 1px solid var(--purple);
  }

  iframe {
    padding: 1em;
    max-width: 100%;
    width: 100%;
    overflow: hidden;
    border-radius: 10px;
  }
  .container {
    display: grid;
    gap: 10px;
    grid-template-rows: 30px auto;
    height: 100%;
  }
</style>
