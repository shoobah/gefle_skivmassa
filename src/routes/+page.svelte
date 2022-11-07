<script>
	import ImageFlipper from '$lib/components/imageFlipper.svelte';

	let currentTime = new Date();

	const imageList = [
		{
			src: '/images/Webb skivmässa.jpg',
			alt: 'Gävle Skivmässa skivor'
		},
		{
			src: '/images/Webb Vokonis.jpg',
			alt: 'Gävle Skivmässa skivor'
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
