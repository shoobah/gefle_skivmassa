<script>
	import Map from '$lib/components/map.svelte';
</script>

<svelte:head>
	<meta name="description" content="Gefle Skivmässa. Kontakt" />
</svelte:head>

<div>
	<h1>Kontakt</h1>
	<article>
		Mail: <a href="mailto:info@gefleskivmassa.se">info@gefleskivmassa.se</a><br />
		Facebook: <a href="www.facebook.se/gefleskivmassa">www.facebook.se/gefleskivmassa</a><br />
		Instagram: <a href="www.instagram.com/gefleskivmassa">www.instagram.com/gefleskivmassa</a><br />
		<br />
		<a href="https://bit.ly/3T0EgT2" target="_blank" rel="noreferrer">
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
