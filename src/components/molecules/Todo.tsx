//Components
import TodoButtons from "../atoms/TodoButtons"
import TodoDoneButton from "../atoms/TodoDoneButton"
import TodoText from "../atoms/TodoText"
import { ITodo } from "../templates/home"

//Types
type Props = {
  todo: ITodo
  changeDone: (id: string) => void
}

export default function Todo({ todo, changeDone }: Props) {
  return (
    <div className="flex items-start p-4 bg-slate-700 rounded">
      <TodoDoneButton id={todo.id} done={todo.done} changeDone={changeDone} />
      <TodoText text={todo.text} />
      <TodoButtons />
    </div>
  )
}
