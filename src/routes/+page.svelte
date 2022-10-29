<script>
	import { onDestroy, onMount } from 'svelte';
	import { fade, fly, slide } from 'svelte/transition';
	import * as dfns from 'date-fns';
	import * as locales from 'date-fns/locale/index.js';
	const theDate = new Date(2023, 3, 6, 12, 0, 0, 0);
	let currentTime = new Date();

	/**
	 * @type {string | number | NodeJS.Timer | undefined}
	 */
	let timer;
	/**
	 * @type {string | number | NodeJS.Timer | undefined}
	 */
	let flipImageTimer;

	let { sv } = locales;

	let imageList = [
		{
			src: '/images/Banner_IMG_0118.jpg',
			alt: 'Gävle Skivmässa skivor'
		},
		{
			src: '/images/Banner_2.jpg',
			alt: 'Gävle Skivmässa skivor'
		},
		{
			src: '/images/Banner_3.jpg',
			alt: 'Gävle Skivmässa skivor'
		}
	];

	let currentImageIndex = 0;

	onMount(() => {
		timer = setInterval(() => {
			currentTime = new Date();
		}, 1000);

		flipImageTimer = setInterval(() => {
			flipImage();
		}, 5000);
	});

	onDestroy(() => {
		clearInterval(timer);
		clearInterval(flipImageTimer);
	});

	function flipImage() {
		currentImageIndex = (currentImageIndex + 1) % imageList.length;
	}
</script>

<div class="page">
	<h1>Gävle Skivmässa</h1>
	<h2>
		6:e maj 2023 kl 12:00, om {dfns.formatDistance(theDate, currentTime, { locale: sv })}
	</h2>
	<div class="image-container">
		{#each [imageList[currentImageIndex]] as image (currentImageIndex)}
			<img transition:fade={{ duration: 500 }} src={image.src} alt={image.alt} />
		{/each}
	</div>
</div>

<style>
	.page {
		display: grid;
		justify-items: center;
	}

	.image-container {
		position: relative;
		width: 100vw;
	}

	img {
		width: 100vw;
		position: absolute;
		left: 0px;
		top: 0px;
	}
</style>
