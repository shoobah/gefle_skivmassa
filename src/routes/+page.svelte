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

<div class="page">
	<div class="content">
		<ImageFlipper {imageList} />
		<a href={$state.ticketLink} target="_blank" rel="noreferrer">
			<img src="/icons/Köp biljett.png" alt="Köp biljetter" />
		</a>
	</div>
</div>

<style>
	a {
		color: var(--text-color);
		text-decoration: underline;
		font-size: 1.5rem;
	}

	img {
		width: 10em;
	}
</style>
