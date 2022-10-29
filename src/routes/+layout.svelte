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
		grid-template-rows: 120px auto;
		grid-template-columns: auto;
		grid-template-areas: 'header' 'content';
		background: var(--body-bg);
		background: var(--gradient);
	}

	.content {
		grid-area: content;
		display: grid;
		justify-items: center;
		align-items: start;
	}
</style>
