import { Dispatch, SetStateAction } from "react"

//Types
type Props = {
  todo: string
  setTodo: Dispatch<SetStateAction<string>>
}

export default function AddTodoInput({ todo, setTodo }: Props) {
  return (
    <input
      type="text"
      name="todo"
      id="todo"
      placeholder="Add todo..."
      value={todo}
      onChange={(e) => setTodo(e.target.value)}
      className="outline-none py-3 bg-transparent flex-1 px-5 sm:mr-5 sm:px-0"
    />
  )
}
