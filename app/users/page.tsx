'use client'

import { useMemo, useState } from 'react'

import EmptyState from '@/components/users/empty-state'
import SearchBar from '@/components/users/search-bar'
import SortSelect from '@/components/users/sort-select'
import UsersTable from '@/components/users/users-table'

import { useUsers } from '@/hooks/use-users'

export default function UsersPage() {
  const { data = [], isLoading, isError } =
    useUsers()

  const [search, setSearch] = useState('')
  const [sort, setSort] = useState('asc')

  const filteredUsers = useMemo(() => {
    return data.filter((user) =>
      [user.name, user.email]
        .join(' ')
        .toLowerCase()
        .includes(search.toLowerCase())
    )
  }, [data, search])

  const sortedUsers = useMemo(() => {
    return [...filteredUsers].sort((a, b) => {
      if (sort === 'asc') {
        return a.name.localeCompare(b.name)
      }

      return b.name.localeCompare(a.name)
    })
  }, [filteredUsers, sort])

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
        </div>
      </div>

      {!sortedUsers.length ? (
        <EmptyState message="No users found" />
      ) : (
        <UsersTable users={sortedUsers} />
      )}
    </main>
  )
}