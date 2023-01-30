<script>
	import '../app.css';
	import { page } from '$app/stores';
	import { state } from '$lib/stores/state';

	import PageTransition from '$lib/components/page-transition.svelte';
	import Header from '$lib/components/header.svelte';

	let innerHeight = 0;
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
			<div style="grid-row:1">
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
			<div>
				<a href="https://www.folkbildningsforum.se/" target="_blank" rel="noreferrer">
					<img src="/icons/Folkbildningsforum_Logo_Liggande.png" alt="Folkbildningsforum" />
				</a>
			</div>
			<div>
				<a href="https://elite.se/sv/hotell/gavle/grand-hotel/" target="_blank" rel="noreferrer">
					<img src="/icons/EliteGrand_logo.png" alt="Elite Grand Gävle" />
				</a>
			</div>
		</div>
	</div>
</div>

<svelte:window bind:innerHeight />
<svelte:body on:click={() => ($state.menuVisible = false)} />

<style>
</style>
