// Components
import Header from "../organisms/Header"
import AddTodo from "../organisms/AddTodo"

// Types
type Props = {}

export default function HomeTemplate({}: Props) {
  return (
    <>
      <Header count={10} />
      <AddTodo />
      <div className="h-full"></div>
      {/* <Todos /> */}
    </>
  )
}
