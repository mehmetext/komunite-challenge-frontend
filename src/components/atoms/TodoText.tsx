import { Dispatch, SetStateAction } from "react"
import TextareaAutosize from "react-textarea-autosize"

//Types
type Props = {
  text: string
  editTodo: boolean
  todoEditing: string
  setTodoEditing: Dispatch<SetStateAction<string>>
}

export default function TodoText({
  text,
  editTodo,
  todoEditing,
  setTodoEditing,
}: Props) {
  return editTodo ? (
    <TextareaAutosize
      className="bg-slate-600 outline-none mx-4 my-1 w-full resize-none rounded"
      value={todoEditing}
      onChange={(e) => {
        setTodoEditing(e.target.value)
        console.log(e.target.value)
      }}
    />
  ) : (
    <div className="mx-4 my-1 w-full whitespace-pre-line">{text}</div>
  )
}
