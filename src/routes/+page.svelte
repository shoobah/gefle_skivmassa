<script>
	import { onDestroy, onMount } from 'svelte';
	import * as dfns from 'date-fns';
	import * as locales from 'date-fns/locale/index.js';
	import ImageFlipper from '$lib/components/imageFlipper.svelte';

	const theDate = new Date(2023, 3, 6, 12, 0, 0, 0);
	let currentTime = new Date();

	const imageList = [
		{
			src: '/images/Webb skivmässa.jpg',
			alt: 'Gävle Skivmässa skivor'
		},
		{
			src: '/images/Webb Vokonis.jpg',
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
	<ImageFlipper {imageList} />
</div>

<style>
	.page {
		display: grid;
		justify-items: center;
		align-items: start;
		padding-top: 20px;
	}
</style>
