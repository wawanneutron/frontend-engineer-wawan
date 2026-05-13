'use client'

import Link from 'next/link'

import { useParams } from 'next/navigation'

import { useUser } from '@/hooks/detail-user'

export default function UserDetailPage() {
  const params = useParams()

  const id = params.id as string

  const {
    data: user,
    isLoading,
    isError,
  } = useUser(id)

  if (isLoading) {
    return (
      <div className="p-6">
        Loading user...
      </div>
    )
  }

  if (isError) {
    return (
      <div className="p-6 text-red-500">
        Failed to load user
      </div>
    )
  }

  if (!user?.id) {
    return (
      <div className="p-6">
        User not found
      </div>
    )
  }

  return (
    <main className="space-y-6 p-6">
      <Link
        href="/users"
        className="inline-block text-blue-600"
      >
        ← Back to list
      </Link>

      <div className="rounded-xl border p-6 shadow-sm">
        <h1 className="mb-6 text-3xl font-bold">
          {user.name}
        </h1>

        <div className="space-y-3">
          <p>
            <span className="font-semibold">
              Username:
            </span>{' '}
            {user.username}
          </p>

          <p>
            <span className="font-semibold">
              Email:
            </span>{' '}
            {user.email}
          </p>

          <p>
            <span className="font-semibold">
              Phone:
            </span>{' '}
            {user.phone}
          </p>

          <p>
            <span className="font-semibold">
              Website:
            </span>{' '}
            {user.website}
          </p>
        </div>

        <div className="mt-8">
          <h2 className="mb-2 text-xl font-semibold">
            Company
          </h2>

          <p>{user.company.name}</p>

          <p className="text-gray-500">
            {user.company.catchPhrase}
          </p>
        </div>

        <div className="mt-8">
          <h2 className="mb-2 text-xl font-semibold">
            Address
          </h2>

          <p>{user.address.street}</p>
          <p>{user.address.suite}</p>
          <p>{user.address.city}</p>
          <p>{user.address.zipcode}</p>
        </div>
      </div>
    </main>
  )
}