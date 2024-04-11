// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: './base',
  devtools: {
    // enabled: false,
  },
  sourcemap: true,

  /**
   * Specific for route rendering
   */
  routeRules: {
    csr: {
      ssr: false
    },
    // ssr: {
    //   ssr: true // by default
    // },
    'pre/*': {
      prerender: true
    },
    isr: {
      isr: 120
    },
    swr: {
      swr: 120
    }
  },

  content: {
    experimental: {
      search: true
    }
  },

  app: {
    head: {
      titleTemplate: '%s'
    }
  },

  /**
   * Specific for NuxtPicture / NuxtImage
   */
  image: {
    domains: [
      'tmdb.org',
      'image.tmdb.org',
      'picfiles.alphacoders.com'
    ]
  },

  site: {
    url: 'https://mc-nuxt-app.netlify.com',
  },

  modules: [
    "@nuxt/image",
    '@nuxt/content',
    "@sidebase/nuxt-auth",
    "@nuxtjs/seo"
  ],

  auth: {
    baseURL: 'http://localhost:3030/',
    provider: {
      type: 'local',
      endpoints: {
        signIn: { path: '/authentication', method: 'post' },
        signOut: { path: '/authentication', method: 'delete' },
        signUp: { path: '/users', method: 'post' },
        getSession: { path: '/me', method: 'get' }
      },
      pages: {
        login: '/auth/login'
      },
      token: {
        signInResponseTokenPointer: '/accessToken',
      },
      sessionDataType: { id: 'string', email: 'string', profile: 'string' }
    }
  }
})
