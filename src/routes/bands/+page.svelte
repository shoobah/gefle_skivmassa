<script>
	import { state } from '$lib/stores/state';

	export let data;
</script>

<svelte:head>
	<meta name="description" content="Gefle Skivmässa. Beskrivning av band" />
</svelte:head>

<article>
	<div class="section">
		<h1>Livemusik på scen GASKLOCKAN. Öppnar 18:00</h1>
		<p>Bar och merch</p>
		<p><a target="_blank" rel="noreferrer" href={$state.ticketLink}>Förköp 375kr</a></p>
		<p>på plats: 400kr</p>
	</div>
	{#each data.bands as band}
		<div class="section">
			<h2>{band.heading}</h2>
			<div class="imagebox">
				<a target="_blank" href={band.fbLink} rel="noreferrer" style="text-align: center">
					<img class="logo" src={band.logo} alt={band.name + ' logo'} /><br />
				</a>
			</div>
			<div>{band.description}</div>
			<br />
			<div class="imagebox">
				<a target="_blank" href={band.fbLink} rel="noreferrer">
					<img src={band.image} alt={band.name} /><br />
				</a>
				{#if band.photoBy}
					<pre>Foto: {band.photoBy}</pre>
				{/if}
			</div>
			<a target="_blank" href={band.fbLink} rel="noreferrer">
				<h3>{band.name} på Facebook</h3>
			</a>
			{#each band.otherLinks as link}
				<a target="_blank" href={link.href} rel="noreferrer">
					<h3>{link.title}</h3>
				</a>
			{/each}
		</div>
	{/each}
	<div class="section">
		<h1>Livemusik på scen RETORTEN under Gefle Skivmässa 6 maj.</h1>
		<p>Restaurang, bar och fri entré hela dagen. Öppnar kl 12:00</p>
		{#each data.bands_retort as band}
			<div class="section">
				<h2>{band.heading}</h2>
				<div class="retort_description">
					<div>{band.description}</div>
					<div>
						<img src={band.image} alt={band.name} class="retort_image" /><br />
					</div>
				</div>
				{#if band.links}
					{#each band.links as link}
						<a target="_blank" href={link.href} rel="noreferrer">
							<h3>{link.title}</h3>
						</a>
					{/each}
				{/if}
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
	</div>
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
		width: 20vw;
	}

	.retort_description {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	.retort_image {
		width: 30vw;
	}

	@media (max-width: 600px) {
		.logo {
			width: 60vw;
		}
		.retort_description {
			flex-direction: column;
		}
		.retort_image {
			width: 90vw;
			padding-top: 10px;
		}
	}
</style>
