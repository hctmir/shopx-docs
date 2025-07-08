import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "ShopX Docs",
  description: "ShopX Template Development Documentation",
  base: '/shopx-docs/',
  srcDir: 'src',
  ignoreDeadLinks: true,
  head: [
    ['link', { rel: 'icon', href: 'https://res.cloudinary.com/dh3gpwrps/image/fetch/h_150,c_limit/https://cceencoderstackhkstage-videoencoder5499e89e-cg3v8idmb8b7.s3.ap-east-1.amazonaws.com/3d9f415d-887b-4504-8c4c-5be697b017b4/uploads/image/1c144d8f-ae6f-48ef-9ba6-74658476aef3.png' }]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Getting Started', link: '/getting-started/introduction' }
    ],
    sidebar: [
      {
        text: 'Getting Started',
        collapsed: false,
        items: [
          { text: 'Introduction', link: '/getting-started/introduction' },
          { text: 'Setup', link: '/getting-started/setup' },
          { text: 'Quick Start', link: '/getting-started/quick-start' }
        ]
      },
      {
        text: 'Channeling',
        collapsed: false,
        items: [
          { text: 'Channels', link: '/channeling/channels' },
        ]
      },
      {
        text: 'Layers',
        collapsed: false,
        items: [
          { text: 'What are Layers?', link: '/layers/what-are-layers' }
        ]
      },
      {
        text: 'Styles',
        collapsed: false,
        items: [
          { text: 'Introduction', link: '/styling/introduction' }
        ]
      },
      {
        text: 'Customizations',
        collapsed: false,
        items: [
          { text: 'What are Customizations?', link: '/customizations/what-are-customizations' }
        ]
      },
      {
        text: 'Settings',
        collapsed: false,
        items: [
          { text: 'Introduction', link: '/settings/introduction' },
          { text: 'Metadata', link: '/settings/metadata' },
          { text: 'Variables', link: '/settings/variables' },
          { text: 'Animation Settings', link: '/settings/animation-settings' },
          { text: 'Interactivity', link: '/settings/interactivity' },
          { text: 'Print Settings', link: '/settings/print-settings' },
          { text: 'Advanced', link: '/settings/advanced' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/hctmir/shopx-docs' }
    ],
    search: {
      provider: 'local'
    }
  }
})
