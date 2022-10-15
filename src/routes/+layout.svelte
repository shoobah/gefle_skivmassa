<script>
	const colors = ['#a4243b', 'ff9e00', '273e47', 'f49097', 'dfb2f4'];
</script>

<div class="main">
	<div class="content">
		<slot />
	</div>
</div>

<style>
	@media (prefers-color-scheme: dark) {
		:root {
			--text-color: #ffffff;
			--body-bg: #273e47ff;
		}
	}

	@media (prefers-color-scheme: light) {
		:root {
			--text-color: #273e47ff;
			--body-bg: rgb(214, 214, 214);
		}
	}

	:global(body) {
		font-family: 'Exo', Tahoma, Geneva, Verdana, sans-serif;
		margin: 0;
		padding: 0;
		background-color: var(--body-bg);
		color: var(--text-color);
	}

	:global(a) {
		color: var(--link-color);
		text-decoration: none;
	}

	:global(h1) {
		color: var(--title-color);
		font-size: 2em;
		font-weight: 700;
		margin: 0;
		padding: 0;
	}
	.main {
		display: grid;
		height: 100vh;
		grid-template-columns: 1fr;
		grid-template-rows: auto 1fr;
		grid-template-areas:
			'header'
			'main';
	}

	.content {
		justify-self: center;
		display: grid;
		align-items: start;
	}
</style>
