import { defineConfig } from 'vitepress';

export const TITLE = 'Arowana Docs';
export const HOMEPAGE = 'https://arowana.finance';
export const DOCS_HOMEPAGE = 'https://docs.arowana.finance';
export const REPO = 'https://github.com/arowana-finance';
export const TWITTER = 'https://x.com/Arowana_main';
export const TG = 'https://t.me/arowanatech';
export const TOKEN = 'https://arbiscan.io/token/0x747952A59292a9B3862F3C59664B95e8B461eF45';
export const DESCRIPTION = 'Tokenized. Verified. Real Gold - OnChain.';
export const KEYWORDS = 'RWA, Arowana, Gold, Stablecoin';

export const SIDEBAR = [
  {
    "text": "Introduction",
    "items": [
      {
        "text": "Why RWA?",
        "link": "/introduction/why-rwa.html"
      },
      {
        "text": "ARW Token",
        "link": "/tokenomics.html"
      },
      {
        "text": "ARW Migration",
        "link": "/migration.html"
      },
    ],
    collapsed: false,
  },
  {
    "text": "Arowana Protocol",
    "items": [
      {
        "text": "Overview",
        "link": "/arowana-protocol-overview/index.html"
      },
      {
        "text": "Features of the Protocol",
        "link": "/arowana-protocol-overview/features-of-the-protocol.html"
      }
    ],
    collapsed: false,
  },
  {
    "text": "Core Service",
    "items": [
      {
        "text": "Core Service",
        "link": "/core-service/index.html"
      },
      {
        "text": "Tokenized Real Asset Fund",
        "link": "/core-service/tokenized-real-asset-fund.html"
      },
      {
        "text": "Arowana Swap",
        "link": "/core-service/arowana-swap.html"
      },
      {
        "text": "Arowana Finance",
        "link": "/core-service/arowana-finance.html"
      },
      {
        "text": "AGT Mint Redeem",
        "link": "/core-service/agt-mint-redeem.html"
      }
    ],
    collapsed: false,
  },
  {
    "text": "Protocol Architecture",
    "items": [
      {
        "text": "Protocol Architecture",
        "link": "/protocol-architecture/index.html"
      },
      {
        "text": "Tokenization Layer",
        "link": "/protocol-architecture/tokenization-layer.html"
      },
      {
        "text": "Origination Layer",
        "link": "/protocol-architecture/origination-layer.html"
      },
      {
        "text": "Fund Layer",
        "link": "/protocol-architecture/fund-layer.html"
      },
      {
        "text": "DeFi Layer",
        "link": "/protocol-architecture/defi-layer.html"
      }
    ],
    collapsed: false,
  },
  {
    "text": "Governance",
    "items": [
      {
        "text": "Governance",
        "link": "/governance/index.html"
      },
      {
        "text": "Voting Process",
        "link": "/governance/voting-process.html"
      },
      {
        "text": "Voting Power",
        "link": "/governance/voting-power.html"
      },
      {
        "text": "Voting Mechanism",
        "link": "/governance/voting-mechanism.html"
      },
      {
        "text": "Proposal",
        "link": "/governance/proposal.html"
      },
      {
        "text": "Governance Sustainability",
        "link": "/governance/governance-sustainability.html"
      },
      {
        "text": "Governance Incentives",
        "link": "/governance/governance-incentives.html"
      },
      {
        "text": "Asset verification and Audit",
        "link": "/governance/asset-verification-and-audit.html"
      }
    ],
    collapsed: false,
  },
  {
    "text": "Roadmap",
    "items": [
      {
        "text": "Roadmap",
        "link": "/roadmap/index.html"
      },
      {
        "text": "Vision",
        "link": "/roadmap/vision.html"
      },
    ],
    collapsed: false,
  },
  {
    "text": "",
    "items": [
      {
        "text": "Links",
        "link": "/links.html"
      },
      {
        "text": "Team",
        "link": "/team.html"
      },
      {
        "text": "Disclaimer",
        "link": "/disclaimer.html"
      }
    ]
  },
]

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: TITLE,

  description: DESCRIPTION,

  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],

    ['link', { rel: 'canonical', href: DOCS_HOMEPAGE }],
    ['link', { rel: 'canonical', href: HOMEPAGE}],
    ['link', { rel: 'canonical', href: REPO }],
    ['meta', { name: 'description', content: DESCRIPTION }],
    ['meta', { name: 'keywords', content: KEYWORDS }],

    // og
    ['meta', { property: 'og:title', content: TITLE }],
    ['meta', { property: 'og:description', content: DESCRIPTION }],
    ['meta', { property: 'og:image', content: 'logo.png' }],
    ['meta', { property: 'og:url', content: HOMEPAGE }],

    // seo
    ['meta', { name: 'robots', content: 'index,follow' }],
    ['meta', { name: 'googlebot', content: 'index,follow' }],
  ],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.png',
  
    nav: [
      { text: 'Docs', link: '/' },
      { text: 'About', link: HOMEPAGE },
      { text: 'ARW', link: TOKEN },
    ],

    sidebar: SIDEBAR,

    socialLinks: [
      { icon: 'homepage', link: HOMEPAGE },
      { icon: 'twitter', link: TWITTER },
      { icon: 'telegram', link: TG },
      { icon: 'github', link: REPO },
    ],
  },
});
