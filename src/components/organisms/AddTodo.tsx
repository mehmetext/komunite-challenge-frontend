import { Dispatch, SetStateAction } from "react"

//Components
import AddTodoInput from "../molecules/AddTodoInput"
import AddTodoButton from "../molecules/AddTodoButton"

//Types
type Props = {
  todo: string
  setTodo: Dispatch<SetStateAction<string>>
  addTodo: () => void
}

export default function AddTodo({ todo, setTodo, addTodo }: Props) {
  return (
    <div className="sticky top-0 bg-slate-600 shadow-lg flex items-center">
      <div className="container mx-auto flex items-center">
        <AddTodoInput todo={todo} setTodo={setTodo} />
        <AddTodoButton addTodo={addTodo} />
      </div>
    </div>
  )
}
