import { render, screen } from '@testing-library/react'
import UsersTable from '@/components/users/users-table'
import { mockUsers } from './mocks/users'

jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      push: jest.fn(),
    }
  },
}))

describe('UsersTable Test with Mock Data', () => {
  it('renders users from mock data', async () => {
    render(<UsersTable users={mockUsers} />)

    const firstUser = mockUsers[0]

    expect(screen.getByText(firstUser.name)).toBeInTheDocument()
    expect(screen.getByText(firstUser.email)).toBeInTheDocument()
    expect(screen.getByText(firstUser.website)).toBeInTheDocument()

    const totalPostsStr = firstUser.totalPosts.toString()
    const totalPostsElements = screen.queryAllByText(totalPostsStr)
    expect(totalPostsElements.length).toBeGreaterThan(0)
  })
})
