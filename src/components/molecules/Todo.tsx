//Components
import TodoButtons from "./TodoButtons"
import TodoDoneButton from "../atoms/TodoDoneButton"
import TodoText from "../atoms/TodoText"
import { ITodo } from "../templates/home"
import { useState } from "react"

//Types
type Props = {
  todo: ITodo
  changeDone: (id: string) => void
  deleteTodo: (id: string) => void
  updateTodo: (id: string, text: string) => void
}

export default function Todo({
  todo,
  changeDone,
  deleteTodo,
  updateTodo,
}: Props) {
  const [editTodo, setEditTodo] = useState(false)
  const [todoEditing, setTodoEditing] = useState(todo.text)

  return (
    <div className="flex items-start p-4 bg-slate-700 rounded">
      <TodoDoneButton id={todo.id} done={todo.done} changeDone={changeDone} />
      <TodoText
        todoEditing={todoEditing}
        setTodoEditing={setTodoEditing}
        editTodo={editTodo}
        text={todo.text}
      />
      <TodoButtons
        updateTodo={updateTodo}
        editTodo={editTodo}
        setEditTodo={setEditTodo}
        id={todo.id}
        deleteTodo={deleteTodo}
        todoEditing={todoEditing}
        setTodoEditing={setTodoEditing}
        todoText={todo.text}
      />
    </div>
  )
}
