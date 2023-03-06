import React from "react"
import TodoButtons from "../atoms/TodoButtons"
import TodoDoneButton from "../atoms/TodoDoneButton"
import TodoText from "../atoms/TodoText"

export default function Todo() {
  return (
    <div className="flex items-start p-4 bg-slate-700 rounded">
      <TodoDoneButton />
      <TodoText />
      <TodoButtons />
    </div>
  )
}
