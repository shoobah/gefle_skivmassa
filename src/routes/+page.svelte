<script>
	import { onDestroy, onMount } from 'svelte';
	import * as locales from 'date-fns/locale/index.js';
	import ImageFlipper from '$lib/components/imageFlipper.svelte';

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
