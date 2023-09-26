import { defineConfig } from 'astro/config';
import node from '@astrojs/node'
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  //middleware: true,
  output:'hybrid',
  adapter: node({
    mode: 'standalone',
  }),
  experimental: {
    redirects: true
  },
  redirects: {
    '/': '/landing'
  }
});