'use client'

import Link from 'next/link'
import { useParams } from 'next/navigation'

import { useUser } from '@/hooks/detail-user'
import { useUserPosts } from '@/hooks/use-user-posts'
import { useUserTodos } from '@/hooks/use-user-todos'
import UserPosts from '@/components/users/user-posts'
import UserTodos from '@/components/users/user-todos'
import UserDetailProfile from '@/components/users/user-detail-profile'
import PageLoader from '@/components/ui/page-loader'

export default function UserDetailPage() {
  const params = useParams()

  const id = Number(params.id)

  const { data: user, isLoading: isLoadingUser, isError: isErrorUser, refetch: refetchUser } = useUser(id)
  const { data: posts = [], isLoading: isLoadingPosts, isError: isErrorPosts, refetch: refetchPosts } = useUserPosts(id)
  const { data: todos = [], isLoading: isLoadingTodos, isError: isErrorTodos, refetch: refetchTodos } = useUserTodos(id)

  const userPosts = posts.filter((post) => post.userId === user?.id)

  const userTodos = todos.filter((todo) => todo.userId === user?.id)

  if (isLoadingUser || isLoadingPosts || isLoadingTodos) return <PageLoader />

  return (
    <main className="mx-auto max-w-7xl space-y-8 p-4 md:p-8">
      <div>
        <Link
          href="/users"
          className="inline-flex items-center text-sm font-medium text-slate-500 transition-colors hover:text-indigo-600"
        >
          <span className="mr-2">&larr;</span> Back to users
        </Link>
      </div>

      <UserDetailProfile user={user} isError={isErrorUser} onRetry={refetchUser} />

      <div className="grid gap-6 lg:grid-cols-2">
        {
          user?.id && (
            <>
              <UserPosts posts={userPosts} isError={isErrorPosts} onRetry={refetchPosts} />
              <UserTodos todos={userTodos} isError={isErrorTodos} onRetry={refetchTodos} />
            </>
          )
        }
      </div>
    </main>
  )
}
