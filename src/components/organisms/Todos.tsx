//Components
import NoTodos from "../molecules/NoTodos"
import Todo from "../molecules/Todo"
import { ITodo } from "../templates/home"

//Types
type Props = {
  todos: ITodo[]
  changeDone: (id: string) => void
  deleteTodo: (id: string) => void
  updateTodo: (id: string, text: string) => void
}

export default function Todos({
  todos,
  changeDone,
  deleteTodo,
  updateTodo,
}: Props) {
  return (
    <div className="m-5 sm:mx-0">
      <div className="container mx-auto flex flex-col gap-4">
        {todos.length > 0 ? (
          todos.map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              changeDone={changeDone}
              deleteTodo={deleteTodo}
              updateTodo={updateTodo}
            />
          ))
        ) : (
          <NoTodos />
        )}
      </div>
    </div>
  )
}
