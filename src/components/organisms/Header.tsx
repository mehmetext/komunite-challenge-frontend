//Components

//Types
type Props = {}

export default function Header({}: Props) {
  return (
    <div className="h-16 bg-slate-700 flex items-center shadow-md">
      <div className="container mx-auto relative">
        <div className="text-xl font-bold uppercase flex justify-center sm:justify-start">
          Todo App
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 h-7 w-7 bg-white text-slate-500 text-sm font-extrabold flex justify-center items-center rounded-full right-5 sm:right-0">
          5
        </div>
      </div>
    </div>
  )
}
