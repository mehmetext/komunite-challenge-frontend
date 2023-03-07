import { Dispatch, SetStateAction } from "react"

//Components
import Button from "../atoms/Button"

//Types
type Props = {
  deleteTodo: (id: string) => void
  id: string
  editTodo: boolean
  setEditTodo: Dispatch<SetStateAction<boolean>>
  updateTodo: (id: string, text: string) => void
  todoEditing: string
  todoText: string
  setTodoEditing: Dispatch<SetStateAction<string>>
}

export default function TodoButtons({
  id,
  deleteTodo,
  editTodo,
  setEditTodo,
  updateTodo,
  todoEditing,
  todoText,
  setTodoEditing,
}: Props) {
  return (
    <div className="flex flex-col gap-2">
      {editTodo ? (
        <Button
          title={"Save"}
          color={"bg-blue-500"}
          onClick={() => {
            let trimmed = todoEditing.trim()
            if (trimmed) updateTodo(id, todoEditing)
            setEditTodo(false)
          }}
        />
      ) : (
        <Button
          title={"Edit"}
          color={"bg-green-600"}
          onClick={() => {
            setEditTodo(true)
            setTodoEditing(todoText)
          }}
        />
      )}
      <Button
        title="Delete"
        color="bg-red-500"
        onClick={() => {
          deleteTodo(id)
        }}
      />
    </div>
  )
}
