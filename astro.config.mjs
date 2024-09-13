import {
  defineConfig,
  //  squooshImageService
} from 'astro/config';
import netlify from '@astrojs/netlify';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  output: 'hybrid',
  adapter: netlify(),
  integrations: [tailwind(), react()],
  // image: {
  //   service: squooshImageService(),
  // },
  compressHTML: true,
});
