<div class="header">
	<a href="/">
		<img alt="gefle skivmässa logo" src="/logos/GEFLE SKIVMÄSSA NEUTRAL_LOGOTYP_SVART_GUL.png" />
	</a>
	<div class="heading">Gefle Skivmässa</div>
</div>

<style>
	.header {
		display: grid;
		grid-template-columns: 50px auto 50px;
		padding: 5px;
		background-color: var(--header-bg);
		align-items: center;
		justify-items: center;
	}
	.heading {
		font-size: 1.5em;
		font-weight: 700;
		color: var(--text-color);
	}
	img {
		position: absolute;
		top: -70px;
		left: -70px;
		float: left;
		width: 300px;
		z-index: 1000;
	}

	@media (max-width: 600px) {
		img {
			top: -20px;
			left: -20px;
			float: left;
			width: 100px;
			z-index: 1000;
		}
	}
</style>
