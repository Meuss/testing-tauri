<script>
	import Greet from '$lib/Greet.svelte';
	/**
	 * @type {String}
	 */
	 export let playerNumber;
</script>

<h1 class="mb-4">Welcome, player {playerNumber}</h1>

<p class="mb-4">What's your name, olympian?</p>

<div class="row">
	<Greet />
</div>

<style lang="postcss">
</style>
