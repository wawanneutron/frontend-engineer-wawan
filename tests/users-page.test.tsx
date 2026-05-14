import { render, screen } from '@testing-library/react'

import UsersPage from '@/app/users/page'
import { useUsers } from '@/hooks/use-users'
import { usePosts } from '@/hooks/use-posts'
import { useTodos } from '@/hooks/use-todos'
import { mockUsers } from './mocks/users'

jest.mock('@/hooks/use-users')
jest.mock('@/hooks/use-posts')
jest.mock('@/hooks/use-todos')

jest.mock('@/components/users/users-skeleton', () => {
  return function DummySkeleton() {
    return <div>Loading</div>
  }
})

jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      push: jest.fn(),
    }
  },
}))

const mockedUseUsers = useUsers as jest.Mock
const mockedUsePosts = usePosts as jest.Mock
const mockedUseTodos = useTodos as jest.Mock

describe('UsersPage', () => {
  beforeEach(() => {
    mockedUsePosts.mockReturnValue({
      data: [],
      isLoading: false,
      isError: false,
    })
    mockedUseTodos.mockReturnValue({
      data: [],
      isLoading: false,
      isError: false,
    })
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('renders loading state', () => {
    mockedUseUsers.mockReturnValue({
      data: [],
      isLoading: true,
      isError: false,
    })

    render(<UsersPage />)

    expect(screen.getByText(/loading/i)).toBeInTheDocument()
  })

  it('renders error state', () => {
    mockedUseUsers.mockReturnValue({
      data: [],
      isLoading: false,
      isError: true,
    })

    render(<UsersPage />)

    expect(screen.getByText(/failed/i)).toBeInTheDocument()
  })

  it('renders users data', () => {
    mockedUseUsers.mockReturnValue({
      data: mockUsers,
      isLoading: false,
      isError: false,
    })

    render(<UsersPage />)

    expect(screen.getAllByText('John Doe')[0]).toBeInTheDocument()
  })
})
