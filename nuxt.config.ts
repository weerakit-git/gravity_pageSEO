// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['@/assets/css/tailwind.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  target: 'static', 
  app: {
    baseURL: '/',
      nitro: {
    preset: 'static'
  },
    head: {
      htmlAttrs: {
        lang: 'en'
      },
    },
  },
})
