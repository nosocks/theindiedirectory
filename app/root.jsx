import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from 'remix'

import styles from './styles/app.css'
import metadata from './meta.json'

import ErrorBoundary from './components/ErrorBoundary'
import Layout from './components/Layout'

export const meta = () => metadata

export const links = () => [{ rel: 'stylesheet', href: styles }]

export default () => (
  <html lang="es">
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <Meta />
      <Links />
    </head>
    <body className="bg-carbon-50">
      <Layout>
        <Outlet />
      </Layout>
      <ScrollRestoration />
      <Scripts />
      {process.env.NODE_ENV === 'development' && <LiveReload />}
    </body>
  </html>
)

export { ErrorBoundary }
