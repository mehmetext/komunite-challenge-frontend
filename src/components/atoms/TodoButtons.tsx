//Components
import Button from "./Button"

//Types
type Props = {
  deleteTodo: (id: string) => void
  id: string
}

export default function TodoButtons({ id, deleteTodo }: Props) {
  return (
    <div className="flex flex-col gap-2">
      <Button title="Edit" color="bg-green-600" onClick={() => {}} />
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
