import { Post } from '@/types/post'
import ErrorState from '../ui/error-state'
import { FiFileText } from 'react-icons/fi'

type Props = {
  posts: Post[]
  isError: boolean
  onRetry: () => void
}

export default function UserPosts({ posts, isError, onRetry }: Props) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="flex items-center gap-2 text-lg font-bold tracking-tight text-slate-900">
          <FiFileText className="h-5 w-5 text-slate-500" />
          Recent Posts
        </h2>
        {posts.length > 0 && (
          <span className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-semibold text-slate-800">
            {posts.length}
          </span>
        )}
      </div>

      {isError ? (
        <ErrorState onRetry={onRetry} />
      ) : (
        <>
          <div className="space-y-4">
            {posts.slice(0, 5).map((post) => (
              <div
                key={post.id}
                className="group rounded-xl border border-slate-100 bg-slate-50 p-5 transition-all duration-200 hover:border-indigo-100 hover:bg-indigo-50/50 hover:shadow-sm"
              >
                <h3 className="font-semibold text-slate-900 line-clamp-1">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 line-clamp-2">
                  {post.body}
                </p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
