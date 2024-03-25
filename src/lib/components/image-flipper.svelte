<script>
  import "@splidejs/svelte-splide/css";
  import { onDestroy, onMount } from "svelte";
  import { tweened } from "svelte/motion";

  import Mässa2016 from "$lib/images/Carousel/2016 Mässa.jpg";
  import Mässa2018 from "$lib/images/Carousel/2018 Mässa.jpg";
  import Mässa2018_2 from "$lib/images/Carousel/2018 Mässa 2.jpg";
  import Mässa2019 from "$lib/images/Carousel/2019 Mässa.jpg";
  import Mässa2023 from "$lib/images/Carousel/2023 Massa.jpg";

  import Anekdoten from "$lib/images/Carousel/2017 Anekdoten.jpg";
  import Besvärjelsen from "$lib/images/Carousel/2018 Besvärjelsen.jpg";
  import BluesPills from "$lib/images/Carousel/2016 Blues Pills.jpg";
  import CotS from "$lib/images/Carousel/2023 CotS.jpg";
  import GoodHarvest from "$lib/images/Carousel/2017 Good Harvest.jpg";
  import Horndal from "$lib/images/Carousel/2023 Horndal.jpg";
  import ImpreialStateElectric from "$lib/images/Carousel/2018 Imperial state electric.jpg";
  import Liondub from "$lib/images/Carousel/2019 Liondub.jpg";
  import Lucifer from "$lib/images/Carousel/2019 Lucifer.jpg";
  import MaidaVale from "$lib/images/Carousel/2017 MaidaVale.jpg";
  import Merch from "$lib/images/Carousel/2019 Merch.jpg";
  import Paatos from "$lib/images/Carousel/2019 Paatos.jpg";
  import Paatos2 from "$lib/images/Carousel/2019 Paatos 2.jpg";
  import Sator from "$lib/images/Carousel/2018 Sator.jpg";
  import SlimVic from "$lib/images/Carousel/2018 Slim Vic.jpg";
  import Spiders from "$lib/images/Carousel/2016 Spiders.jpg";
  import Vokonis from "$lib/images/Carousel/2023 Vokonis.jpg";
  import Witchcraft from "$lib/images/Carousel/2023 Witchcraft.jpg";

  const imageList = [
    { src: Mässa2023, alt: "Mässa 2023" },
    { src: CotS, alt: "Children of the Sün 2023" },
    { src: Vokonis, alt: "Vokonis 2023" },
    { src: Horndal, alt: "Horndal 2023" },
    { src: Witchcraft, alt: "Witchcraft 2023" },
    { src: Mässa2019, alt: "Mässa 2019" },
    { src: MaidaVale, alt: "MaidaVale" },
    { src: Mässa2018, alt: "Mässa 2018" },
    { src: Besvärjelsen, alt: "Besvärjelsen" },
    { src: Liondub, alt: "Liondub" },
    { src: Paatos, alt: "Paatos" },
    { src: SlimVic, alt: "Slim Vic" },
    { src: Sator, alt: "Sator" },
    { src: Mässa2018, alt: "Mässa 2018" },
    { src: Lucifer, alt: "Lucifer" },
    { src: Mässa2018_2, alt: "Mässa 2018" },
    { src: ImpreialStateElectric, alt: "Impreial State Electric" },
    { src: Merch, alt: "Merch" },
    { src: Paatos2, alt: "Paatos" },
    { src: GoodHarvest, alt: "Good Harvest" },
    { src: Anekdoten, alt: "Anekdoten" },
    { src: Spiders, alt: "Spiders" },
    { src: Mässa2016, alt: "Mässa 2016" },
    { src: BluesPills, alt: "Blues Pills" },
  ];

  const size = 1024;
  const interval = 3000;
  const ar = 0.666;
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
