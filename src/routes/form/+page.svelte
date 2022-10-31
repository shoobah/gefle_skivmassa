<div class="main">
	<h1>Anmälan</h1>
	<p>
		Vad kul att du vill medverka på Gefle Skivmässa i maj!<br />
		Fyll i kontaktformuläret nedan för att skicka in din intresseanmälan redan nu.<br />
		Observera att du inte är bokad förrän du får bekräftelse och har betalat fakturan (som kommer från
		vår samarbetspart Medborgarskolan i ett separat mail senare).<br />
		<br />
		Borden på Gefle Skivmässa mäter 200x69cm och är stabila som tusan. Du får plats med 10 skivbackar
		med marginal eller 12 backar med lite överhäng på borden (i sidled).
		<br /><br />
		<strong>Varje bord kostar 300 kr och i priset inkluderas</strong>
	</p>
	<ul>
		<li>Kaffe och fikabröd vid ankomst/inlastning och påtår under hela dagen</li>
		<li>Konsertentré till skivmässans alla spelningar</li>
		<li>Rabatt på lunch/middag i vår personalmatsal som serverar grymt god mat</li>
		<li>Välj mellan flera rätter</li>
		<li>En fantastisk skivmässa i en unik lokal – Stora Gasklockan i Gävle</li>
	</ul>
	<form method="POST">
		<label for="firstName">Förnamn</label>
		<input name="firstName" type="text" placeholder="Förnamn" />
		<label for="lastName">Efternamn</label>
		<input name="lastName" type="text" placeholder="Efternamn" />
		<label for="email">E-post</label>
		<input name="email" type="email" placeholder="E-post" />
		<label for="phone">Telefon</label>
		<input name="phone" type="tel" placeholder="Telefon" />
		<label for="address">Adress</label>
		<input name="address" type="text" placeholder="Adress" />
		<label for="org">Person / Organisationsnummer</label>
		<input name="org" type="text" placeholder="Person / Organisationsnummer" />
		<label for="numberOfTables">Antal bord</label>
		<select name="numberOfTables" placeholder="Antal bord">
			<option value="1">1 bord</option>
			<option value="2">2 bord</option>
			<option value="3">3 bord</option>
		</select>
		<label for="comment">Kommentar</label>
		<textarea name="comment" placeholder="Kommentar" />
		<button type="submit">Skicka intresseanmälan</button>
	</form>
</div>

<style>
	.main {
		width: 50vw;
	}

	form {
		display: grid;
		grid-template-columns: 1fr;
		grid-gap: 1em;
		width: 40vw;
	}

	input,
	textarea,
	select {
		padding: 0.5em;
		border: 1px solid var(--border-color);
		border-radius: 0.5em;
	}

	form button {
		justify-self: right;
		width: 20em;
		height: 3em;
		color: var(--black);
		background-color: var(--green);
		border-radius: 8px;
	}

	@media (max-width: 820px) {
		.main {
			width: 90vw;
		}
	}
</style>
