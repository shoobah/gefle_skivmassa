<script>
  import '@splidejs/svelte-splide/css';
  import { onDestroy, onMount } from 'svelte';
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
  /**
   * @type {number}
   */
  let timer;

  $: sliderWidth = innerWidth > 1366 ? size : innerWidth - 20;
  $: index = index % imageList.length;
  $: nextIndex = (index + 1) % imageList.length;

  let opacity1 = tweened(1, { duration: 500 });
  let opacity2 = tweened(0, { duration: 500 });

  function moveToNext() {
    setTimeout(() => {
      index += 1;
      $opacity1 === 0 ? 1 : 0;
      $opacity2 === 1 ? 0 : 1;
    }, interval);
  }

  function moveToPrev() {
    index -= 1;
  }

  onMount(() => {
    timer = setInterval(() => {
      moveToNext();
    }, interval * 2);
  });

  onDestroy(() => {
    clearInterval(timer);
  });
</script>

<svelte:window bind:innerWidth />

<!-- <pre>
    {firstVisible}
    {index + ': ' + $opacity1}
    {nextIndex + ': ' + $opacity2}
</pre> -->
<div
  class="flipper-div"
  style="width: {sliderWidth}px; height: {sliderWidth * ar}px;"
  on:click={moveToNext}
  on:keydown={moveToNext}
  role="button"
  tabindex="0"
>
  <img
    class="flipper-image"
    style="opacity: {$opacity1}"
    src={imageList[index].src}
    alt={imageList[index].alt}
    width={sliderWidth}
    height={sliderWidth * ar}
  />
  <img
    class="flipper-image"
    style="opacity: {$opacity2}"
    src={imageList[nextIndex].src}
    alt={imageList[nextIndex].alt}
    width={sliderWidth}
    height={sliderWidth * ar}
  />
</div>

<style>
  .flipper-div {
    position: relative;
  }

  .flipper-image {
    position: absolute;
  }
</style>
