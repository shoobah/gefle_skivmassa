<script>
	import { page } from '$app/stores';
	const paths = [
		{ path: '/', name: 'Hem' },
		{ path: '/form', name: 'Anmälan' }
		// { path: '/bands', name: 'Bands' },
		// { path: '/about', name: 'Om Gefle Skivmässa' }
	];
</script>

<a class="logo rotate" href="/">
	<img alt="gefle skivmässa logo" src="/logos/GEFLE SKIVMÄSSA NEUTRAL_LOGOTYP_VIT_SVART.png" />
</a>
<div class="header">
	<nav>
		{#each paths as path}
			<a class:active={$page.url.pathname === path.path} href={path.path}>{path.name}</a>
		{/each}
	</nav>
	<div class="header-heading"><div>6 maj på gasklockorna i Gävle</div></div>
</div>

<style>
	.header {
		grid-area: header;
		display: grid;
		grid-template-rows: 1fr 1fr;
		height: 120px;
		width: 100vw;
		align-items: stretch;
		justify-items: stretch;
		gap: 0;
	}

	nav {
		background-color: var(--menu-background);
		color: var(--black);
		font-size: 2em;
		font-family: agency-bold;
		width: 100vw;
		display: grid;
		grid-auto-flow: column;
		justify-items: center;
		grid-gap: 40px;
		justify-items: center;
		align-items: center;
		justify-content: center;
	}

	nav a {
		font-stretch: expanded;
		text-transform: uppercase;
	}

	nav a:hover {
		transition: all 0.2s ease;
		color: var(--purple);
	}

	.active {
		color: var(--purple);
	}
	.header-heading {
		font-size: 2em;
		color: var(--black);
		background-color: var(--white);
		text-transform: uppercase;
		display: grid;
		justify-content: center;
		align-content: center;
	}
	.logo {
		position: fixed;
		top: -50px;
		left: -50px;
	}
	.logo img {
		float: left;
		grid-area: sidebar;
		padding: 10px;
		width: 300px;
		z-index: 1000;
	}

	@media (max-width: 820px) {
		.logo {
			top: -50px;
			left: -50px;
		}
		.logo img {
			width: 100px;
		}

		nav {
			font-size: 1.5em;
		}

		.header-heading {
			font-size: 1.5em;
			gap: 20px;
		}
	}

	.rotate {
		animation: rotation 30s infinite linear;
	}
	@keyframes rotation {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(359deg);
		}
	}
</style>
