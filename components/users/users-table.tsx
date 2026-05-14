'use client'

import { FiChevronRight } from 'react-icons/fi'

import { useRouter } from 'next/navigation'
import { UserOperation } from '@/types/user-operation'

type Props = {
  users: UserOperation[]
}

export default function UsersTable({ users }: Props) {
  const router = useRouter()

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <table className="w-full border-collapse">
        <thead className="border-b border-slate-200 bg-slate-50/80 backdrop-blur-sm">
          <tr>
            <th className="p-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
              Name
            </th>
            <th className="p-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
              Email
            </th>
            <th className="p-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
              Website
            </th>
            <th className="p-4 text-center text-xs font-semibold uppercase tracking-wider text-slate-500">
              Posts
            </th>
            <th className="p-4 text-center text-xs font-semibold uppercase tracking-wider text-slate-500">
              Completed
            </th>
            <th className="p-4 text-center text-xs font-semibold uppercase tracking-wider text-slate-500">
              Pending
            </th>
            <th className="p-4 text-right text-xs font-semibold uppercase tracking-wider text-slate-500">
              Action
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-slate-200/60">
          {users.map((user) => (
            <tr
              key={user.id}
              onClick={() => router.push(`/users/${user.id}`)}
              className="group cursor-pointer transition-colors duration-200 hover:bg-slate-50/80 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
            >
              <td className="p-4 font-medium text-slate-900">{user.name}</td>
              <td className="p-4 text-sm text-slate-600">{user.email}</td>
              <td className="p-4 text-sm text-indigo-600 hover:text-indigo-700">
                {user.website}
              </td>
              <td className="p-4 text-center">
                <span className="inline-flex h-6 min-w-6 items-center justify-center rounded-full bg-slate-100 px-2 text-xs font-medium text-slate-700">
                  {user.totalPosts}
                </span>
              </td>
              <td className="p-4 text-center">
                <span className="inline-flex h-6 min-w-6 items-center justify-center rounded-full bg-emerald-50 px-2 text-xs font-medium text-emerald-700 ring-1 ring-inset ring-emerald-600/20">
                  {user.completedTodos}
                </span>
              </td>
              <td className="p-4 text-center">
                <span className="inline-flex h-6 min-w-6 items-center justify-center rounded-full bg-amber-50 px-2 text-xs font-medium text-amber-700 ring-1 ring-inset ring-amber-600/20">
                  {user.pendingTodos}
                </span>
              </td>
              <td className="p-4">
                <div className="flex items-center justify-end gap-1.5 text-sm font-medium text-slate-400 transition-colors group-hover:text-indigo-600">
                  <span>View Details</span>
                  <FiChevronRight
                    size={16}
                    className="transition-transform group-hover:translate-x-0.5"
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
