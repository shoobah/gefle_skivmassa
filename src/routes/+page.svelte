<script>
	import { onDestroy, onMount } from 'svelte';
	import * as dfns from 'date-fns';
	import * as locales from 'date-fns/locale/index.js';
	const theDate = new Date(2023, 3, 6, 12, 0, 0, 0);
	let currentTime = new Date();

	/**
	 * @type {string | number | NodeJS.Timer | undefined}
	 */
	let timer;
	let { sv } = locales;

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
		6:e maj 2023 kl 12:00, om {dfns.formatDistance(theDate, currentTime, { locale: sv })}
	</h2>
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
