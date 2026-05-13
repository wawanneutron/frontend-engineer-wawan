import { Todo } from '@/types/todo'

type Props = {
  todos: Todo[]
}

export default function UserTodos({ todos }: Props) {
  return (
    <div className="rounded-xl border p-6">
      <h2 className="mb-4 text-xl font-semibold">Todos</h2>

      <div className="space-y-3">
        {todos.slice(0, 10).map((todo) => (
          <div
            key={todo.id}
            className="flex items-center justify-between rounded-lg border p-4"
          >
            <p>{todo.title}</p>

            <span
              className={`rounded-full px-3 py-1 text-sm ${
                todo.completed
                  ? 'bg-green-100 text-green-700'
                  : 'bg-orange-100 text-orange-700'
              }`}
            >
              {todo.completed ? 'Completed' : 'Pending'}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
