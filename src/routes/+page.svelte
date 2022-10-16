<script>
	import { sv } from 'date-fns/locale';
	import { onDestroy, onMount } from 'svelte';
	import { formatDistance } from 'date-fns';

	const theDate = new Date(2023, 3, 6, 12, 0, 0, 0);
	let currentTime = new Date();

	let timer;

	onMount(() => {
		timer = setInterval(() => {
			currentTime = new Date();
		}, 1000);
	});

	onDestroy(() => {
		clearInterval(timer);
	});
</script>

<div class="page">
	<h1>Gävle Skivmässa</h1>
	<h2>
		6:e maj 2023 kl 12:00, om {formatDistance(theDate, currentTime, { locale: sv })}
	</h2>
	<div class="posterContainer">
		<img src="/POSTER SKARP.jpg" alt="poster" />
	</div>
</div>

<style>
	.page {
		display: grid;
		justify-items: center;
	}

	.posterContainer {
		display: grid;
		justify-items: center;
		position: relative;
	}

	img {
		width: 80%;
	}
</style>
