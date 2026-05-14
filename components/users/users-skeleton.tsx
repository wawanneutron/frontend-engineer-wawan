import Skeleton from '@/components/ui/skeleton'

export default function UsersSkeleton() {
  return (
    <div className="space-y-4">
      {Array.from({ length: 5 }).map(
        (_, index) => (
          <div key={index} className="rounded-xl border p-4">
            <Skeleton className="h-5 w-40" />

            <Skeleton className="mt-3 h-4 w-64" />

            <div className="mt-4 grid grid-cols-3 gap-3">
              <Skeleton className="h-16" />
              <Skeleton className="h-16" />
              <Skeleton className="h-16" />
            </div>
          </div>
        )
      )}
    </div>
  )
}