'use client'

import Link from 'next/link'
import { FiArrowLeft } from 'react-icons/fi'
import { useUser } from '@/hooks/detail-user'
import { useUserPosts } from '@/hooks/use-user-posts'
import { useUserTodos } from '@/hooks/use-user-todos'
import UserPosts from '@/components/users/user-posts'
import UserTodos from '@/components/users/user-todos'
import UserDetailProfile from '@/components/users/user-detail-profile'
import PageLoader from '@/components/ui/page-loader'
import { useParams } from 'next/navigation'
import RouteBack from '@/components/ui/route-back'

export default function UserDetailClient() {
  const params = useParams()
  const id = Number(params.id)

  const {
    data: user,
    isLoading: isLoadingUser,
    isError: isErrorUser,
    refetch: refetchUser,
  } = useUser(id)

  const {
    data: posts = [],
    isLoading: isLoadingPosts,
    isError: isErrorPosts,
    refetch: refetchPosts,
  } = useUserPosts(id)

  const {
    data: todos = [],
    isLoading: isLoadingTodos,
    isError: isErrorTodos,
    refetch: refetchTodos,
  } = useUserTodos(id)

  if (isLoadingUser || isLoadingPosts || isLoadingTodos) return <PageLoader />

  return (
    <>
      <RouteBack href="/users" label="Back to users" />

      <UserDetailProfile
        user={user}
        isError={isErrorUser}
        onRetry={refetchUser}
      />

      <div className="grid gap-6 lg:grid-cols-2">
        {user?.id && (
          <>
            <UserPosts
              posts={posts}
              isError={isErrorPosts}
              onRetry={refetchPosts}
            />
            <UserTodos
              todos={todos}
              isError={isErrorTodos}
              onRetry={refetchTodos}
            />
          </>
        )}
      </div>
    </>
  )
}
