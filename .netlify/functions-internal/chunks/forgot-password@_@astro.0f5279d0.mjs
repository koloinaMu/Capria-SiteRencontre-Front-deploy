export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';
import './astro.cb8f9efd.mjs';
import 'html-escaper';
import 'cookie';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import 'path-to-regexp';
import 'mime';
import 'string-width';
import 'react';
import 'react-dom/server';

const page = () => import('./prerender.ebdf2447.mjs').then(n => n.f);

export { page };
