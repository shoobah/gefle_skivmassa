<script>
  import BoardImage from "$lib/images/sounds_fair_board.webp";
  import SoundsFairLogo from "$lib/images/icons/Sounds_Fair_vit.png";
</script>

<div>
  <div>
    <img class="logo" src={SoundsFairLogo} alt="Sounds Fair logo" />
  </div>
  <article>
    <h1>Stödmedlem</h1>
    <p></p>
    <h2>Vill du bli stödmedlem i den ideella Kulturföreningen Sounds Fair?</h2>
    <br />
    <p>
      Hjälp oss att växa och stöd den lokala arrangörskulturen genom att bli
      stödmedlem i föreningen Sounds Fair som arrangerar Gefle Skivmässa. Som
      stödmedlem läggs du till i vår e-postlista och får info om våra
      arrangemang. Vi siktar även på att komma med erbjudanden kring biljetter,
      merch och andra samarbeten längre fram.
    </p>
    <p>
      Som betalande stödmedlem ingår entré till skivmässan lördag 4 maj (värde
      50 kr) under eventet Gefle Skivmässa 3-4 maj.
    </p>
    <h2>För att bli stödmedlem</h2>
    <ol>
      <li>Swisha 100 kr till 123 696 60 06 och ange ditt namn vid betalning</li>
      <li>
        Skicka ett mail till: <a href="mailto:info@soundsfair.se"
          >info@soundsfair.se</a
        > och meddela oss att du betalat
      </li>
    </ol>
    <p>Vi lägger till din e-postadress i vår e-postlista</p>
    <h2>Kontakt och info</h2>
    <p>
      Kulturföreningen Sounds Fair<br />
      c/o Emil Alstermark<br />
      Stormgatan 76<br />
      802 75 Gävle<br />
      <br />
      Organisationsnummer: 802544-0911<br />
      BankGiro: 381-4480<br />
      E-post: <a href="mailto:info@soundsfair.se">info@soundsfair.se</a>
    </p>
    <h2>Styrelse</h2>
    <p>
      Ordförande: Anders Sjöberg<br />
      Ledamöter: Jerry van Kooten och Emil Alstermark <br />
      <br />
      Revisor: Lena-Mie Bernkert
    </p>
  </article>
  <div class="board_image">
    <div class="board">
      <img src={BoardImage} alt="Styrelsen" />
      <div class="text">
        <sub>Styrelsen: Emil, Anders, Jerry. Foto: Johan Öbrink</sub>
      </div>
    </div>
  </div>
</div>

<style>
  .board_image {
    display: grid;
    width: 50vw;
  }

  .board_image img {
    width: 100%;
  }
  .text {
    text-align: right;
  }

  sub {
    align-self: flex-end;
  }
  .logo {
    width: 30vw;
    max-width: 300px;
    margin: 10px auto;
    display: block;
  }
  .board {
    margin: 10px auto;
    display: block;
  }

  @media (max-width: 888px) {
    .logo {
      width: 50vw;
    }

    .board_image {
      width: 100vw;
    }

    .text {
      text-align: center;
    }
  }
</style>
