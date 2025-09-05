// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from "@tailwindcss/vite";
import react from '@astrojs/react';

import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.mekeber.com',
  integrations: [
    mdx(), 
    sitemap({
      filter: (page) => {
        // Daftar path yang ingin dikecualikan.
        // Halaman yang ada di sitemap Anda:
        // /signin/
        // /signup/
        // /bandar/judol/siap/
        // Perhatikan trailing slash (/) yang ada di akhir URL.
        const excludedPaths = [
          'https://www.mekeber.com/signin/',
          'https://www.mekeber.com/signup/',
          'https://www.mekeber.com/privacy-policy/', // Jika Anda ingin mengecualikan ini juga
        ];

        // Periksa apakah halaman dimulai dengan salah satu path yang ingin dikecualikan
        // Ini lebih fleksibel untuk path bertingkat
        if (page.startsWith('https://www.mekeber.com/bandar/judol/siap')) {
          return false;
        }

        // Periksa apakah halaman ada di dalam daftar eksklusif yang ditentukan
        if (excludedPaths.includes(page)) {
          return false; // Halaman ini akan dikecualikan dari sitemap
        }

        // Jika halaman tidak cocok dengan kriteria pengecualian,
        // maka halaman tersebut akan disertakan
        return true;
      },
    }),
    react()

  ],
  output: 'server',

  vite: {
//  plugins: [
//    tailwindcss(),
//  ],
css: {

      postcss: './postcss.config.js'
    }

},

  outDir: 'build',

  adapter: node({
    mode: 'standalone',
  }),
});