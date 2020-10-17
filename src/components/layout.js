import React from "react"

export default function Layout({ children }) {
  return (
    <div>
      <head>
        <title>Elicia Au Duong</title>
      </head>
      <header>
        <a href="/" id="name">
          Elicia Au Duong
        </a>
        <a href="/blog/" class="nav-link">
          Blog
        </a>
        {/* <a href="/shop/" class="nav-link">
          Shop
        </a> */}
        {/* <a href="/resources/" class="nav-link">
          Resources
        </a> */}
        <a href="/about/" class="nav-link">
          about
        </a>
        <a href="/contact/" class="nav-link">
          contact
        </a>
      </header>
      <main>{children}</main>
      <footer>Copyright © 2020. Elicia Au Duong</footer>
    </div>
  )
}
