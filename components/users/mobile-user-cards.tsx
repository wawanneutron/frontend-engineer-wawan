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
          onClick={() => router.push(`/users/${user.id}`)}
          className="group cursor-pointer rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-200 hover:border-indigo-200 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
        >
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-lg font-semibold tracking-tight text-slate-900 group-hover:text-indigo-600 transition-colors">
                {user.name}
              </h2>
              <p className="mt-1 text-sm text-slate-500">{user.email}</p>
            </div>
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-50 text-slate-400 transition-colors group-hover:bg-indigo-50 group-hover:text-indigo-600">
              <FiChevronRight size={18} />
            </div>
          </div>

          <div className="mt-5 grid grid-cols-3 gap-3 text-center">
            <div className="rounded-xl bg-slate-50 p-3 ring-1 ring-inset ring-slate-200/50">
              <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                Posts
              </p>
              <p className="mt-1 text-lg font-semibold text-slate-700">
                {user.totalPosts}
              </p>
            </div>

            <div className="rounded-xl bg-emerald-50 p-3 ring-1 ring-inset ring-emerald-600/10">
              <p className="text-xs font-medium uppercase tracking-wider text-emerald-700">
                Done
              </p>
              <p className="mt-1 text-lg font-semibold text-emerald-700">
                {user.completedTodos}
              </p>
            </div>

            <div className="rounded-xl bg-amber-50 p-3 ring-1 ring-inset ring-amber-600/10">
              <p className="text-xs font-medium uppercase tracking-wider text-amber-700">
                Pending
              </p>
              <p className="mt-1 text-lg font-semibold text-amber-700">
                {user.pendingTodos}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
