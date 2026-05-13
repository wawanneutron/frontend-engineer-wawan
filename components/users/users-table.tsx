'use client'

import { FiChevronRight } from 'react-icons/fi'

import { useRouter } from 'next/navigation'
import { User } from '@/types/user'

type Props = {
  users: User[]
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
              className="group cursor-pointer border-t transition hover:bg-gray-50"
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