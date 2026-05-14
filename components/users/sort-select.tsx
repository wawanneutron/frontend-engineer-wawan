type Props = {
  value: string
  onChange: (value: string) => void
}

export default function SortSelect({
  value,
  onChange,
}: Props) {
  return (
    <select
      value={value}
      onChange={(e) =>
        onChange(e.target.value)
      }
      className="rounded-lg border px-4 py-2 transition-all duration-200 focus:outline-none focus:ring-2"
    >
      <option value="asc">
        Name A-Z
      </option>

      <option value="desc">
        Name Z-A
      </option>
    </select>
  )
}