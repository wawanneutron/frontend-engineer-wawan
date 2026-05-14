import { User } from '@/types/user'
import ErrorState from '../ui/error-state'
import { FiUser, FiBriefcase, FiMapPin } from 'react-icons/fi'

type Props = {
  user?: User
  isError: boolean
  onRetry: () => void
}

export default function UserDetailProfile({ user, isError, onRetry }: Props) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      {isError ? (
        <ErrorState
          title="User detail not found / 404"
          description="Unable to find the requested user."
          onRetry={onRetry}
        />
      ) : user ? (
        <>
          <div className="border-b border-slate-200 bg-slate-50/50 p-6 md:p-8">
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900">
              {user.name}
            </h1>
            <p className="mt-2 flex items-center text-slate-500">
              <span className="font-medium text-slate-700">
                @{user.username}
              </span>
              <span className="mx-2 text-slate-300">&bull;</span>
              {user.company.name}
            </p>
          </div>

          <div className="grid gap-8 p-6 md:grid-cols-2 md:p-8">
            <div className="space-y-6">
              <div>
                <h2 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-slate-900">
                  <FiUser className="h-4 w-4 text-slate-500" />
                  Contact Information
                </h2>
                <div className="mt-4 space-y-3 text-sm text-slate-600">
                  <div className="flex justify-between rounded-lg bg-slate-50 p-3">
                    <span className="font-medium text-slate-900">Email</span>
                    <a
                      href={`mailto:${user.email}`}
                      className="text-indigo-600 hover:underline"
                    >
                      {user.email}
                    </a>
                  </div>
                  <div className="flex justify-between rounded-lg bg-slate-50 p-3">
                    <span className="font-medium text-slate-900">Phone</span>
                    <span>{user.phone}</span>
                  </div>
                  <div className="flex justify-between rounded-lg bg-slate-50 p-3">
                    <span className="font-medium text-slate-900">Website</span>
                    <a
                      href={`https://${user.website}`}
                      target="_blank"
                      rel="noreferrer"
                      className="text-indigo-600 hover:underline"
                    >
                      {user.website}
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-slate-900">
                  <FiBriefcase className="h-4 w-4 text-slate-500" />
                  Company
                </h2>
                <div className="mt-4 rounded-xl border border-slate-100 bg-white p-4 shadow-sm">
                  <p className="font-medium text-slate-900">
                    {user.company.name}
                  </p>
                  <p className="mt-1 text-sm italic text-slate-500">
                    &quot;{user.company.catchPhrase}&quot;
                  </p>
                  <div className="mt-3 pt-3 border-t border-slate-100">
                    <p className="inline-block rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700">
                      {user.company.bs}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-slate-900">
                <FiMapPin className="h-4 w-4 text-slate-500" />
                Address
              </h2>
              <div className="mt-4 rounded-xl border border-slate-100 bg-white p-4 shadow-sm">
                <div className="space-y-4 text-sm text-slate-600">
                  <div className="flex items-start gap-3 rounded-lg bg-slate-50 p-3">
                    <div className="mt-0.5 shrink-0 text-slate-400">
                      <FiMapPin className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-900">
                        {user.address.street}, {user.address.suite}
                      </p>
                      <p className="mt-0.5 text-slate-500">
                        {user.address.city}, {user.address.zipcode}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between rounded-lg bg-slate-50 p-3">
                    <span className="text-xs font-medium text-slate-500">
                      Geo Location
                    </span>
                    <a
                      href={`https://maps.google.com/?q=${user.address.geo.lat},${user.address.geo.lng}`}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs font-medium text-indigo-600 transition-colors hover:text-indigo-700 hover:underline"
                    >
                      {user.address.geo.lat}, {user.address.geo.lng}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </div>
  )
}
