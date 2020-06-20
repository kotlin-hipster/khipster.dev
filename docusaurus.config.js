module.exports = {
  title: 'KHipster',
  tagline: 'Set up a modern Full Stack web app by running a single command.',
  url: 'https://khipster.dev',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'sendilkumarn',
  projectName: 'khipster.dev',
  themeConfig: {
    image: 'img/khip.png',
    twitterImage: 'img/khip.png',
    imageAlt: 'Kotlin Hipster Logo',
    announcementBar: {
      id: 'supportus',
      content:
        '⭐️ If you like KHipster, give it a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/jhipster/jhipster-kotlin">GitHub</a>! ⭐️',
    },
    googleAnalytics: {
      trackingID: 'UA-165286246-1',
      // Optional fields.
      anonymizeIP: true, // Should IPs be anonymized?
    },
    navbar: {
      title: 'KHipster',
      logo: {
        alt: 'KHipster Logo',
        src: 'img/khip.svg',
      },
      links: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        // {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/jhipster/jhipster-kotlin',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/khipster',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/sendilkumarn',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              href: 'https://dev.to/sendilkumarn/kotlin-hipster-spring-boot-kotlin-4956',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/jhipster/jhipster-kotlin',
            },
          ],
        },
        {
          title: 'Contributions',
          items: [
            {
              label: 'GitHub Sponsors',
              href: 'https://github.com/sponsors/sendilkumarn',
            },
            {
              label: 'Open Collective',
              href: 'https://opencollective.com/generator-jhipster',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Sendilkumarn. Built with Docusaurus.`,
    },
  },
  plugins: [require.resolve('@docusaurus/plugin-google-analytics')],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'gettingStarted',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/sendilkumarn/khipster.dev/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
