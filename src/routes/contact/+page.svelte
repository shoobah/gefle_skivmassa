<script>
	import { state } from '$lib/stores/state.js';
	import Map from '$lib/components/map.svelte';
</script>

<svelte:head>
	<meta name="description" content="Gefle Skivmässa. Kontakt" />
</svelte:head>

<div>
	<h1>Kontakt</h1>
	<article>
		Mail: <a href="mailto:gefleskivmassa@gmail.com">gefleskivmassa@gmail.com</a><br />
		Facebook:
		<a href="https://www.facebook.com/gefleskivmassa">www.facebook.com/gefleskivmassa</a><br />
		Instagram:
		<a href="https://www.instagram.com/gefleskivmassa">www.instagram.com/gefleskivmassa</a><br />
		<br />
		<a href={$state.ticketLink} target="_blank" rel="noreferrer">
			<img src="/icons/Köp biljett.png" alt="Köp biljetter" />
		</a>
		<h2>Samarbetspartners</h2>
		<a href="https://www.medborgarskolan.se" target="_blank" rel="noreferrer">
			Medborgarskolan
		</a><br />
		<a href="https://www.gavle.se/gasklockorna" target="_blank" rel="noreferrer">
			Gasklockorna
		</a><br />
		<a
			href="https://www.regiongavleborg.se/kultur/verksamhet/musik/"
			target="_blank"
			rel="noreferrer"
		>
			Region Gävleborg, musik
		</a>
		<Map />
	</article>
</div>

<style>
	img {
		border: none;
		width: 10em;
	}
</style>
