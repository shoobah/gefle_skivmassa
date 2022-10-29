<div class="header">
	<a class="logo rotate" href="/">
		<img alt="gefle skivmässa logo" src="/logos/GEFLE SKIVMÄSSA NEUTRAL_LOGOTYP_SVART_VIT.png" />
	</a>
	<nav>
		<a href="/">Hem</a>
		<a href="/form">Anmälan</a>
		<a href="/exhibitors">Utställare</a>
	</nav>
</div>

<style>
	.header {
		grid-area: header;
		padding: 5px;
		background-color: var(--header-bg);
		align-items: center;
		justify-items: center;
	}
	.logo {
		position: absolute;
	}
	.logo img {
		float: left;
		grid-area: sidebar;
		padding: 10px;
		width: 100px;
		z-index: 1000;
	}

	@media (max-width: 768px) {
		.logo {
			top: -20px;
			left: -20px;
		}
		.logo img {
			width: 50px;
		}
	}

	.rotate {
		animation: rotation 20s infinite linear;
	}
	@keyframes rotation {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(359deg);
		}
	}
	nav {
		display: grid;
		grid-auto-flow: column;
		justify-items: center;
		grid-gap: 3em;
		justify-items: center;
		align-items: center;
		justify-content: center;
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
