import { fileURLToPath } from 'url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueDevTools from 'vite-plugin-vue-devtools'
import VueRouter from 'unplugin-vue-router/vite'
import tailwindcss from '@tailwindcss/vite'

/** @type {import('vite').UserConfig} */
export default defineConfig({
  plugins: [vue(), VueRouter(), VueDevTools(), tailwindcss()],
  server: {
    port: 8080
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  base: process.env.NODE_ENV === 'production'
    ? '/vue-tailwind-template/'
    : '/'
})
