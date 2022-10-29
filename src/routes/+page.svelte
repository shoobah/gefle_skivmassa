<script>
	import { onDestroy, onMount } from 'svelte';
	import * as dfns from 'date-fns';
	import * as locales from 'date-fns/locale/index.js';
	import ImageFlipper from '$lib/components/imageFlipper.svelte';

	const theDate = new Date(2023, 3, 6, 12, 0, 0, 0);
	let currentTime = new Date();

	const imageList = [
		{
			src: '/images/Banner_IMG_0118.jpg',
			alt: 'Gävle Skivmässa skivor'
		},
		{
			src: '/images/Banner_6.jpg',
			alt: 'Gävle Skivmässa skivor'
		},
		{
			src: '/images/Banner_2.jpg',
			alt: 'Gävle Skivmässa skivor'
		},
		{
			src: '/images/Banner_4.jpg',
			alt: 'Gävle Skivmässa skivor'
		},
		{
			src: '/images/Banner_5.jpg',
			alt: 'Gävle Skivmässa skivor'
		},
		{
			src: '/images/Banner_3.jpg',
			alt: 'Gävle Skivmässa skivor'
		}
	];

	/**
	 * @type {string | number | NodeJS.Timer | undefined}
	 */
	let timer;

	let { sv } = locales;

	let currentImageIndex = 0;

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
	<ImageFlipper {imageList} options={{ delay: 5000, duration: 1000 }} />
</div>

<style>
	.page {
		display: grid;
		justify-items: center;
	}
</style>
