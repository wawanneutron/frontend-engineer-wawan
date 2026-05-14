type Props = {
  value: string
  onChange: (value: string) => void
}

export default function SearchBar({
  value,
  onChange,
}: Props) {
  return (
    <input
      type="text"
      placeholder="Search users..."
      value={value}
      onChange={(e) =>
        onChange(e.target.value)
      }
      className="rounded-lg border px-4 py-2 transition-all duration-200 focus:outline-none focus:ring-2"
    />
  )
}