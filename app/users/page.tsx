'use client'

import { useMemo, useState } from 'react'

import EmptyState from '@/components/users/empty-state'
import SearchBar from '@/components/users/search-bar'
import SortSelect from '@/components/users/sort-select'
import UsersTable from '@/components/users/users-table'
import AdvancedFilter from '@/components/users/advanced-filter'
import MobileUserCards from '@/components/users/mobile-user-cards'
import UsersSkeleton from '@/components/users/users-skeleton'
import ErrorState from '@/components/ui/error-state'
import type { FilterValue } from '@/types/filter'
import { useUsers } from '@/hooks/use-users'
import { usePosts } from '@/hooks/use-posts'
import { useTodos } from '@/hooks/use-todos'

export default function UsersPage() {
  const {
    data: users = [],
    isLoading: isLoadingUsers,
    isError: isErrorUsers,
    refetch: refetchUsers,
  } = useUsers()

  const {
    data: posts = [],
    isLoading: isLoadingPosts,
    isError: isErrorPosts,
    refetch: refetchPosts,
  } = usePosts()
  
  const {
    data: todos = [],
    isLoading: isLoadingTodos,
    isError: isErrorTodos,
    refetch: refetchTodos,
  } = useTodos()

  const isLoading = isLoadingUsers || isLoadingPosts || isLoadingTodos
  const isError = isErrorUsers || isErrorPosts || isErrorTodos

  const [search, setSearch] = useState('')
  const [sort, setSort] = useState('asc')
  const [filter, setFilter] = useState<FilterValue>('all')

  const filteredUsers = useMemo(() => {
    return users.filter((user) =>
      [user.name, user.email]
        .join(' ')
        .toLowerCase()
        .includes(search.toLowerCase())
    )
  }, [users, search])

  const sortedUsers = useMemo(() => {
    return [...filteredUsers].sort((a, b) => {
      if (sort === 'asc') {
        return a.name.localeCompare(b.name)
      }

      return b.name.localeCompare(a.name)
    })
  }, [filteredUsers, sort])

  const usersWithOperations = useMemo(() => {
    return sortedUsers.map((user) => {
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
  }, [sortedUsers, posts, todos])

  const filteredOperationUsers = useMemo(() => {
    if (filter === 'high-completed') {
      return usersWithOperations.filter((user) => user.completedTodos >= 10)
    }

    if (filter === 'high-pending') {
      return usersWithOperations.filter((user) => user.pendingTodos >= 10)
    }

    return usersWithOperations
  }, [usersWithOperations, filter])

  if (isLoading) return <UsersSkeleton />

  if (isError) {
    return (
      <div className="py-12">
        <ErrorState
          onRetry={() => {
            if (isErrorUsers) refetchUsers()
            if (isErrorPosts) refetchPosts()
            if (isErrorTodos) refetchTodos()
          }}
        />
      </div>
    )
  }

  return (
    <>
      <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            Users Management
          </h1>
          <p className="mt-2 text-sm text-slate-500">
            View and manage users, posts, and todos.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <SearchBar value={search} onChange={setSearch} />

          <div className="flex gap-3">
            <SortSelect value={sort} onChange={setSort} />
            <AdvancedFilter value={filter} onChange={setFilter} />
          </div>
        </div>
      </div>

      {!filteredOperationUsers.length ? (
        <EmptyState message="No users found matching your search or filters." />
      ) : (
        <>
          <div className="hidden md:block">
            <UsersTable users={filteredOperationUsers} />
          </div>

          <MobileUserCards users={filteredOperationUsers} />
        </>
      )}
    </>
  )
}
