import { useQuery } from '@tanstack/react-query'
import { fetchTodos } from '@/services/api'

export function useUserTodos(userId: number) {
  return useQuery({
    queryKey: ['user-todos', userId],

    queryFn: async () => {
      const todos = await fetchTodos()
      return todos.filter((todo) => todo.userId === userId)
    },

    enabled: !!userId,
  })
}
