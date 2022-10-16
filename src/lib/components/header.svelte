<a href="/">
	<img alt="gefle skivmässa logo" src="/logos/GEFLE SKIVMÄSSA NEUTRAL_LOGOTYP_SVART_GUL.png" />
</a>
<div class="header">
	<nav>
		<a href="/">Hem</a>
		<a href="/visitors">Besökare</a>
		<a href="/exhibitors">Utställare</a>
	</nav>
</div>

<style>
	.header {
		grid-area: header;
		display: grid;
		padding: 5px;
		background-color: var(--header-bg);
		align-items: center;
		justify-items: center;
	}
	img {
		grid-area: sidebar;
		padding: 10px;
		width: 15vw;
		z-index: 1000;
	}

	nav {
		display: grid;
		grid-auto-flow: column;
		grid-gap: 3em;
		justify-items: center;
		align-items: center;
	}

	nav a {
		font-stretch: expanded;
		text-transform: uppercase;
	}

	nav a:hover {
		transform: scale(1.2);
		transition: all 0.2s ease;
	}
</style>
