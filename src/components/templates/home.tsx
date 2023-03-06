// Components
import Header from "../organisms/Header"
import AddTodo from "../organisms/AddTodo"
import Todos from "../organisms/Todos"

// Types
type Props = {}

export default function HomeTemplate({}: Props) {
  return (
    <>
      <Header count={10} />
      <AddTodo />
      <Todos />
      <div className="h-full"></div>
    </>
  )
}
