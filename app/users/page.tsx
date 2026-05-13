'use client'

import { useMemo, useState } from 'react'

import EmptyState from '@/components/users/empty-state'
import SearchBar from '@/components/users/search-bar'
import SortSelect from '@/components/users/sort-select'
import UsersTable from '@/components/users/users-table'
import AdvancedFilter from '@/components/users/advanced-filter'
import type { FilterValue } from "@/types/filter";

import { useUsers } from '@/hooks/use-users'
import { usePosts } from '@/hooks/use-posts'
import { useTodos } from '@/hooks/use-todos'

export default function UsersPage() {
  const { data: users = [], isLoading, isError } = useUsers()
  const { data: posts = [] } = usePosts()
  const { data: todos = [] } = useTodos()

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
      return usersWithOperations.filter(
        (user) =>
          user.completedTodos >= 10
      )
    }

    if (filter === 'high-pending') {
      return usersWithOperations.filter(
        (user) =>
          user.pendingTodos >= 10
      )
    }

    return usersWithOperations
  }, [usersWithOperations, filter])

  if (isLoading) {
    return (
      <div className="p-6">
        Loading users...
      </div>
    )
  }

  if (isError) {
    return (
      <div className="p-6 text-red-500">
        Failed to load users
      </div>
    )
  }

  return (
    <main className="space-y-6 p-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <h1 className="text-3xl font-bold">
          Users
        </h1>

        <div className="flex flex-col gap-3 md:flex-row">
          <SearchBar
            value={search}
            onChange={setSearch}
          />

          <SortSelect
            value={sort}
            onChange={setSort}
          />

          <AdvancedFilter
            value={filter}
            onChange={setFilter}
          />
        </div>
      </div>

      {!filteredOperationUsers.length ? (
        <EmptyState message="No users found" />
      ) : (
        <UsersTable users={filteredOperationUsers} />
      )}
    </main>
  )
}