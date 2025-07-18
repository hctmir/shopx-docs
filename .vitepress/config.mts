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
          { text: 'Sub Channels', link: '/channeling/sub-channels' },
          { text: 'POIs', link: '/channeling/pois' },
          { text: 'How to', link: '/channeling/how-to' },
        ]
      },
      {
        text: 'Layers',
        collapsed: false,
        items: [
          { text: 'What are Layers?', link: '/layers/what-are-layers' },
          { text: 'Best Practices', link: '/layers/best-practices' },
        ]
      },
      {
        text: 'Styles',
        collapsed: false,
        items: [
          { text: 'Introduction', link: '/styling/introduction' },
          { text: 'Package Styles', link: '/styling/package-styles' },
          { text: 'Tactic Styles', link: '/styling/tactic-styles' },
        ]
      },
      {
        text: 'Customizations',
        collapsed: false,
        items: [
          { text: 'What are Customizations?', link: '/customizations/what-are-customizations' },
          { text: 'Variables & Merge Tags', link: '/customizations/variables-n-merge-tags' },
        ]
      },
      {
        text: 'Settings',
        collapsed: true,
        items: [
          { text: 'Introduction', link: '/settings/introduction' },
          { text: 'Metadata', link: '/settings/metadata' },
          { text: 'Variables', link: '/settings/variables' },
          { text: 'Animation Settings', link: '/settings/animation-settings' },
          { text: 'Interactivity', link: '/settings/interactivity' },
          { text: 'Print Settings', link: '/settings/print-settings' },
          { text: 'Advanced', link: '/settings/advanced' },
        ]
      },
      {
        text: 'Tutorials',
        collapsed: false,
        items: [
          { text: 'Head Card', link: '/tutorials/head-card' }
        ]
      },
      {
        text: 'Quality Assurance (QA)',
        collapsed: false,
        items: [
          { text: 'Introduction', link: '/qa-guidelines/introduction' },
          { text: 'Setup', link: '/qa-guidelines/setup' },
          { text: 'Workflow', link: '/qa-guidelines/workflow' },
          { text: 'Protips', link: '/qa-guidelines/protips' }
        ]
      },
      {
        text: 'Way Of Work',
        collapsed: false,
        items: [
          { text: 'CCE', link: '/way-of-work/cce' },
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/hctmir/shopx-docs' }
    ],
    search: {
      provider: 'local'
    }
  }
})
