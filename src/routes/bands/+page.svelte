<script>
	// @ts-nocheck

	import WitchcraftLogo from '$lib/images/Witchcraft/Witchcraft Logo White.png?w=750&webp';
	import HorndalLogo from '$lib/images/Horndal/horndal_logo_neg_trans.png?w=750&webp';
	import VokonisLogo from '$lib/images/Vokonis/Vokonis_logo.jpg?w=750&webp';
	import CotSLogo from '$lib/images/CotS/Logo - Children of the Sun - White.png?w=750&webp';
	import WitchcraftImage from '$lib/images/Witchcraft/WITCHCRAFT2022.png?w=750&webp';
	import HorndalImage from '$lib/images/Horndal/FAV-Horndal_210106_Lake_HZ_01-1.jpeg?w=750&webp';
	import VokonisImage from '$lib/images/Vokonis/Vokonis photo Robert Hellström.jpg?w=750&webp';
	import CotSImage from '$lib/images/CotS/Children of the Sün 3_Photo Erik Hansen.jpg?w=750&webp';

	const bands = [
		{
			name: 'Witchcraft',
			image: WitchcraftImage,
			logo: WitchcraftLogo,
			photoBy: 'Ronan Goasdoué',
			fbLink: 'https://www.facebook.com/witchcraft/',
			otherLinks: [{ title: 'Hemsida', href: 'https://witchcraftband.com/' }]
		},
		{
			name: 'Horndal',
			image: HorndalImage,
			logo: HorndalLogo,
			photoBy: '',
			fbLink: 'https://www.facebook.com/horndalmusic/',
			otherLinks: [
				{ title: 'Horndal på Bandcamp', href: 'https://horndal.bandcamp.com/album/lake-drinker' }
			]
		},
		{
			name: 'Vokonis',
			image: VokonisImage,
			logo: VokonisLogo,
			photoBy: 'Robert Hellström',
			fbLink: 'https://www.facebook.com/OfficialVokonis/',
			otherLinks: [
				{ title: 'Vokonis på Bandcamp', href: 'https://vokonis.bandcamp.com/album/odyssey' }
			]
		},
		{
			name: 'Children of the Sün',
			image: CotSImage,
			logo: CotSLogo,
			photoBy: 'Erik Hansen',
			fbLink: 'https://www.facebook.com/Childrenofthesuun/',
			otherLinks: [
				{
					title: 'Children of the Sün på Bandcamp',
					href: 'https://childrenofthesunofficial.bandcamp.com/music'
				}
			]
		}
	];
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
	{#each bands as band}
		<div class="section">
			<div class="imagebox">
				<a target="_blank" href={band.fbLink} rel="noreferrer" style="text-align: center">
					<img class="logo" src={band.logo} alt={band.name + ' logo'} /><br />
				</a>
			</div>
			<div class="imagebox">
				<a target="_blank" href={band.fbLink} rel="noreferrer">
					<img src={band.image} alt={band.name} /><br />
				</a>
				{#if band.photoBy}
					<pre>Foto: {band.photoBy}</pre>
				{/if}
			</div>
			<a target="_blank" href={band.fbLink} rel="noreferrer">
				<h2>{band.name} på Facebook</h2>
			</a>
			{#each band.otherLinks as link}
				<a target="_blank" href={link.href} rel="noreferrer">
					<h2>{link.title}</h2>
				</a>
			{/each}
		</div>
	{/each}
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
