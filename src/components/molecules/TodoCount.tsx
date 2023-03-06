//Types
type Props = {
  count: number
}

export default function TodoCount({ count }: Props) {
  return (
    <div
      className={`absolute top-1/2 -translate-y-1/2 h-7 w-7 bg-white text-slate-500 font-extrabold flex justify-center items-center rounded-full right-5 sm:right-0 ${
        count > 99 ? "text-xs" : "text-sm"
      }`}
    >
      {count > 99 ? `99+` : count}
    </div>
  )
}
