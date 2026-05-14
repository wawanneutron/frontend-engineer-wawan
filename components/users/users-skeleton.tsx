import Skeleton from '@/components/ui/skeleton'

export default function UsersSkeleton() {
  return (
    <div className="space-y-4 md:space-y-0 md:rounded-2xl md:border md:border-slate-200 md:bg-white md:p-0 md:shadow-sm">
      <div className="hidden md:block">
        <div className="border-b border-slate-200 bg-slate-50 p-4">
          <Skeleton className="h-4 w-full bg-slate-200/60" />
        </div>
        {Array.from({ length: 5 }).map((_, index) => (
          <div key={index} className="flex items-center justify-between border-b border-slate-100 p-4 last:border-0">
            <Skeleton className="h-5 w-48 bg-slate-200/60" />
            <Skeleton className="h-5 w-48 bg-slate-200/60" />
            <Skeleton className="h-5 w-32 bg-slate-200/60" />
            <div className="flex gap-4">
              <Skeleton className="h-6 w-10 rounded-full bg-slate-200/60" />
              <Skeleton className="h-6 w-10 rounded-full bg-slate-200/60" />
              <Skeleton className="h-6 w-10 rounded-full bg-slate-200/60" />
            </div>
            <Skeleton className="h-5 w-24 bg-slate-200/60" />
          </div>
        ))}
      </div>

      <div className="space-y-4 md:hidden">
        {Array.from({ length: 5 }).map((_, index) => (
          <div key={`mobile-${index}`} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex justify-between">
              <div>
                <Skeleton className="h-6 w-40 bg-slate-200/60" />
                <Skeleton className="mt-2 h-4 w-56 bg-slate-200/60" />
              </div>
              <Skeleton className="h-8 w-8 rounded-full bg-slate-200/60" />
            </div>
            <div className="mt-5 grid grid-cols-3 gap-3">
              <Skeleton className="h-20 rounded-xl bg-slate-200/60" />
              <Skeleton className="h-20 rounded-xl bg-slate-200/60" />
              <Skeleton className="h-20 rounded-xl bg-slate-200/60" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}