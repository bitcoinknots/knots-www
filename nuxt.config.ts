// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/eslint', '@nuxt/fonts', '@nuxtjs/tailwindcss', '@nuxtjs/color-mode'],
  devtools: { enabled: false },
  ssr: true,
  app: {
    // baseURL: '/',
    // baseURL: '/knots-gh/',
    // baseURL: '/knots-web/',
    baseURL: '/bitcoinknots.org/',
    buildAssetsDir: '/build/'
  },
  components: {
    dirs: [
      '~/components/layout',
      '~/components/macro',
      '~/components/micro',
      '~/components/nano',
    ],
  },
  compatibilityDate: '2025-07-15',
  nitro: {
    preset: 'static',
    serveStatic: true,
    prerender: {
      crawlLinks: true,
      // failOnError: false,
      // routes: [
      //   // '/sitemap.xml',
      //   ...routes
      // ]
    },
  },
  eslint: {
    config: {
      stylistic: true,
    },
  },
  fonts: {
    families: [
      {
        name: 'InterVariable',
        provider: 'local',
        src: '/fonts/InterVariable.woff2'
      },
      // {
      //   name: 'GoogleSansCode',
      //   provider: 'local',
      //   src: '/fonts/GoogleSansCode-VariableFont_wght.ttf'
      // },
    ],
    defaults: {
      weights: [400, 700],
      styles: ['normal'],
      subsets: [
        // 'cyrillic-ext',
        // 'cyrillic',
        // 'greek-ext',
        // 'greek',
        // 'vietnamese',
        'latin-ext',
        // 'latin',
      ],
    },
  },
  tailwindcss: {
    // Options
  },
  // css: ['~/assets/css/tailwindcss.css']
})
