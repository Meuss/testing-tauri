<script>
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	let currentStandBy = false;

	function toggleStandBy() {
		currentStandBy = !currentStandBy;
		if (currentStandBy) {
			dispatch('yes');
		} else {
			dispatch('no');
		}
	}
</script>

<button class="fixed bottom-4 right-4 z-10" on:click={toggleStandBy}> Toggle StandBy </button>
