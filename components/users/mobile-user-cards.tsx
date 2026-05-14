'use client'

import { useRouter } from 'next/navigation'
import { FiChevronRight } from 'react-icons/fi'
import { UserOperation } from '@/types/user-operation'

type Props = {
  users: UserOperation[]
}

export default function MobileUserCards({ users }: Props) {
  const router = useRouter()

  return (
    <div className="space-y-4 md:hidden">
      {users.map((user) => (
        <div
          key={user.id}
          onClick={() =>
            router.push(`/users/${user.id}`)
          }
          className="cursor-pointer rounded-xl border p-4 transition-all duration-200 hover:bg-gray-50 focus:outline-none focus:ring-2"
        >
          <div className="flex items-start justify-between">
            <div>
              <h2 className="font-semibold">
                {user.name}
              </h2>

              <p className="text-sm text-gray-500">
                {user.email}
              </p>
            </div>

            <FiChevronRight size={20} />
          </div>

          <div className="mt-4 grid grid-cols-3 gap-3 text-center">
            <div className="rounded-lg bg-gray-100 p-3">
              <p className="text-sm text-gray-500">
                Posts
              </p>

              <p className="font-bold">
                {user.totalPosts}
              </p>
            </div>

            <div className="rounded-lg bg-green-100 p-3">
              <p className="text-sm text-green-700">
                Done
              </p>

              <p className="font-bold text-green-700">
                {user.completedTodos}
              </p>
            </div>

            <div className="rounded-lg bg-orange-100 p-3">
              <p className="text-sm text-orange-700">
                Pending
              </p>

              <p className="font-bold text-orange-700">
                {user.pendingTodos}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}