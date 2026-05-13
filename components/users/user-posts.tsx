import { Post } from '@/types/post'

type Props = {
  posts: Post[]
}

export default function UserPosts({ posts }: Props) {
  return (
    <div className="rounded-xl border p-6">
      <h2 className="mb-4 text-xl font-semibold">Posts</h2>

      <div className="space-y-4">
        {posts.slice(0, 5).map((post) => (
          <div key={post.id} className="rounded-lg border p-4">
            <h3 className="font-medium">{post.title}</h3>

            <p className="mt-2 text-sm text-gray-600">{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
