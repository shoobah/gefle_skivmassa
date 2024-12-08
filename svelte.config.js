import adapter from "@sveltejs/adapter-vercel";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),

  kit: {
    adapter: adapter({
      runtime: `nodejs20.x`,
    }),
    files: {
      lib: "src/lib",
    },
    prerender: {
      crawl: true,
      entries: ["*"],
      handleHttpError: "warn",
    },
  },
};

export default config;
