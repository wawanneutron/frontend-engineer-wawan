import Link from 'next/link'
import { FiArrowRight, FiZap } from 'react-icons/fi'

export default function Home() {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center px-6 text-center">
      <div className="space-y-6">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-sm ring-1 ring-slate-900/5">
          <FiZap className="h-8 w-8 text-indigo-600" />
        </div>

        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          Frontend Engineer Test
        </h1>
        
        <p className="mx-auto max-w-md text-base text-slate-500 sm:text-lg">
          A minimalist dashboard to manage users, view recent posts, and track completed tasks.
        </p>

        <div className="pt-4">
          <Link
            href="/users"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-8 py-3.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-slate-800 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2 active:scale-95"
          >
            <span>Enter Users Management</span>
            <FiArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="pt-8">
          <p className="text-sm text-slate-500">
            Developed by{' '}
            <a
              href="http://hellowawansetiawan.my.id/"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-indigo-600 transition-colors hover:text-indigo-700 hover:underline"
            >
              Wawan Setiawan
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
