<script>
	import { onDestroy, onMount } from 'svelte';
	import { fade } from 'svelte/transition';

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
	/**
	 * @type {string | number | NodeJS.Timer | undefined}
	 */
	let flipImageTimer;

	onMount(() => {
		flipImageTimer = setInterval(() => {
			currentImageIndex = (currentImageIndex + 1) % imageList.length;
		}, 5000);
	});

	onDestroy(() => {
		clearInterval(flipImageTimer);
	});
</script>

<div class="image-container">
	{#each [imageList[currentImageIndex]] as image (currentImageIndex)}
		<img transition:fade={{ duration: 500 }} src={image.src} alt={image.alt} />
	{/each}
</div>

<style>
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
