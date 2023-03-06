import { MouseEventHandler } from "react"

//Types
type Props = {
  title: string
  color?: string
  onClick: MouseEventHandler<HTMLDivElement>
}

export default function Button({
  title,
  color = "bg-slate-500",
  onClick,
}: Props) {
  return (
    <div
      className={`${color} py-1 px-2 rounded select-none cursor-pointer text-center`}
      onClick={onClick}
    >
      {title}
    </div>
  )
}
