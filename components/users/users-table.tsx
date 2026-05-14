'use client'

import { FiChevronRight } from 'react-icons/fi'

import { useRouter } from 'next/navigation'
import { UserOperation } from '@/types/user-operation'

type Props = {
  users: UserOperation[]
}

export default function UsersTable({
  users,
}: Props) {
  const router = useRouter()

  return (
    <div className="overflow-x-auto rounded-xl border">
      <table className="w-full border-collapse">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-4 text-left">
              Name
            </th>

            <th className="p-4 text-left">
              Email
            </th>

            <th className="p-4 text-left">
              Website
            </th>

            <th className="p-4 text-center">
              Posts
            </th>

            <th className="p-4 text-center">
              Completed
            </th>

            <th className="p-4 text-center">
              Pending
            </th>

            <th className="p-4 text-right">
              Action
            </th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr
              key={user.id}
              onClick={() =>
                router.push(`/users/${user.id}`)
              }
              className="group cursor-pointer border-t transition-all duration-200 hover:bg-gray-50 focus:outline-none focus:ring-2"
            >
              <td className="p-4 font-medium">
                {user.name}
              </td>

              <td className="p-4">
                {user.email}
              </td>

              <td className="p-4 text-blue-600">
                {user.website}
              </td>

              <td className="p-4 text-center">
                {user.totalPosts}
              </td>

              <td className="p-4 text-center text-green-600">
                {user.completedTodos}
              </td>

              <td className="p-4 text-center text-orange-500">
                {user.pendingTodos}
              </td>

              <td className="p-4">
                <div className="flex items-center justify-end gap-2 text-sm text-gray-500 transition group-hover:text-black">
                  <span>
                    View Details
                  </span>

                  <FiChevronRight
                    size={18}
                    className="transition group-hover:translate-x-1"
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}