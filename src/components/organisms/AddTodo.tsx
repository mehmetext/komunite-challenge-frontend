//Components
import AddTodoInput from "../molecules/AddTodoInput"
import AddTodoButton from "../molecules/AddTodoButton"

export default function AddTodo() {
  return (
    <div className="sticky top-0 bg-slate-600 shadow-lg flex items-center">
      <div className="container mx-auto flex items-center">
        <AddTodoInput />
        <AddTodoButton />
      </div>
    </div>
  )
}
