//Types
type Props = {
  done: boolean
}

export default function TodoDoneButton({ done }: Props) {
  return (
    <div className="h-8 w-8 p-1.5 shrink-0 border-slate-600 border-2 rounded-full cursor-pointer">
      {done && <div className="bg-slate-400 rounded-full h-full w-full"></div>}
    </div>
  )
}
