//Types
type Props = {
  addTodo: () => void
}

export default function AddTodoButton({ addTodo }: Props) {
  return (
    <button
      className="bg-slate-500 h-7 w-7 rounded-full mr-5 sm:mr-0"
      onClick={addTodo}
    >
      +
    </button>
  )
}
