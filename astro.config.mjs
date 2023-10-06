import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify/functions';

import react from "@astrojs/react";

export default defineConfig({
  integrations: [react()],
  //middleware: true,
  output:'hybrid',
  /*adapter: netlify({}),*/
  adapter: netlify({}),
  /*experimental: {
    redirects: true
  },
  redirects: {
    '/': '/landing'
  }*/
});