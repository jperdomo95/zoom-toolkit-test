import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';
import basicSsl from '@vitejs/plugin-basic-ssl';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    cssInjectedByJsPlugin({
      styleId: 'search-3-app-styles',
    }),
    react(),
    svgr(),
    basicSsl(),
  ],
})
