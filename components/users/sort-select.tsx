import { FiChevronDown, FiList } from 'react-icons/fi'

type Props = {
  value: string
  onChange: (value: string) => void
}

export default function SortSelect({
  value,
  onChange,
}: Props) {
  return (
    <div className="group relative">
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
        <FiList className="h-4 w-4 text-slate-400 transition-colors group-hover:text-indigo-500" />
      </div>
      
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full cursor-pointer appearance-none rounded-xl border border-slate-200 bg-white py-2.5 pl-10 pr-10 text-sm font-medium text-slate-700 shadow-sm transition-all hover:border-slate-300 hover:bg-slate-50 focus:border-indigo-500 focus:outline-none focus:ring-4 focus:ring-indigo-500/10 sm:w-auto"
      >
        <option value="asc">Name A-Z</option>
        <option value="desc">Name Z-A</option>
      </select>

      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
        <FiChevronDown className="h-4 w-4 text-slate-400 transition-colors group-hover:text-slate-600" />
      </div>
    </div>
  )
}