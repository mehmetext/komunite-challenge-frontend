//Types
type Props = {
  text: string
}

export default function TodoText({ text }: Props) {
  return <div className="mx-4 my-1 w-full">{text}</div>
}
