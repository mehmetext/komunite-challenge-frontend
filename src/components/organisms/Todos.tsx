import Todo from "../molecules/Todo"

export default function Todos() {
  return (
    <div className="m-5 sm:mx-0">
      <div className="container mx-auto flex flex-col gap-4">
        <Todo />
        <Todo />
        <Todo />
      </div>
    </div>
  )
}
