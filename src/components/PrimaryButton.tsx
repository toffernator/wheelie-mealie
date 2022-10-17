import React from "react"

interface Props {
  text: String
  onClick: () => void
}

export default function PrimaryButton(props: Props & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <button className="border-2 border-blue-500 bg-blue-400 rounded-full p-1 m-1 hover:border-blue-900" onClick={() => { (props.onClick && props.onClick()) }}> {props.text}</button >
  )
}
