<script>
  export let form;

  $: console.log("form", form);
</script>

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
  textarea {
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

<svelte:head>
  <meta name="description" content="Gefle Skivmässa. Anmälningsformulär" />
</svelte:head>

<div class="the-form">
  {#if form?.success}
    <div>
      <h2>Tack för din anmälan!</h2>
      <p>Vi har mottagit din anmälan och kommer att kontakta dig inom kort.</p>
      <a href="/">Tillbaka till startsidan</a>
    </div>
  {:else}
    <article>
      <h1>Anmälan</h1>
      <p>Vill du bidra till arrangemanget Gefle Skivmässa som volontär?</p>
      <p>
        Vi bakom eventet jobbar helt ideellt och är alltså inte avlönade eller tjänar pengar på detta. Det innebär en
        tight budget och ibland har vi inte tillräckligt många händer.
      </p>
      <p>
        Vi behöver folk till entréer, scenen och bärhjälp vid nedmontering av själva mässan. Jobba tre - fyra timmar och
        få fri entré till hela arrangemanget.
      </p>
      <p>Du måste vara minst 15 år för att jobba som volontär på Gefle Skivmässa</p>
      <p>Fyll i dina kontaktuppgifter i formuläret nedan så återkommer vi om det finns plats kvar.</p>
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
        <label for="city">Stad</label>
        <input required name="city" type="text" placeholder="Stad" />
        <label for="work">Vad vill du hjälpa till med</label>
        <input required name="work" type="text" placeholder="Vad vill du hjälpa till med?" />
        <label for="comment">Kommentar</label>
        <textarea name="comment" placeholder="Kommentar / övrig info" />
        <button type="submit">Skicka intresseanmälan</button>
      </form>
    </div>
  {/if}
</div>
