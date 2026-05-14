import Link from 'next/link'

import { FiArrowLeft } from 'react-icons/fi'

type Props = {
  href: string
  label: string
}

export default function RouteBack({ href, label }: Props) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center rounded-full bg-white px-4 py-2 text-xs font-medium text-slate-600 shadow-sm ring-1 ring-inset ring-slate-200 transition-all hover:bg-slate-50 hover:text-indigo-600 hover:ring-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 active:scale-95"
    >
      <FiArrowLeft className="mr-2 h-4 w-4 transition-transform duration-200 group-hover:-translate-x-1" />
      {label}
    </Link>
  )
}
