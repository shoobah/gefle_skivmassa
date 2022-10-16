<script>
	import '../app.css';
	import Header from '$lib/components/header.svelte';
</script>

<div class="main">
	<Header />
	<div class="content">
		<slot />
	</div>
</div>

<style>
	.main {
		height: 100vh;
		display: grid;
		grid-template-rows: 50px 1fr;
		grid-template-columns: 20vw auto;
		grid-template-areas: 'sidebar header' 'sidebar content';
		background: var(--body-bg);
		background: var(--gradient);
	}

	.content {
		grid-area: content;
	}
</style>
