<script>
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
		<a href="https://bit.ly/3T0EgT2" target="_blank" rel="noreferrer">
			<img src="/icons/Köp biljett.png" alt="Köp biljetter" />
		</a>
	</div>
</div>

<style>
	.page {
		padding-top: 20px;
	}

	.content {
		display: grid;
		justify-items: center;
		align-items: center;
		gap: 10px;
	}

	a {
		color: var(--text-color);
		text-decoration: underline;
		font-size: 1.5rem;
	}

	img {
		width: 10em;
	}
</style>
