<script>
	import { page } from '$app/stores';
	import PageTransition from '$lib/components/page-transition.svelte';
	import '../app.css';
	import Header from '$lib/components/header.svelte';
</script>

<div class="main">
	<Header />
	<div class="content">
		<PageTransition url={$page.url.toString()}>
			<slot />
		</PageTransition>
	</div>
	<div class="footer">
		<div>I samarbete med Medborgarskolan, Gasklockorna och Region Gävleborg</div>
	</div>
</div>

<style>
	.main {
		height: 100vh;
		display: grid;
		grid-template-rows: 120px auto 30px;
		grid-template-columns: auto;
		grid-template-areas: 'header' 'content' 'footer';
		background: var(--body-bg);
	}

	.content {
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
		justify-items: center;
		align-items: center;
		border-top: solid 1px var(--black);
		color: var(--black);
		background-color: var(--yellow);
	}

	@media (max-width: 820px) {
		.footer {
			font-size: 0.8em;
		}
	}
</style>
