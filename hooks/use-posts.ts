import { useQuery } from '@tanstack/react-query'
import { fetchPosts } from '@/services/api'

export function usePosts() {
  return useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
  })
}
