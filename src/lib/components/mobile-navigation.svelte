<script>
	import DropDownMenu from './drop-down-menu.svelte';
	export let paths = [];

	let menuVisible = false;
</script>

<nav>
	<button on:click={() => (menuVisible = !menuVisible)}>
		<img src="/icons/hamburger.svg" alt="menu" />
	</button>
	{#if menuVisible}
		<DropDownMenu {paths} on:click={() => (menuVisible = false)} />
	{/if}
</nav>

<style>
	nav {
		background-color: var(--menu-background);
		color: var(--black);
		font-size: 2em;
		font-family: agency-bold;
		display: grid;
		grid-auto-flow: column;
		align-items: center;
		justify-content: end;
		padding-right: 20px;
	}

	button {
		background-color: transparent;
		border: none;
		color: var(--black);
		font-family: agency-bold;
		font-size: 1em;
		cursor: pointer;
	}

	img {
		user-select: none;
		width: 30px;
	}
</style>
