<script>
	import Player from '$lib/Player.svelte';
</script>

<div class="flex flex-col justify-between h-screen">
	<div class="flex-1 text-center p-4 flex flex-col justify-center rotate-180">
		<Player playerNumber="1" />
	</div>
	<div class="h-1 bg-torange w-full" />
	<div class="flex-1 text-center p-4 flex flex-col justify-center">
		<Player playerNumber="2" />
	</div>
</div>

<style lang="postcss">
</style>
