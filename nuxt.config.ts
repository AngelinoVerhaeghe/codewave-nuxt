// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: [
    "@nuxtjs/google-fonts",
    "@nuxt/image",
    "@nuxt/icon",
    "@pinia/nuxt",
    "@prisma/nuxt"
  ],

  googleFonts: {
    families: {
      Inter: true,
      Lato: true,
      Montserrat: true,
      Roboto: true,
    },
  },

  image: {
    format: ["webp", "png", "jpg", "jpeg"],
  },

  icon: {
    componentName: "NuxtIcon",
  },
});