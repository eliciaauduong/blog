import React from "react"
import Header from "../components/header"

export default function Layout({ children }) {
  return (
    <div style={{ margin: `90px auto`, width: 1000, padding: `0` }}>
      <Header>{children}</Header>
    </div>
  )
}
