import staticAdapter from "@sveltejs/adapter-static";
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: staticAdapter(),
  },
  preprocess: [
		vitePreprocess()
	]
};

export default config;
