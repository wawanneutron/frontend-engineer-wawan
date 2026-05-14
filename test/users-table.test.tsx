import { render, screen, waitFor } from '@testing-library/react'
import UsersTable from '@/components/users/users-table'
import { fetchUsers, fetchPosts, fetchTodos } from '@/services/api'
import { UserOperation } from '@/types/user-operation'

jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      push: jest.fn(),
    }
  },
}))

describe('UsersTable Test with API', () => {
  it('renders users correctly directly from API', async () => {
    const users = await fetchUsers()
    const posts = await fetchPosts()
    const todos = await fetchTodos()

    const usersWithOperations: UserOperation[] = users.map((user) => {
      const userPosts = posts.filter((post) => post.userId === user.id)
      const userTodos = todos.filter((todo) => todo.userId === user.id)
      const completedTodos = userTodos.filter((todo) => todo.completed)
      const pendingTodos = userTodos.filter((todo) => !todo.completed)

      return {
        ...user,
        totalPosts: userPosts.length,
        completedTodos: completedTodos.length,
        pendingTodos: pendingTodos.length,
      }
    })

    render(<UsersTable users={usersWithOperations} />)


    if (usersWithOperations.length > 0) {
      const firstUser = usersWithOperations[0]

      expect(screen.getByText(firstUser.name)).toBeInTheDocument()
      expect(screen.getByText(firstUser.email)).toBeInTheDocument()
      expect(screen.getByText(firstUser.website)).toBeInTheDocument()

      const totalPostsStr = firstUser.totalPosts.toString()
      const totalPostsElements = screen.queryAllByText(totalPostsStr)
      expect(totalPostsElements.length).toBeGreaterThan(0)
    }
  })
})