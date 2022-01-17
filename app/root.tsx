import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from 'remix';
import type { LinksFunction, MetaFunction } from 'remix';
import Footer from '~/components/Footer';
import Header from '~/components/Header';
import styles from './tailwind.css';

const title = 'Salty Cat Woodworks - Handmade Furniture and Homewares';
const description =
  'Salty Cat Woodworks offers quality handcrafted furniture and wooden goods that will add charm and style to your home.';

export const links: LinksFunction = () => [
  { rel: 'canonical', href: 'https://www.saltycatwoodworks.com' },
  { rel: 'stylesheet', href: styles },
  { rel: 'manifest', href: 'manifest.json' },
  { rel: 'apple-touch-icon', href: 'logo-192.png' },
  { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;700;800&family=Permanent+Marker&display=swap',
  },
];

export const meta: MetaFunction = () => ({
  title,
  description,
  ['og:locale']: 'en_US',
  ['og:type']: 'website',
  ['og:title']: title,
  ['og:site_name']: 'Salty Cat Woodworks',
  ['og:description']: description,
  ['og:url']: 'https://www.saltycatwoodworks.com/',
  ['og:image']: 'https://www.saltycatwoodworks.com/logo-saw-512.png',
  ['twitter:title']: title,
  ['twitter:description']: description,
  ['twitter:image']: 'https://www.saltycatwoodworks.com/logo-saw-512.png',
  ['twitter:card']: 'summary_large_image',
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="font-base text-slate-700 flex flex-col h-screen">
        <Header />
        <main className="grow">
          <Outlet />
        </main>
        <Footer />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === 'development' && <LiveReload />}
      </body>
    </html>
  );
}
