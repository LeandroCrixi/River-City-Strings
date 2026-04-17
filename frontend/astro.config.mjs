import { defineConfig } from 'astro/config';
import sanity from "@sanity/astro";
import react from '@astrojs/react';

export default defineConfig({
  integrations: [
    sanity({
      projectId: "hjqmh4n6",
      dataset: "production",
      useCdn: false, // Set to true for production
      studioUrl: "http://localhost:3333", // Where your studio runs
    }),
    react(),
  ],
});