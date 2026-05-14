import { render, screen } from '@testing-library/react'

import UserDetailClient from '@/app/users/[id]/user-detail-client'
import { useUser } from '@/hooks/detail-user'
import { useUserPosts } from '@/hooks/use-user-posts'
import { useUserTodos } from '@/hooks/use-user-todos'
import { mockUsers } from './mocks/users'

jest.mock('@/hooks/detail-user')
jest.mock('@/hooks/use-user-posts')
jest.mock('@/hooks/use-user-todos')

jest.mock('next/navigation', () => ({
  useParams() {
    return { id: '1' }
  },
  useRouter() {
    return {
      push: jest.fn(),
    }
  },
}))

jest.mock('@/components/ui/page-loader', () => {
  return function DummyPageLoader() {
    return <div>Loading</div>
  }
})

const mockedUseUser = useUser as jest.Mock
const mockedUseUserPosts = useUserPosts as jest.Mock
const mockedUseUserTodos = useUserTodos as jest.Mock

describe('UserDetailClient', () => {
  beforeEach(() => {
    mockedUseUserPosts.mockReturnValue({
      data: [],
      isLoading: false,
      isError: false,
    })

    mockedUseUserTodos.mockReturnValue({
      data: [],
      isLoading: false,
      isError: false,
    })
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('renders loading state', () => {
    mockedUseUser.mockReturnValue({
      data: null,
      isLoading: true,
      isError: false,
    })

    render(<UserDetailClient />)

    expect(screen.getByText(/loading/i)).toBeInTheDocument()
  })

  it('renders error state', () => {
    mockedUseUser.mockReturnValue({
      data: null,
      isLoading: false,
      isError: true,
    })

    render(<UserDetailClient />)

    expect(screen.getByText(/user detail not found/i)).toBeInTheDocument()
  })

  it('renders user detail', () => {
    mockedUseUser.mockReturnValue({
      data: mockUsers[0],
      isLoading: false,
      isError: false,
    })

    render(<UserDetailClient />)

    expect(screen.getAllByText('John Doe')[0]).toBeInTheDocument()
  })
})
