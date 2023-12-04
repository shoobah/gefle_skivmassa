import adapter from '@sveltejs/adapter-vercel';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: preprocess(),

  kit: {
    adapter: adapter({
      runtime: `nodejs20.x`,
    }),
    files: {
      lib: 'src/lib',
    },
    prerender: {
      crawl: true,
      entries: ['*'],
      handleHttpError: 'warn',
    },
  },
};

export default config;
