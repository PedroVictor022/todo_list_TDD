import React from "react"

export const Button = ({children}) => {
  return (
    <button
      style={{
        padding: "0",
        background:"none",
        borderRadius:"0"
      }}
    >{children}</button>
  )
}