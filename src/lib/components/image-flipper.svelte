<script>
	import '@splidejs/svelte-splide/css';
	import { onDestroy, onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { tweened } from 'svelte/motion';

	/**
	 * @type {string | any[]}
	 */
	export let imageList;

	export let size = 1250;
	let interval = 2000;
	export let ar = 0.5625;

	let innerWidth = 2048;
	let index = 0;

	$: sliderWidth = innerWidth > 1366 ? size : innerWidth - 20;
	$: index = index % imageList.length;
	$: nextIndex = (index + 1) % imageList.length;
	$: firstVisible = index % 2 === 0;

	let opacity1 = tweened(1, { duration: 500 });
	let opacity2 = tweened(0, { duration: 500 });

	$: $opacity1 = firstVisible ? 1 : 0;
	$: $opacity2 = firstVisible ? 0 : 1;

	$: $opacity1 === 0 ? moveToNext() : null;
	$: $opacity2 === 0 ? moveToNext() : null;

	function moveToNext() {
		setTimeout(() => (index += 1), interval);
	}

	function moveToPrev() {
		index -= 1;
	}

	onMount(() => {});
</script>

<svelte:window bind:innerWidth />

<pre>
    {firstVisible}
    {index}
    {nextIndex}
</pre>
<div on:click={moveToNext} on:keydown={moveToNext}>
	<img
		style="opacity: {$opacity1}"
		src={imageList[index].src}
		alt={imageList[index].alt}
		width={sliderWidth}
		height={sliderWidth * ar}
	/>
	<img
		style="opacity: {$opacity2}"
		src={imageList[nextIndex].src}
		alt={imageList[nextIndex].alt}
		width={sliderWidth}
		height={sliderWidth * ar}
	/>
</div>

<style>
	div {
		position: relative;
	}

	img {
		position: absolute;
	}
</style>
