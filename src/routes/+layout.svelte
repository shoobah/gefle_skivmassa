<script>
	import '../app.css';
	import { state } from '$lib/stores/state';

	import Header from '$lib/components/header.svelte';
	let innerHeight = 0;
</script>

<div
	class="main"
	style="--doc-height:{innerHeight}px; --content-height:{innerHeight - 120 - 66}px;"
>
	<Header />
	<div class="content">
		<slot />
	</div>
</div>

<svelte:window bind:innerHeight />
<svelte:body on:click={() => ($state.menuVisible = false)} />

<style>
</style>
