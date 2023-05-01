<script>
	import { state } from '$lib/stores/state';

	export let data;
</script>

<svelte:head>
	<meta name="description" content="Gefle Skivmässa. Beskrivning av band" />
</svelte:head>

<article>
	<div class="section">
		<h1>Skivmässa i Stora Gasklockan. Öppnar kl 12:00.</h1>
		<p>Förköp och entré: 50kr Fikaservering</p>
	</div>
	<div class="section">
		<h1>Livemusik i Lilla Gasklockan. Öppnar 18:00</h1>
		<p>Bar och merch</p>
		<p>
			<a target="_blank" rel="noreferrer" href={$state.ticketLink}>Förköp 375kr.</a> På plats: 400kr
		</p>
		<p>Åldersgräns 13 år.</p>
	</div>
	<div class="main-section">
		{#each data.bands as band}
			<div class="section">
				<h2 id={band.heading}>{band.heading}</h2>
				<div class="retort_description">
					<div>
						<p>
							{band.description}
						</p>

						{#if band.links}
							{#each band.links as link}
								<a target="_blank" href={link.href} rel="noreferrer">
									<h3>{link.title}</h3>
								</a>
							{/each}
						{/if}
					</div>
					<div>
						<img src={band.image} alt={band.name} class="retort_image" /><br />
					</div>
				</div>
			</div>
		{/each}
	</div>
</article>

<style>
	article {
		padding-bottom: 10px;
	}
	img {
		border: none;
	}

	.section {
		border-bottom: solid 1px var(--yellow);
		padding-bottom: 20px;
	}

	.main-section {
		border-bottom: solid 8px var(--yellow);
		padding-bottom: 20px;
	}

	.main-section .section:last-child {
		border-bottom: none;
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
		.retort_description {
			flex-direction: column;
		}
		.retort_image {
			width: 90vw;
			padding-top: 10px;
		}
	}
</style>
