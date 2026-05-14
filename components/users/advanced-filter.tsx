import type { FilterValue } from "@/types/filter";

type Props = {
  value: FilterValue
  onChange: (value: FilterValue) => void
}

export default function AdvancedFilter({
  value,
  onChange,
}: Props) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value as FilterValue)}
      className="cursor-pointer appearance-none rounded-xl border border-slate-200 bg-white px-4 py-2.5 pr-10 text-sm text-slate-700 shadow-sm transition-all focus:border-indigo-500 focus:outline-none focus:ring-4 focus:ring-indigo-500/10"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%2364748b' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
        backgroundPosition: `right 0.5rem center`,
        backgroundRepeat: `no-repeat`,
        backgroundSize: `1.5em 1.5em`,
      }}
    >
      <option value="all">All Users</option>
      <option value="high-completed">High Completed Todos</option>
      <option value="high-pending">High Pending Todos</option>
    </select>
  )
}