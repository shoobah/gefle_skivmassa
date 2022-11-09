<script>
	import { state } from '$lib/stores/state';
	import ImageFlipper from '$lib/components/image-flipper.svelte';
	import Mässa from '$lib/images/Webb skivmässa.jpg?w=1000&webp';
	import Vokonis from '$lib/images/Webb Vokonis.jpg?w=1000&webp';

	const imageList = [
		{
			src: Mässa,
			alt: 'Gävle Skivmässa'
		},
		{
			src: Vokonis,
			alt: 'Vokonis'
		}
	];
</script>

<svelte:head>
	<meta name="description" content="Gefle Skivmässa. Startsida" />
</svelte:head>

<div>
	<ImageFlipper {imageList} />
	<a href={$state.ticketLink} target="_blank" rel="noreferrer">
		<img src="/icons/Köp biljett.png" alt="Köp biljetter" />
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

	img {
		width: 20vw;
		max-width: 200px;
		min-width: 100px;
	}
</style>
