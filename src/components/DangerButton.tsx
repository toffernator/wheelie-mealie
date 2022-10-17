import React from "react"

interface Props {
  text: String
  onClick: () => void
}

export default function DangerButton(props: Props & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <button className="border-2 border-rose-500 bg-rose-400 rounded-full p-1 m-1 hover:border-rose-900" onClick={() => { (props.onClick && props.onClick()) }}> {props.text}</button >
  )
}
