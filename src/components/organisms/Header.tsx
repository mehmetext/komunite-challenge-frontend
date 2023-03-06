//Components
import HeaderLogo from "../molecules/HeaderLogo"
import TodoCount from "../molecules/TodoCount"

//Types
type Props = {
  count: number
}

export default function Header({ count }: Props) {
  return (
    <div className="h-16 bg-slate-700 flex items-center shadow-md">
      <div className="container mx-auto relative">
        <HeaderLogo />
        <TodoCount count={count} />
      </div>
    </div>
  )
}
