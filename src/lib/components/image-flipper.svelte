<script>
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import '@splidejs/svelte-splide/css';

	/**
	 * @type {string | any[]}
	 */
	export let imageList;

	export let size = 1250;
	export let pagination = false;
	export let arrows = false;
	export let interval = 5000;
	export let speed = 2000;
	export let ar = 0.5625;

	let innerWidth = 2048;

	$: sliderWidth = innerWidth > 1366 ? size : innerWidth - 20;

	$: options = {
		rewind: true,
		width: sliderWidth,
		height: sliderWidth * ar,
		gap: '1rem',
		autoplay: true,
		type: 'fade',
		inteval: interval,
		speed: speed,
		arrows,
		pagination
	};
</script>

<svelte:window bind:innerWidth />

<div class="image-container">
	<Splide aria-label="Slideshow" {options} style="max-width:{size}">
		{#each imageList as image}
			<SplideSlide>
				<img src={image.src} alt={image.alt} width={sliderWidth} />
			</SplideSlide>
		{/each}
	</Splide>
</div>

<style>
	@media (max-width: 820px) {
	}
</style>
