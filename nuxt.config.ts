// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: "Devesh's Wedding Card",
      meta: [
        {
          name: "description",
          content: "Devesh's Wedding Card",
        },
        {property: "og:title", content: "Devesh's Wedding Card"},
        {property: "og:description", content: "Devesh's Wedding Card"},
        {property: "og:image", content: "https://i.ibb.co.com/Vcz9M96n/LIK06987.jpg"},
      ],
    },
  },
  modules: ["@nuxtjs/tailwindcss"],
})
