<script>
	import { page } from '$app/stores';
</script>

<div class="content">
	<h1>Nu blev det visst fel!</h1>
	<div class="message">{$page.status}: {$page.error?.message}</div>
	<div class="message">
		<a href="/">Ta mig hem</a>
	</div>
	<div class="emoji">🙈</div>
</div>

<style>
	.content {
		display: grid;
		justify-items: center;
		align-content: center;
		height: 100vh;
		font-size: 2em;
	}

	h1 {
		font-size: 2em;
		font-weight: 700;
		color: var(--text-color);
	}

	.emoji {
		font-size: 10em;
		font-weight: 700;
		color: var(--text-color);
		user-select: none;
	}

	.message {
		font-size: 1em;
		color: var(--text-color);
	}

	.message a {
		font-size: 0.7em;
		border-bottom: 3px solid var(--text-color);
	}
</style>
