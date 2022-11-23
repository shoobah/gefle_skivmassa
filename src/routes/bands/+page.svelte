<script>
	import VokonisLogo from '$lib/images/Vokonis/Vokonis_logo.jpg?w=750&webp';
	import Vokonis from '$lib/images/Vokonis/Vokonis.jpg?w=750&webp';
	import HorndalLogo from '$lib/images/Horndal/Horndal_logo_neg_trans.png?w=750&webp';
	import Horndal from '$lib/images/Horndal/FAV-Horndal_210106_Lake_HZ_01-1.jpeg?w=750&webp';
</script>

<svelte:head>
	<meta name="description" content="Gefle Skivmässa. Beskrivning av band" />
</svelte:head>

<article>
	<h1>Livemusik</h1>
	<p>
		Gefle Skivmässa har från starten 2016 alltid haft en uppsjö av bra band på vår scen. 2023 är
		inget undantag. Årets lineup är inte klar men redan nu kan vi stolt presentera Vokonis och
		Horndal!
	</p>
	<div class="band">
		<div class="imagebox">
			<img src={VokonisLogo} alt="Vokonis logo" /><br />
		</div>
		<div class="imagebox">
			<img src={Vokonis} alt="Vokonis" /><br />
		</div>
		<a
			target="_blank"
			class="bandlogo"
			href="https://vokonis.bandcamp.com/album/odyssey"
			rel="noreferrer"
		>
			<h2>Vokonis på BandCamp</h2>
		</a>
		<a
			target="_blank"
			class="bandimage"
			href="https://www.facebook.com/OfficialVokonis/"
			rel="noreferrer"
		>
			<h2>Vokonis på Facebook</h2>
		</a>
	</div>
	<div class="band">
		<div class="imagebox">
			<img src={HorndalLogo} alt="Horndal logo" /><br />
		</div>
		<div class="imagebox">
			<img src={Horndal} alt="Horndal" /><br />
		</div>
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

	.band {
		border-bottom: solid 1px var(--yellow);
		padding-bottom: 20px;
	}
</style>
