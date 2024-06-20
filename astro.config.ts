import { defineConfig } from 'astro/config';
import { nodePolyfills } from 'vite-plugin-node-polyfills'
import sitemap from '@astrojs/sitemap';
import UnoCSS from 'unocss/astro';
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  // used to generate images
  site: process.env.VERCEL_ENV === 'production' ? 'https://brutal.elian.codes/' : process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}/` : 'https://localhost:3000/',
  trailingSlash: 'ignore',
  integrations: [sitemap(), UnoCSS({
    injectReset: true
  }), react()],
  vite: {
    optimizeDeps: {
      exclude: ['@resvg/resvg-js']
    },
    plugins: [
      nodePolyfills(),
    ]
  }
});