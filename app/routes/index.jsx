import { useLoaderData } from 'remix'
import { getProfiles } from '~/actions/profile'

import Header from '~/components/Header'
import UserCard from '~/components/UserCard'

export const loader = () => {
  return getProfiles()
}

export default function Index() {
  const profiles = useLoaderData()

  return (
    <section>
      <Header />
      <div className="grid sm:grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-12 ">
        {profiles.map(({ name, avatarUrl, tags }) => (
          <UserCard
            key={name}
            fullName={name}
            tags={tags}
            avatarUrl={avatarUrl}
          />
        ))}
      </div>
    </section>
  )
}
