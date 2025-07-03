import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "ShopX Docs",
  description: "ShopX Template Development Documentation",
  base: '/shopx-docs/',
  srcDir: 'src',
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
