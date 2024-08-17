// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },

  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      bodyAttrs: {
        class: ["relative scroll-smooth antialiased font-lato"],
      },
      title: "CodeWave",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: "CodeWave" },
      ],
      link: [{ rel: "icon", type: "image/png", href: "/favicon.ico" }],
    },
  },

  css: ["~/assets/css/main.css"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: ["@nuxtjs/google-fonts", "@nuxt/image", "@nuxt/icon", "@pinia/nuxt"],

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
