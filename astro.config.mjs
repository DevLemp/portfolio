import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

export default defineConfig({
    adapter: vercel(),
    site: 'https://portfolio-9pvnkyw7p-christodoulos-lemperos-projects.vercel.app/', // optional, but good for SEO
});
