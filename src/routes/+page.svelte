<script>
	import { state } from '$lib/stores/state';
	import ImageFlipper from '$lib/components/image-flipper.svelte';
	import Mässa from '$lib/images/Webb skivmässa.jpg?w=1000&webp';
	import Vokonis from '$lib/images/Webb Vokonis.jpg?w=1000&webp';
	import Horndal from '$lib/images/webb horndal.jpg?w=1000&webp';
	import Witchcraft from '$lib/images/Webb Witchcraft.jpg?w=1000&webp';
	import CotS from '$lib/images/Webb CotS.jpg?w=1000&webp';
	import Poster from '$lib/images/FrontPoster.jpg?w=1000&webp';

	const imageList = [
		{
			src: Witchcraft,
			alt: 'Witchcraft'
		},
		{
			src: Horndal,
			alt: 'Horndal'
		},
		{
			src: Vokonis,
			alt: 'Vokonis'
		},
		{
			src: CotS,
			alt: 'Children of the Sün'
		},
		{
			src: Mässa,
			alt: 'Gävle Skivmässa'
		}
	];
</script>

<svelte:head>
	<meta name="description" content="Gefle Skivmässa. Startsida" />
</svelte:head>

<div>
	<!-- <ImageFlipper {imageList} /> -->
	<div class="imagebox">
		<img src={Poster} alt="Poster" />
	</div>
	<a href={$state.ticketLink} target="_blank" rel="noreferrer">
		<img class="ticketButton" src="/icons/Köp biljett.png" alt="Köp biljetter" />
	</a>
</div>

<style>
	div {
		display: grid;
		justify-items: center;
		gap: 20px;
		padding-top: 20px;
	}
	a {
		color: var(--text-color);
		text-decoration: underline;
		font-size: 1.5rem;
	}

	.ticketButton {
		width: 20vw;
		max-width: 200px;
		min-width: 100px;
	}
	.imagebox {
		display: grid;
		grid-auto-flow: column;
		gap: 10px;
	}

	@media (max-width: 820px) {
		.imagebox img {
			width: 80vw;
		}
	}
</style>
