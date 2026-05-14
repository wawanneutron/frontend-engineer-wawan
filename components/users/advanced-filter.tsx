import type { FilterValue } from "@/types/filter";
import { FiChevronDown, FiFilter } from 'react-icons/fi'

type Props = {
  value: FilterValue
  onChange: (value: FilterValue) => void
}

export default function AdvancedFilter({
  value,
  onChange,
}: Props) {
  return (
    <div className="group relative">
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
        <FiFilter className="h-4 w-4 text-slate-400 transition-colors group-hover:text-indigo-500" />
      </div>
      
      <select
        value={value}
        onChange={(e) => onChange(e.target.value as FilterValue)}
        className="w-full cursor-pointer appearance-none rounded-xl border border-slate-200 bg-white py-2.5 pl-10 pr-10 text-sm font-medium text-slate-700 shadow-sm transition-all hover:border-slate-300 hover:bg-slate-50 focus:border-indigo-500 focus:outline-none focus:ring-4 focus:ring-indigo-500/10 sm:w-auto"
      >
        <option value="all">All Users</option>
        <option value="high-completed">High Completed Todos</option>
        <option value="high-pending">High Pending Todos</option>
      </select>

      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
        <FiChevronDown className="h-4 w-4 text-slate-400 transition-colors group-hover:text-slate-600" />
      </div>
    </div>
  )
}