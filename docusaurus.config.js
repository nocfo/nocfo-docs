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
        }
      ],
      copyright: `Copyright © 2020 - ${new Date().getFullYear()} NoCFO Oy`
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme
    },
    gtag: {
      trackingID: 'G-90LEP99B24',
      anonymizeIP: true
    }
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/nocfo/nocfo-docs/edit/main',
          routeBasePath: '/',
          showLastUpdateTime: true
        },
        blog: {
          path: './releases',
          routeBasePath: '/releases',
          showReadingTime: false,
          editUrl: 'https://github.com/nocfo/nocfo-docs/edit/main'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5
        }
      }
    ]
  ]
}
