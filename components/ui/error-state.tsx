import { FiAlertCircle, FiRefreshCw } from 'react-icons/fi'

type Props = {
  title?: string
  description?: string
  onRetry?: () => void
}

export default function ErrorState({
  title = 'Something went wrong',
  description = 'Failed to fetch data from the server.',
  onRetry,
}: Props) {
  return (
    <div className="flex w-full flex-col items-center justify-center rounded-2xl border border-dashed border-slate-200 bg-slate-50/50 px-6 py-12 text-center transition-all">
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-50 text-red-500 ring-4 ring-red-50/50">
        <FiAlertCircle size={24} />
      </div>

      <h2 className="mt-4 text-sm font-semibold text-slate-900">
        {title}
      </h2>

      <p className="mt-1.5 max-w-sm text-sm leading-relaxed text-slate-500">
        {description}
      </p>

      <button
        onClick={() => (onRetry ? onRetry() : window.location.reload())}
        className="group mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm ring-1 ring-inset ring-slate-200 transition-all hover:bg-slate-50 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-200 active:scale-95"
      >
        <FiRefreshCw size={14} className="text-slate-400 transition-transform group-hover:rotate-180" />
        <span>Try Again</span>
      </button>
    </div>
  )
}