const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'NoCFO tietopankki',
  tagline:
    'Tervetuloa tietopankkiimme! Täältä löydät kaiken tarvitsemasi palvelun käyttöön ja kirjanpitoon liittyen.',
  url: 'https://docs.nocfo.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'nocfo',
  projectName: 'nocfo-docs',
  i18n: {
    defaultLocale: 'fi',
    locales: ['fi']
  },
  themeConfig: {
    navbar: {
      logo: {
        alt: 'NoCFO logo',
        src: 'img/nocfo-black.svg',
        srcDark: 'img/nocfo-white.svg'
      },
      items: [
        { to: '/', label: 'Tietopankki', position: 'left' },
        { to: '/releases', label: 'Versiot', position: 'left' }
      ]
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Sivut',
          items: [
            {
              label: 'Tietopankki',
              to: '/'
            },
            {
              label: 'Versiot',
              to: '/releases'
            }
          ]
        },
        {
          title: 'Linkit',
          items: [
            {
              label: 'nocfo.fi',
              href: 'https://nocfo.fi'
            },
            {
              label: 'GitHub',
              href: 'https://github.com/nocfo/nocfo-docs'
            }
          ]
        }
      ],
      copyright: `Copyright © 2020 - ${new Date().getFullYear()} NoCFO Oy`
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme
    }
    // algolia: {
    //   apiKey: "6e8f11cf1fcd549970f999f01b5fc656",
    //   indexName: "nocfo-docs",
    //   appId: "G7RSAHUXZX",
    // },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/nocfo/nocfo-docs',
          routeBasePath: '/'
        },
        blog: {
          path: './releases',
          routeBasePath: '/releases',
          showReadingTime: false,
          editUrl: 'https://github.com/nocfo/nocfo-docs'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      }
    ]
  ]
}
