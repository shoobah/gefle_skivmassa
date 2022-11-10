<script>
	import '@splidejs/svelte-splide/css';
	import { onDestroy, onMount } from 'svelte';

	/**
	 * @type {string | any[]}
	 */
	export let imageList;

	export let size = 1250;
	export let interval = 5000;
	export let ar = 0.5625;

	let innerWidth = 2048;
	let index = 0;

	$: sliderWidth = innerWidth > 1366 ? size : innerWidth - 20;
	$: index = index % imageList.length;

	function moveToNext() {
		index++;
	}

	function moveToPrev() {
		index--;
	}

	let timer;

	onMount(() => {
		timer = setInterval(moveToNext, interval);
	});

	onDestroy(() => {
		clearInterval(timer);
	});
</script>

<svelte:window bind:innerWidth />

<div>
	<img
		on:click={moveToNext}
		on:keydown={moveToNext}
		src={imageList[index].src}
		alt={imageList[index].alt}
		width={sliderWidth}
		height={sliderWidth * ar}
	/>
</div>
