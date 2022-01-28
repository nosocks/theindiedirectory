import { useLoaderData } from 'remix'
import { getProfiles } from '~/actions/profile'

export const loader = () => {
  return getProfiles()
}

export default function Index() {
  const profiles = useLoaderData()

  return (
    <div>
      {profiles.map(({ name }) => (
        <h1 key={name}>{name}</h1>
      ))}
    </div>
  )
}
