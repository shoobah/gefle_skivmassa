<script>
  export let form;

  $: console.log('form', form);
</script>

<svelte:head>
  <meta name="description" content="Gefle Skivmässa. Anmälningsformulär" />
</svelte:head>

<div class="the-form">
  {#if form?.success === true}
    <div>
      <h2>Tack för din anmälan!</h2>
      <p>Vi har mottagit din anmälan och kommer att kontakta dig inom kort.</p>
      <a href="/">Tillbaka till startsidan</a>
    </div>
  {/if}
  {#if form?.success === false}
    <div>
      <h2>Något gick fel</h2>
      <a href="/">Tillbaka till startsidan</a>
    </div>
  {/if}
  {#if !form}
    <article>
      <h1>Anmälan till skivmässa lördag 4:e maj</h1>

      <p>
        Vad kul att du vill medverka på Gefle Skivmässa i maj! Nytt för i år är att vi utökar till en tvådagarsfest där
        skivmässan (som alltid) är på lördagen. Välkommen med din anmälan i formuläret nedan, för att sälja på Gefle
        Skivmässa 2024.
      </p>
      <p>
        Totalt finns 60 bord och vi tillämpar ”först till kvarn”-principen på våra bord. Faktura på hela beloppet
        skickas i början av 2024 och ska vara betald i god tid innan arrangemanget.
      </p>
      <p>
        Borden på Gefle Skivmässa kostar 350kr/st och de mäter 200x69 cm. Max antal bord/säljare är tre, dvs sex meter
        bord.
      </p>

      <h2>Varje bokad försäljare får, förutom bokad plats:</h2>
      <ul>
        <li>Kaffe och fikabröd vid ankomst/inlastning och påtår under hela dagen</li>
        <li>Konsertentré till skivmässans alla spelningar</li>
        <li>Rabatt på lunch/middag i vår personalmatsal som serverar grymt god mat. Välj mellan flera rätter</li>
        <li>En fantastisk skivmässa i en unik lokal – Stora Gasklockan i Gävle</li>
      </ul>
    </article>
    <div>
      <form method="POST">
        <label for="firstName">Förnamn</label>
        <input required name="firstName" type="text" placeholder="Förnamn" />
        <label for="lastName">Efternamn</label>
        <input required name="lastName" type="text" placeholder="Efternamn" />
        <label for="email">E-post</label>
        <input required name="email" type="email" placeholder="E-post" />
        <label for="phone">Telefon</label>
        <input required name="phone" type="tel" placeholder="Telefon" />
        <label for="address">Adress</label>
        <input required name="address" type="text" placeholder="Adress" />
        <label for="org">Person / Organisationsnummer</label>
        <input required name="org" type="text" placeholder="Person / Organisationsnummer" />
        <label for="numberOfTables">Antal bord</label>
        <select required name="numberOfTables" placeholder="Antal bord">
          <option value="1">1 bord</option>
          <option value="2">2 bord</option>
          <option value="3">3 bord</option>
        </select>
        <label for="comment">Kommentar</label>
        <textarea name="comment" placeholder="Kommentar" />
        <p>
          Genom att klicka på ”Skicka intresseanmälan” nedan godkänner du att Gefle Skivmässa får behandla dina
          personuppgifter för att kunna fakturera för din medverkan.
        </p>
        <button type="submit">Skicka intresseanmälan</button>
      </form>
    </div>
  {/if}
</div>

<style>
  .the-form {
    width: 50vw;
  }

  form {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 1em;
    width: 40vw;
    padding-bottom: 10px;
  }

  input,
  textarea,
  select {
    padding: 0.5em;
    border: 1px solid var(--border-color);
    border-radius: 0.5em;
  }

  button {
    justify-self: right;
    width: 20em;
    height: 3em;
    background-color: var(--yellow);
    border-radius: 8px;
    font-size: 1em;
    font-weight: bold;
    color: var(--black);
    cursor: pointer;

    box-shadow:
      rgba(217, 233, 80, 0.596) 0px 2px 4px,
      rgba(223, 226, 29, 0.3) 0px 7px 13px -3px,
      rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  }

  form button:active {
    box-shadow: rgba(217, 233, 80, 0.596) 0px 2px 4px;
  }

  @media (max-width: 888px) {
    .the-form {
      width: 90vw;
    }
  }
</style>
