//Types
type Props = {
  done: boolean
  changeDone: (id: string) => void
  id: string
}

export default function TodoDoneButton({ id, done, changeDone }: Props) {
  return (
    <div
      className="h-8 w-8 p-1.5 shrink-0 border-slate-600 border-2 rounded-full cursor-pointer"
      onClick={() => {
        changeDone(id)
      }}
    >
      {done && <div className="bg-slate-400 rounded-full h-full w-full"></div>}
    </div>
  )
}
