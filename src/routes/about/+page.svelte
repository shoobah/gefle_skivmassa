<script>
  // @ts-nocheck
  import ImageFlipper from '$lib/components/image-flipper.svelte';
  import Img2016 from '$lib/images/About/Gefle Skivmässa 2016.jpg';
  import Img2017 from '$lib/images/About/Gefle Skivmässa 2017.jpg';
  import Img2018 from '$lib/images/About/Gefle Skivmässa 2018.jpg';
  import Img2019 from '$lib/images/About/Gefle Skivmässa 2019.jpg';
  import Img2020 from '$lib/images/About/Gefle Skivmässa 2020.jpg';
  import Img2023 from '$lib/images/About/Gefle Skivmässa 2023.jpg';
  import Efterfest2016 from '$lib/images/About/Efterfest 2016.jpg';
  import Efterfest2017 from '$lib/images/About/Efterfest 2017.jpg';
  import Efterfest2018 from '$lib/images/About/Efterfest 2018.jpg';
  import Efterfest2019 from '$lib/images/About/Efterfest 2019.jpg';
</script>

<svelte:head>
  <meta name="description" content="Gefle Skivmässa. Historik" />
</svelte:head>

<div>
  <article>
    <h1>Om oss</h1>
    <p>
      Gefle Skivmässa arrangeras numera av kulturföreningen Sounds Fair (org 802544-0911). Styrelsen består av Anders
      Sjöberg, Jerry van Kooten och Emil Alstermark som var med och startade skivmässan i Gasklockorna 2016. Vill du
      komma i kontakt med styrelsen, kanske har idéer på andra arrangemang eller bli medlem? Maila: <a
        href="mailto:info@soundsfair.se">info@soundsfair.se</a
      >
      Läs mer om alla våra arrangemang här nedan.
    </p>
  </article>
  <h2>Bilder från tidigare mässor.</h2>
  <h3>Fotografer: Erik Larsson & Anders Sjöberg</h3>
  <div class="carousel">
    <ImageFlipper/>
  </div>

  <article>
    <h1>Tidigare mässor</h1>
    <h2>2016</h2>
    <p>
      Gefle Skivmässa hölls för första gången 2 april 2016. Efterfrågan på en bra skivmässa fanns verkligen i Gävle och
      så en höstdag 2015 kläcktes iden. Initiativtagare och arrangörer var en grupp bibliotekarieanställda ihop med
      musikansvariga vid studieförbundet Medborgarskolan. Ursprungstanken var en musikloppis på Stadsbiblioteket, men
      utökades snart till en större mässa med livemusik. Och vilken livemusik sedan?<br />
    </p>
    <h3>Line up 2016</h3>
    <p>
      Blues Pills, Spiders, AKB, Jenny C, Fami och Oscar Löfstrand. På efterfesten som arrangerades av Gefle
      Hårdrocksklubb spelade Honeymoon Disease.<br />
      Logotyp Gefle Skivmässa 2016: Jens Räsänen
    </p>
    <div class="imagebox">
      <img src={Img2016} alt="Gefle Skivmässa 2016" />
    </div>
    <div class="imagebox">
      <img src={Efterfest2016} alt="Gefle Skivmässa, Efterfest 2016" />
    </div>
    <h2>2017</h2>
    <p>
      Efter ett fantastiskt första arrangemang växt e Gefle Skivmässa till 2017. En större servering, fler scener och en
      egen öl! Gefle Skivmässa samarbetade med det lokala bryggeriet Jädraöl och serverade både besökare och artister
      vår egna <span style="white-space:nowrap">mäss-öl</span>.<br />
    </p>
    <h3>Line up 2017</h3>
    <p>
      Anekdoten, MaidaVale, Good Harvest, Silver Devil, Adora Eye, Trio Safoura, Symbio och en reunion av The
      Pillisnorks. På efterfesten som arrangerades av Gefle Hårdrocksklubb spelade Döda Havet.<br />
      Logotyp Gefle Skivmässa 2017 (nuvarande): Rolfcarlwerner
    </p>
    <div class="imagebox">
      <img src={Img2017} alt="Gefle Skivmässa 2017" />
    </div>
    <div class="imagebox">
      <img src={Efterfest2017} alt="Gefle Skivmässa, Efterfest 2017" />
    </div>
    <h2>2018</h2>
    <p>
      Till 2018 års upplaga utökades samarbetet och våra vänner i TADC som arrangerar det grymma metalfestivalen Gefle
      Metal Festival, hoppade på tåget och tog hand om banden i stora gasklockan. Vid det här laget har ryktet om
      Sveriges bästa skivmässa* spridit sig, och vi blir tvinga de att neka flera sälja pga platsbrist.<br />
    </p>
    <h3>Line up 2018</h3>
    <p>
      Sator, Imperial State Electric, Besvärjelsen (som ersatte Thundermother på superkort varsel), Slim Vic, Lisa och
      Kroffe, PRO424, Axel E och Mondegreen.<br />
      Gävle bibliotek var fortfarande med som medarrangörer och på litteraturscenen mötte vi Anna Jörgensdotte, Annah Björk,
      Mattias Beijmo och Andreas Jakobsson. Konstutställningar av Linnea Strid, Viktor Hertz, Peter Endahl och Erik Axl Sundh.<br
      />
      På efterfesten som arrangerades av Gefle Hårdrocksklubb spelade Deville och SilverDevil.
    </p>
    <div class="imagebox">
      <img src={Img2018} alt="Gefle Skivmässa 2018" />
    </div>
    <div class="imagebox">
      <img src={Efterfest2018} alt="Gefle Skivmässa, Efterfest 2018" />
    </div>

    <h2>2019</h2>
    <p>
      Gefle Skivmässa 2019 är den mässa som fick avsluta en fin svit av årliga skivmässor i april. Med ännu fler säljare
      i kön, fler band än någonsin som ville spela och fler besökare än väntat var detta år en riktig succé. På
      efterfesten som arrangerades av Gefle Hårdrocksklubb spelade S.N.O och Crescendolls<br />
    </p>
    <h3>Line up 2019</h3>
    <p>
      Lucifer, Paatos, Svartanatt, Liondub, Anna Frank och Stenbrott. På litteraturscenen: Annah Björk, Anna - Charlotta
      Gunnarsson, Natalia Kazmierska och Martin Aagård.
    </p>
    <div class="imagebox">
      <img src={Img2019} alt="Gefle Skivmässa 2019" />
    </div>
    <div class="imagebox">
      <img src={Efterfest2019} alt="Gefle Skivmässa, Efterfest 2019" />
    </div>

    <h2>2020</h2>
    <p>2020 glömmer vi...</p>
    <div class="imagebox">
      <img src={Img2020} alt="Gefle Skivmässa 2020" />
    </div>

    <h2>2023</h2>
    <p>
      Det hann gå fyra år och komma en pandemi mellan upplaga fyra och fem. En del nyheter presenterades också detta år.
      Skivmässan och spelningarna bytte lokal med varandra. Skivmässan fick större utrymme i Stora gasklockan och
      spelningarna blev ännu mer intima och klubbkänslan infann sig verkligen. Efterfesten med skön musik och häng
      skedde på Musikhuset. En inofficiell förfest på Centralteatern med banden Fireside och Leiah var också en del av
      denna superhelg i musikens tecken.
    </p>
    <h3>Line up 2023</h3>
    <p></p>
    Witchcraft, Horndal, Vokonis, Children of the Sün, Nonsa, The Linesmen, Ryggrad, Lucille och Josephine Skoglund.
    <div class="imagebox">
      <img src={Img2023} alt="Gefle Skivmässa 2023" />
    </div>
  </article>
  <div class="section">
    <h1>Band som spelat på Gefle Skivmässa:</h1>
    <ul>
      <li>Blues Pills</li>
      <li>Spiders</li>
      <li>Anekdoten</li>
      <li>Paatos</li>
      <li>Imperial State Electric</li>
      <li>Sator</li>
      <li>Besvärjelsen</li>
      <li>MaidaVale</li>
      <li>Lucifer</li>
      <li>Good Harvest</li>
      <li>Svartanatt</li>
      <li>Silver Devil</li>
      <li>Slim Vic</li>
      <li>LionDub</li>
      <li>Symbio</li>
      <li>Anna Frank</li>
      <li>Stenbrott</li>
      <li>Lisa och Kroffe</li>
      <li>PRO424</li>
      <li>Axel E</li>
      <li>Adora Eye</li>
      <li>Trio Safoura</li>
      <li>Pillisnorks</li>
      <li>Mondegreen</li>
      <li>AKB</li>
      <li>Jenny C</li>
      <li>Fami</li>
      <li>Oscar Löfstrand.</li>
      <li>Children of the Sün</li>
      <li>Horndal</li>
      <li>Vokonis</li>
      <li>Witchcraft</li>
    </ul>

    Tror du att ni skulle passa på vår scen? Maila er intresseanmälan på&nbsp;
    <a href="mailto:info@soundsfair.se">info@soundsfair.se</a>
  </div>
</div>

<style>
  h2 {
    padding-top: 1em;
  }

  .imagebox {
    display: grid;
    grid-auto-flow: column;
    gap: 10px;
  }

  .imagebox img {
    max-width: 50vw;
  }

  .carousel {
    display: grid;
    justify-content: center;
    padding-bottom: 20px;
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
