<script>
	import { state } from '$lib/stores/state';

	export let data;
</script>

<svelte:head>
	<meta name="description" content="Gefle Skivmässa. Beskrivning av band" />
</svelte:head>

<article>
	<div class="main-section">
		<h1>Livemusik och servering i RETORTEN under Gefle Skivmässa 6 maj.</h1>
		<p>Restaurang, bar och fri entré hela dagen. Öppnar kl 12:00</p>
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
	<div class="section flexy">
		<img class="logo" src="/icons/Folkbildningsforum_Logo_Liggande.png" alt="Folkbildningsforum" />
		<span>
			Arrangeras i samarbete med Folkbildningsforum och de fyra studieförbunden ABF, Bilda,
			Studiefrämjandet och SV
		</span>
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

	.flexy {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		gap: 10px;
		padding-top: 15px;
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
		column-gap: 10px;
	}

	.retort_image {
		width: 30vw;
	}

	.logo {
		height: 40px;
		width: 152px;
	}

	@media (max-width: 600px) {
		.retort_description {
			flex-direction: column;
			padding: none;
		}
		.retort_image {
			width: 90vw;
			padding-top: 10px;
		}
	}
</style>
