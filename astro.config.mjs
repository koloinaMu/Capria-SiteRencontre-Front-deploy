import { defineConfig } from 'astro/config';

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