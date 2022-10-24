import React from "react"

export default function PrimaryButton(props: React.HTMLAttributes<HTMLButtonElement>) {
  return (
    <button className="border-2 border-blue-500 bg-blue-400 rounded-full p-1 m-1 hover:border-blue-900" onClick={(e) => { (props.onClick && props.onClick(e)) }}>{props.children}</button >
  )
}
