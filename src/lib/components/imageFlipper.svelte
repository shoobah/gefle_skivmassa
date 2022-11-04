<script>
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import '@splidejs/svelte-splide/css';

	/**
	 * @type {string | any[]}
	 */
	export let imageList;

	let innerWidth = 2048;

	$: sliderWidth = innerWidth > 1366 ? 1366 : innerWidth - 20;

	$: options = {
		rewind: true,
		width: sliderWidth,
		height: sliderWidth * 0.5625,
		gap: '1rem',
		autoplay: true,
		type: 'fade',
		inteval: 5000,
		speed: 2000
	};
</script>

<svelte:window bind:innerWidth />

<div class="image-container">
	<Splide aria-label="Slideshow" {options}>
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
