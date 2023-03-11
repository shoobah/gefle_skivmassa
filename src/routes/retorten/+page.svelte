<script>
	export let data;
	export const prerender = true;
</script>

<svelte:head>
	<meta name="description" content="Gefle Skivmässa. Beskrivning av band" />
</svelte:head>

<article>
	<h1>Livemusik</h1>
	<p class="section">---</p>
	{#each data.bands as band}
		<div class="section">
			<div class="imagebox">
				<a target="_blank" href={band.link} rel="noreferrer">
					<img src={band.image} alt={band.name} /><br />
				</a>
			</div>
		</div>
	{/each}
</article>

<style>
	article {
		padding-bottom: 10px;
	}
	img {
		border: none;
		width: 100%;
	}

	.section {
		/* border-bottom: solid 1px var(--yellow); */
		padding-bottom: 20px;
	}
</style>
