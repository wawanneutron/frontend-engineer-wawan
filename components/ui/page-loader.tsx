export default function PageLoader() {
  return (
    <div className="flex min-h-[400px] w-full flex-col items-center justify-center py-12 md:min-h-[60vh]">
      <div className="flex flex-col items-center gap-5">
        <div className="h-10 w-10 animate-spin rounded-full border-[3px] border-slate-200 border-t-indigo-600" />
        
        <div className="space-y-1 text-center">
          <h2 className="text-sm font-semibold text-slate-900">
            Loading data
          </h2>
          <p className="text-sm text-slate-500">
            Please wait a moment...
          </p>
        </div>
      </div>
    </div>
  )
}