<script>
	import { invoke } from '@tauri-apps/api/tauri';
	import { BaseDirectory, exists, createDir, writeFile } from '@tauri-apps/api/fs';

	let name = '';
	let greetMsg = '';

	// @ts-ignore
	const createDataFile = async (name) => {
		try {
			await writeFile('swaggy-analytics.txt', name, {
				dir: BaseDirectory.Desktop
			});
		} catch (e) {
			console.log(e);
		}
	};
	async function greet() {
		// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
		greetMsg = await invoke('greet', { name });
		createDataFile(`${Date.now()} - Player name: ${name}`);
	}
</script>

<div>
	{#if !greetMsg}
		<p class="mb-4">What's your name, olympian?</p>
		<div class="row mb-2">
			<input id="greet-input" placeholder="Enter your name..." bind:value={name} />
			<button on:click={greet}> Play </button>
		</div>
	{/if}
	<h2>{greetMsg}</h2>
</div>

<style>
	#greet-input {
		margin-right: 5px;
	}
</style>
