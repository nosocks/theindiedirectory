import { useLoaderData } from 'remix'
import { getProfiles } from '~/actions/profile'

import Bar from '~/components/Bar'

export const loader = () => {
  return getProfiles()
}

export default function Index() {
  const profiles = useLoaderData()

  return (
    <section>
      <Bar />
      {profiles.map(({ name }) => (
        <h1 key={name}>{name}</h1>
      ))}
    </section>
  )
}
