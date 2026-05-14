import { Metadata } from 'next'

import { fetchUserById } from '@/services/api'

type Props = {
  id: number
}

export async function generateUserMetadata({ id }: Props): Promise<Metadata> {
  try {
    const user = await fetchUserById(id)

    return {
      title: `${user.name} | User Details`,
      description: `View ${user.name}'s profile, posts, and todo activities.`,
    }
  } catch {
    return {
      title: 'User Not Found',
      description: 'The requested user could not be found.',
    }
  }
}
