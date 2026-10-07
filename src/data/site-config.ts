/* ------------------------------------------------------------------ */
/* CHARCOAL HUB — per-site config: name, nav, footer, description.     */
/* Knowledge.guotan (buyer education knowledge hub).                   */
/* ------------------------------------------------------------------ */

export type NavItem = { label: string; href: string; external?: boolean };

export type SiteConfig = {
  siteKey: 'main' | 'data' | 'manufacturer' | 'testing' | 'knowledge';
  name: string;
  shortName: string;
  description: string;
  nav: NavItem[];
  footerCols: { title: string; links: NavItem[] }[];
};

export const site: SiteConfig = {
  siteKey: 'knowledge',
  name: 'Charcoal Hub Knowledge',
  shortName: 'Knowledge',
  description:
    'Buyer-education knowledge hub for B2B charcoal sourcing: how to compare hookah and coconut shell charcoal, read specifications, evaluate ash and burn time, qualify suppliers, and plan container loading.',
  nav: [
    { label: 'Home', href: '/' },
    { label: 'Buying', href: '/#buying' },
    { label: 'Sourcing', href: '/#sourcing' },
    { label: 'Quality', href: '/#quality' },
  ],
  footerCols: [
    {
      title: 'Charcoal Hub',
      links: [
        { label: 'Main site', href: 'https://guotan.com/', external: true },
        { label: 'Products', href: 'https://guotan.com/products/', external: true },
        { label: 'Request a Quote', href: 'https://guotan.com/request-quote/', external: true },
      ],
    },
    {
      title: 'Knowledge',
      links: [
        { label: 'All articles', href: '/knowledge/' },
        { label: 'Buying decisions', href: '/#buying' },
        { label: 'Sourcing & logistics', href: '/#sourcing' },
        { label: 'Quality & compliance', href: '/#quality' },
      ],
    },
    {
      title: 'Data & Verification',
      links: [
        { label: 'Specification data', href: 'https://data.guotan.com/', external: true },
        { label: 'Manufacturer directory', href: 'https://manufacturer.guotan.com/', external: true },
        { label: 'Testing & verification', href: 'https://testing.guotan.com/', external: true },
      ],
    },
  ],
};

export default site;
