<script>
  // @ts-nocheck
  import ImageFlipper from '$lib/components/image-flipper.svelte';
  const Img2016 = '/images/About/Gefle Skivmässa 2016.jpg?w=768&webp';
  const Img2017 = '/images/About/Gefle Skivmässa 2017.jpg?w=768&webp';
  const Img2018 = '/images/About/Gefle Skivmässa 2018.jpg?w=768&webp';
  const Img2019 = '/images/About/Gefle Skivmässa 2019.jpg?w=768&webp';
  const Img2020 = '/images/About/Gefle Skivmässa 2020.jpg?w=768&webp';
  const Img2023 = '/images/About/Gefle Skivmässa 2023.jpg?w=768&webp';
  const Efterfest2016 = '/images/About/Efterfest 2016.jpg?w=768&webp';
  const Efterfest2017 = '/images/About/Efterfest 2017.jpg?w=768&webp';
  const Efterfest2018 = '/images/About/Efterfest 2018.jpg?w=768&webp';
  const Efterfest2019 = '/images/About/Efterfest 2019.jpg?w=768&webp';

  const BluesPills = '/images/Carousel/2016 Blues Pills.jpg?w=1000&webp';
  const Mässa2016 = '/images/Carousel/2016 Mässa.jpg?w=1000&webp';
  const Spiders = '/images/Carousel/2016 Spiders.jpg?w=1000&webp';
  const Anekdoten = '/images/Carousel/2017 Anekdoten.jpg?w=1000&webp';
  const GoodHarvest = '/images/Carousel/2017 Good Harvest.jpg?w=1000&webp';
  const MaidaVale = '/images/Carousel/2017 MaidaVale.jpg?w=1000&webp';
  const Mässa2017_2 = '/images/Carousel/2017 Mässa 2.jpg?w=1000&webp';
  const Mässa2017 = '/images/Carousel/2017 Mässa.jpg?w=1000&webp';
  const Besvärjelsen = '/images/Carousel/2018 Besvärjelsen.jpg?w=1000&webp';
  const ImpreialStateElectric = '/images/Carousel/2018 Imperial state electric.jpg?w=1000&webp';
  const Mässa2018_2 = '/images/Carousel/2018 Mässa 2.jpg?w=1000&webp';
  const Mässa = '/images/Carousel/2018 Mässa.jpg?w=1000&webp';
  const Sator = '/images/Carousel/2018 Sator.jpg?w=1000&webp';
  const SlimVic = '/images/Carousel/2018 Slim Vic.jpg?w=1000&webp';
  const Liondub = '/images/Carousel/2019 Liondub.jpg?w=1000&webp';
  const Lucifer = '/images/Carousel/2019 Lucifer.jpg?w=1000&webp';
  const Mässa2019 = '/images/Carousel/2019 Mässa.jpg?w=1000&webp';
  const Merch = '/images/Carousel/2019 Merch.jpg?w=1000&webp';
  const Paatos2 = '/images/Carousel/2019 Paatos 2.jpg?w=1000&webp';
  const Paatos = '/images/Carousel/2019 Paatos.jpg?w=1000&webp';
  const Mässa2023 = '/images/Carousel/2023 Massa.jpg?w=1000&webp';
  const CotS = '/images/Carousel/2023 CotS.jpg?w=1000&webp';
  const Vokonis = '/images/Carousel/2023 Vokonis.jpg?w=1000&webp';
  const Horndal = '/images/Carousel/2023 Horndal.jpg?w=1000&webp';
  const Witchcraft = '/images/Carousel/2023 Witchcraft.jpg?w=1000&webp';

  const imageList = [
    { src: Mässa2023, alt: 'Mässa 2023' },
    { src: CotS, alt: 'Children of the Sün 2023' },
    { src: Vokonis, alt: 'Vokonis 2023' },
    { src: Horndal, alt: 'Horndal 2023' },
    { src: Witchcraft, alt: 'Witchcraft 2023' },
    { src: Mässa2019, alt: 'Mässa 2019' },
    { src: MaidaVale, alt: 'MaidaVale' },
    { src: Mässa2017_2, alt: 'Mässa 2017' },
    { src: Mässa2017, alt: 'Mässa 2017' },
    { src: Besvärjelsen, alt: 'Besvärjelsen' },
    { src: Liondub, alt: 'Liondub' },
    { src: Paatos, alt: 'Paatos' },
    { src: SlimVic, alt: 'Slim Vic' },
    { src: Sator, alt: 'Sator' },
    { src: Mässa, alt: 'Mässa 2018' },
    { src: Lucifer, alt: 'Lucifer' },
    { src: Mässa2018_2, alt: 'Mässa 2018' },
    { src: ImpreialStateElectric, alt: 'Impreial State Electric' },
    { src: Merch, alt: 'Merch' },
    { src: Paatos2, alt: 'Paatos' },
    { src: Mässa, alt: 'Mässa' },
    { src: GoodHarvest, alt: 'Good Harvest' },
    { src: Anekdoten, alt: 'Anekdoten' },
    { src: Spiders, alt: 'Spiders' },
    { src: Mässa2016, alt: 'Mässa 2016' },
    { src: BluesPills, alt: 'Blues Pills' },
  ];
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
    <ImageFlipper {imageList} interval={3000} size={1024} arrows ar={0.666} />
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
