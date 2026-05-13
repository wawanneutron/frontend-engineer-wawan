type Props = {
  message: string
}

export default function EmptyState({
  message,
}: Props) {
  return (
    <div className="rounded-lg border p-10 text-center text-gray-500">
      {message}
    </div>
  )
}