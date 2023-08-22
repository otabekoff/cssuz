export default defineAppConfig({
  docus: {
    title: 'CSS - O\'zbek tilida',
    description: 'CSS veb-texnologiyasini o\'rganish uchun eng yaxshi joy.',
    image: 'https://user-images.githubusercontent.com/904724/185365452-87b7ca7b-6030-4813-a2db-5e65c785bf88.png',

    socials: {
      twitter: 'nuxt_js',
      github: 'nuxt-themes/docus',
      nuxt: {
        label: 'Nuxt',
        icon: 'simple-icons:nuxtdotjs',
        href: 'https://nuxt.com'
      }
    },

    github: {
      dir: '.starters/default/content',
      branch: 'main',
      repo: 'docus',
      owner: 'nuxt-themes',
      edit: true
    },

    aside: {
      level: 0,
      collapsed: false,
      exclude: []
    },

    main: {
      padded: true,
      fluid: true
    },

    header: {
      logo: false,
      showLinkIcon: true,
      exclude: [],
      fluid: true,
      title: 'CSS - O\'zbek tilida'
    },

    footer: {
      credits: {
        text: 'Created by Otabek Sadiridinov',
        href: 'https://css.nuxt.space'
      },

      fluid: true
    },

    titleTemplate: '%s · CSS (O\'zbek tilida)'
  }
})