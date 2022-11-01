<script>
	import '../app.css';
	import Header from '$lib/components/header.svelte';
</script>

<div class="main">
	<Header />
	<div class="content">
		<slot />
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
		grid-area: footer;
		display: grid;
		justify-items: center;
		align-items: center;
		background-color: var(--white);
		color: var(--black);
		border-top: solid 1px var(--black);
	}

	@media (max-width: 820px) {
		.footer {
			font-size: 0.8em;
		}
	}
</style>
