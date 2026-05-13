import type { FilterValue } from "@/types/filter";

type Props = {
  value: FilterValue

  onChange: (
    value: FilterValue
  ) => void
}

export default function AdvancedFilter({
  value,
  onChange,
}: Props) {
  return (
    <select
      value={value}
      onChange={(e) =>
        onChange(
          e.target.value as FilterValue
        )
      }
      className="rounded-lg border px-4 py-2"
    >
      <option value="all">
        All Users
      </option>

      <option value="high-completed">
        High Completed Todos
      </option>

      <option value="high-pending">
        High Pending Todos
      </option>
    </select>
  )
}