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
	<div>
		<ImageFlipper {imageList} />
		<a href="https://bit.ly/3T0EgT2" target="_blank" rel="noopener noreferrer">
			Köp biljetter m.m.
		</a>
	</div>
</div>

<style>
	.page {
		padding-top: 20px;
	}

	a {
		color: var(--text-color);
		text-decoration: underline;
		font-size: 1.5rem;
	}
</style>
