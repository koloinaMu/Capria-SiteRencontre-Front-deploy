import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify/functions';
import react from "@astrojs/react";
import node from '@astrojs/node'

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  //middleware: true,
  output:'hybrid',
  //adapter: netlify({}),
  adapter: node({
    mode: "standalone",
  }),
  /*experimental: {
    redirects: true
  },*/
  redirects: {
    '/': '/landing'
  }
});