<script>
	import { invoke } from '@tauri-apps/api/tauri';

	let name = '';
	let greetMsg = '';

	async function greet() {
		// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
		greetMsg = await invoke('greet', { name });
	}
</script>

<div>
	<div class="row mb-2">
		<input id="greet-input" placeholder="Enter your name..." bind:value={name} />
		<button on:click={greet}> Greet </button>
	</div>
	<p>{greetMsg}</p>
</div>

<style>
	#greet-input {
		margin-right: 5px;
	}
</style>
