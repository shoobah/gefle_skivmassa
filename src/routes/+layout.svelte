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
		display: grid;
		grid-template-columns: 1fr;
		background: var(--body-bg);
		background: var(--gradient);
	}

	.content {
		justify-self: center;
		display: grid;
		align-items: start;
	}
</style>
