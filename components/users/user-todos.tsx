import { Todo } from '@/types/todo'
import ErrorState from '../ui/error-state'
import { FiCheckSquare } from 'react-icons/fi'

type Props = {
  todos: Todo[]
  isError: boolean
  onRetry: () => void
}

export default function UserTodos({ todos, isError, onRetry }: Props) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="flex items-center gap-2 text-lg font-bold tracking-tight text-slate-900">
          <FiCheckSquare className="h-5 w-5 text-slate-500" />
          Recent Todos
        </h2>
        {todos.length > 0 && (
          <span className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-semibold text-slate-800">
            {todos.length}
          </span>
        )}
      </div>

      {isError ? (
        <ErrorState onRetry={onRetry} />
      ) : (
        <>
          <div className="space-y-3">
            {todos.slice(0, 10).map((todo) => (
              <div
                key={todo.id}
                className="flex items-start justify-between gap-4 rounded-xl border border-slate-100 bg-slate-50 p-4 transition-all duration-200 hover:border-slate-200 hover:bg-white hover:shadow-sm"
              >
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded border">
                    {todo.completed && (
                      <svg
                        className="h-3.5 w-3.5 text-emerald-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    )}
                  </div>
                  <p
                    className={`text-sm font-medium ${todo.completed ? 'text-slate-500 line-through' : 'text-slate-700'}`}
                  >
                    {todo.title}
                  </p>
                </div>

                <span
                  className={`flex-shrink-0 rounded-full px-2.5 py-0.5 text-xs font-semibold ring-1 ring-inset ${
                    todo.completed
                      ? 'bg-emerald-50 text-emerald-700 ring-emerald-600/20'
                      : 'bg-amber-50 text-amber-700 ring-amber-600/20'
                  }`}
                >
                  {todo.completed ? 'Done' : 'Pending'}
                </span>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
