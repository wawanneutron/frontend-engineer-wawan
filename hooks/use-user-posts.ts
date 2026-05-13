import { useQuery } from '@tanstack/react-query'
import { fetchPosts } from '@/services/api'

export function useUserPosts(userId: number) {
  return useQuery({
    queryKey: ['user-posts', userId],

    queryFn: async () => {
      const posts = await fetchPosts()
      return posts.filter((post) => post.userId === userId)
    },

    enabled: !!userId
  })
}
