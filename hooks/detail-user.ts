import { useQuery } from '@tanstack/react-query'
import { fetchUserById } from '@/services/api'

export function useUser(id: number) {
  return useQuery({
    queryKey: ['user', id],
    queryFn: () => fetchUserById(id),
    enabled: !!id,
  })
}
