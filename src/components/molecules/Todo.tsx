//Components
import TodoButtons from "../atoms/TodoButtons"
import TodoDoneButton from "../atoms/TodoDoneButton"
import TodoText from "../atoms/TodoText"
import { ITodo } from "../templates/home"

//Types
type Props = {
  todo: ITodo
}

export default function Todo({ todo }: Props) {
  return (
    <div className="flex items-start p-4 bg-slate-700 rounded">
      <TodoDoneButton done={todo.done} />
      <TodoText text={todo.text} />
      <TodoButtons />
    </div>
  )
}
