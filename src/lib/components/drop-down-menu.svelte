<script>
	import { page } from '$app/stores';
	import { slide } from 'svelte/transition';
	import { state } from '$lib/stores/state';
</script>

<ul transition:slide={{ duration: 100 }}>
	{#each $state.paths as path}
		<li>
			<a class:active={$page.url.pathname === path.path} href={path.path} target={path.target}>
				<div>
					{path.name}
				</div>
			</a>
		</li>
	{/each}
	<li>
		<a href="https://bit.ly/3T0EgT2" target="_blank" rel="noreferrer">
			<img class="tickster" src="/icons/Tickster_Grey.svg" alt="Tickster" />
		</a>
	</li>
</ul>

<style>
	ul a {
		font-stretch: expanded;
		text-transform: uppercase;
		text-decoration: none;
	}

	ul a:hover {
		transition: all 0.2s ease;
		color: var(--purple);
	}

	ul {
		z-index: 100;
		position: absolute;
		right: 50px;
		top: 0px;
		background-color: var(--menu-background);
		filter: brightness(1.2);
		list-style-type: none;
		list-style-position: outside;
		padding: 5px;
		box-shadow: 6px 10px 27px 0px rgba(0, 0, 0, 0.75);
	}

	.tickster {
		height: 0.9em;
	}

	.active {
		color: var(--purple);
	}
</style>
