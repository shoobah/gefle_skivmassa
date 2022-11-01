<script>
	import { onDestroy, onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	/**
	 * @type {string | any[]}
	 */
	export let imageList;
	export let options = {
		delay: 5000,
		duration: 500
	};

	let currentImageIndex = 0;
	/**
	 * @type {string | number | NodeJS.Timer | undefined}
	 */
	let flipImageTimer;

	onMount(() => {
		if (imageList?.length > 0) {
			flipImageTimer = setInterval(() => {
				currentImageIndex = (currentImageIndex + 1) % imageList.length;
			}, options.delay);
		}
	});

	onDestroy(() => {
		clearInterval(flipImageTimer);
	});
</script>

<div class="image-container">
	{#if imageList?.length > 0}
		{#each [imageList[currentImageIndex]] as image (currentImageIndex)}
			<img transition:fade={{ duration: options.duration }} src={image.src} alt={image.alt} />
		{/each}
	{:else}
		Crap! There's no images in the list!
	{/if}
</div>

<style>
	.image-container {
		position: relative;
		width: 50vw;
	}

	img {
		position: absolute;
		left: 0px;
		top: 0px;
		border: solid 1px var(--border-color);
		width: 50vw;
	}

	@media (max-width: 820px) {
		.image-container {
			width: 90vw;
		}
		img {
			width: 90vw;
		}
	}
</style>
