import { useEffect, useState } from "react"
import uniqid from "uniqid"

// Components
import Header from "../organisms/Header"
import AddTodo from "../organisms/AddTodo"
import Todos from "../organisms/Todos"

// Types
type Props = {}

export type ITodo = {
  done: boolean
  text: string
  id: string
}

export default function HomeTemplate({}: Props) {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState<ITodo[]>([
    {
      done: true,
      text: "Lorem ipsum...",
      id: "1",
    },
    {
      done: false,
      text: "Lorem ipsum dolor sit amet...",
      id: "2",
    },
  ])
  const [activeCount, setActiveCount] = useState(0)

  useEffect(() => {
    setActiveCount(todos.filter((todo) => !todo.done).length)
  }, [todos])

  const addTodo = () => {
    let trimmed = todo.trim()
    if (trimmed) {
      setTodos([
        {
          done: false,
          text: trimmed,
          id: uniqid(),
        },
        ...todos,
      ])
    }
    setTodo("")
  }

  return (
    <>
      <Header count={activeCount} />
      <AddTodo todo={todo} setTodo={setTodo} addTodo={addTodo} />
      <Todos todos={todos} />
    </>
  )
}
