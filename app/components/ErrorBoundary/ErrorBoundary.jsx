import { Links, Meta, Scripts } from 'remix'

export default ({ error = '' }) => {
  // eslint-disable-next-line no-console
  console.error(error)

  return (
    <html lang="es">
      <head>
        <title>Oh no!</title>
        <Meta />
        <Links />
      </head>
      <body>
        <h1 className="text-2xl">{error}</h1>
        <Scripts />
      </body>
    </html>
  )
}
