<script>
	import { page } from '$app/stores';
	import { state } from '$lib/stores/state';
</script>

<nav>
	{#each $state.paths as path}
		<a
			data-sveltekit-preload-code="eager"
			data-sveltekit-preload-data
			class:active={$page.url.pathname === path.path}
			href={path.path}
			target={path.target}>{path.name}</a
		>
	{/each}
	<a href={$state.ticketLink} target="_blank" rel="noreferrer">
		<img class="tickster" src="/icons/Tickster_Grey.svg" alt="Tickster" />
	</a>
</nav>

<style>
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
		text-decoration: none;
	}

	nav a:hover {
		transition: all 0.2s ease;
		color: var(--purple);
	}

	.active {
		color: var(--purple);
	}

	.tickster {
		height: 0.9em;
	}
</style>
