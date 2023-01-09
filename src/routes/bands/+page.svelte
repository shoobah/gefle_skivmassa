<script>
	// @ts-nocheck

	import WitchcraftLogo from '$lib/images/Witchcraft/Witchcraft Logo White.png?w=750&webp';
	import HorndalLogo from '$lib/images/Horndal/horndal_logo_neg_trans.png?w=750&webp';
	import VokonisLogo from '$lib/images/Vokonis/Vokonis_logo.jpg?w=750&webp';
	import CotSLogo from '$lib/images/CotS/Logo - Children of the Sun - White.png?w=750&webp';
	import Witchcraft from '$lib/images/Witchcraft/WITCHCRAFT2022.png?w=750&webp';
	import Horndal from '$lib/images/Horndal/FAV-Horndal_210106_Lake_HZ_01-1.jpeg?w=750&webp';
	import Vokonis from '$lib/images/Vokonis/Vokonis photo Robert Hellström.jpg?w=750&webp';
	import CotS from '$lib/images/CotS/Children of the Sün 3_Photo Erik Hansen.jpg?w=750&webp';
</script>

<svelte:head>
	<meta name="description" content="Gefle Skivmässa. Beskrivning av band" />
</svelte:head>

<article>
	<h1>Livemusik</h1>
	<p class="section">
		Gefle Skivmässa har från starten 2016 alltid haft en uppsjö av bra band på vår scen. 2023 är
		inget undantag. Årets lineup är klar och vi kan stolt presentera Children of the Sün,
		Witchcraft, Horndal och Vokonis!
	</p>
	<div class="section">
		<div class="imagebox">
			<img class="logo" src={CotSLogo} alt="Children of the Sün logo" /><br />
		</div>
		<div class="imagebox">
			<img src={CotS} alt="Children of the Sün" /><br />
			<pre>Foto: Erik Hansen</pre>
		</div>
		<a target="_blank" href="https://childrenofthesunofficial.bandcamp.com/music" rel="noreferrer">
			<h2>Children of the Sün på Bandcamp</h2>
		</a>
		<a target="_blank" href="https://www.facebook.com/Childrenofthesuun/" rel="noreferrer">
			<h2>Children of the Sün på Facebook</h2>
		</a>
	</div>
	<div class="section">
		<div class="imagebox">
			<img class="logo" src={WitchcraftLogo} alt="Witchcraft logo" /><br />
		</div>
		<div class="imagebox">
			<img src={Witchcraft} alt="Witchcraft" /><br />
			<pre>Foto: Ronan Goasdoué</pre>
		</div>
		<a target="_blank" href="https://witchcraftband.com/" rel="noreferrer">
			<h2>Hemsida</h2>
		</a>
		<a target="_blank" href="https://www.facebook.com/witchcraft" rel="noreferrer">
			<h2>Witchcraft på Facebook</h2>
		</a>
	</div>
	<div class="section">
		<div class="imagebox">
			<img class="logo" src={HorndalLogo} alt="Horndal logo" /><br />
		</div>
		<div class="imagebox">
			<img src={Horndal} alt="Horndal" /><br />
		</div>
		<a target="_blank" href="https://horndal.bandcamp.com/album/lake-drinker" rel="noreferrer">
			<h2>Horndal på Bandcamp</h2>
		</a>
		<a target="_blank" href="https://www.facebook.com/horndalmusic/" rel="noreferrer">
			<h2>Horndal på Facebook</h2>
		</a>
	</div>
	<div class="section">
		<div class="imagebox">
			<img class="logo" src={VokonisLogo} alt="Vokonis logo" /><br />
		</div>
		<div class="imagebox">
			<img src={Vokonis} alt="Vokonis" /><br />
			<pre>Foto: Robert Hellström</pre>
		</div>
		<a target="_blank" href="https://vokonis.bandcamp.com/album/odyssey" rel="noreferrer">
			<h2>Vokonis på Bandcamp</h2>
		</a>
		<a target="_blank" href="https://www.facebook.com/OfficialVokonis/" rel="noreferrer">
			<h2>Vokonis på Facebook</h2>
		</a>
	</div>
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
	</ul>

	Tror du att ni skulle passa på vår scen? Maila er intresseanmälan på&nbsp;<a
		href="mailto:gefleskivmassa@gmail.com">gefleskivmassa@gmail.com</a
	>
</article>

<style>
	article {
		padding-bottom: 10px;
	}
	img {
		border: none;
	}
	ul {
		list-style-type: none;
	}
	ul li::before {
		content: '‣';
		color: var(--yellow);
		font-weight: normal;
		display: inline-block;
		width: 1em;
		margin-left: -1em;
	}

	pre {
		text-align: end;
		font-size: 0.7em;
		padding: 0;
		margin: 0;
	}

	.section {
		border-bottom: solid 1px var(--yellow);
		padding-bottom: 20px;
	}

	.logo {
		width: 30vw;
	}
</style>
