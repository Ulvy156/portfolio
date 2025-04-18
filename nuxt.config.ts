// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  css: ['@/public/assets/css/main.css'],
  modules: ['@element-plus/nuxt','@nuxt/image'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  plugins:[
    '~/plugins/aos.client.ts'
  ]
  
})