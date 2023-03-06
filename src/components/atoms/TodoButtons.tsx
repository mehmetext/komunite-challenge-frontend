import Button from "./Button"

export default function TodoButtons() {
  return (
    <div className="flex flex-col gap-2">
      <Button title="Edit" color="bg-green-600" onClick={() => {}} />
      <Button title="Delete" color="bg-red-500" onClick={() => {}} />
    </div>
  )
}
