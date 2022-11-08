<script>
	import { page } from '$app/stores';
	import { state } from '$lib/stores/state';

	import PageTransition from '$lib/components/page-transition.svelte';
	import '../app.css';
	import Header from '$lib/components/header.svelte';

	let innerHeight = 0;

	export const prerender = true;
</script>

<div
	class="main"
	style="--doc-height:{innerHeight}px; --content-height:{innerHeight - 120 - 66}px;"
>
	<Header />
	<div class="content">
		<PageTransition url={$page.url.toString()}>
			<slot />
		</PageTransition>
	</div>
	<div class="footer">
		<div class="footer-content">
			<div>
				<a href="https://www.gavle.se/" target="_blank" rel="noreferrer">
					<img class="kommun" src="/icons/Gavle_kommun.svg" alt="Gävle kommun" />
				</a>
			</div>
			<div>
				<a href="https://www.gavle.se/gasklockorna" target="_blank" rel="noreferrer">
					<img src="/icons/gasklockorna loggo.png" alt="Gasklockorna" />
				</a>
			</div>
			<div>
				<a href="https://www.medborgarskolan.se/" target="_blank" rel="noreferrer">
					<img src="/icons/mebo_vit.svg" alt="Medborgarskolan" />
				</a>
			</div>
			<div>
				<a
					href="https://www.regiongavleborg.se/kultur/verksamhet/musik/"
					target="_blank"
					rel="noreferrer"
				>
					<img src="/icons/region_gavleborg vit.svg" alt="Region gävleborg" />
				</a>
			</div>
		</div>
	</div>
</div>

<svelte:window bind:innerHeight />
<svelte:body on:click={() => ($state.menuVisible = false)} />

<style>
	.main {
		height: var(--doc-height);
		display: grid;
		grid-template-rows: 120px auto 66px;
		grid-template-columns: auto;
		grid-template-areas: 'header' 'content' 'footer';
		background: var(--body-bg);
	}

	.content {
		min-height: var(--content-height);
		grid-area: content;
		display: grid;
		justify-items: center;
		align-items: start;
		overflow: auto;
	}

	.footer {
		font-family: agency-bold;
		grid-area: footer;
		display: grid;
		grid-auto-flow: column;
		justify-items: center;
		align-items: center;
		border-top: solid 1px var(--black);
		color: var(--black);
		background-color: var(--purple);
		height: 65px;
	}

	.footer-content {
		display: grid;
		grid-auto-flow: column;
		justify-items: center;
		align-items: center;
		width: 70vw;
	}

	.footer-content img {
		height: 40px;
	}

	img.kommun {
		height: 50px;
	}

	@media (max-width: 820px) {
		.main {
			grid-template-rows: 120px auto 61px;
		}
		.footer {
			height: 60px;
		}

		.footer-content {
			width: 100vw;
		}

		.footer-content img {
			height: 20px;
		}

		.kommun {
			height: 30px;
		}
	}
</style>
