import React from "react"
import { Link } from "gatsby"

export default function Layout({ children }) {
  return (
    <div>
      <head>
        <title>Elicia Au Duong</title>
      </head>
      <header>
        <Link to="/" id="name">
          Elicia Au Duong
        </Link>
        {/* <Link to="/blog-archive" class="nav-link">
          blog
        </Link> */}
        {/* <Link to="/shop" class="nav-link">
          Shop
        </Link> */}
        {/* <Link to="/resources" class="nav-link">
          resources
        </Link> */}
        <Link to="/projects" class="nav-link">
          projects
        </Link>
        <Link to="/about" class="nav-link">
          about
        </Link>
        <Link to="/contact" class="nav-link">
          contact
        </Link>
      </header>
      <main>{children}</main>
      <footer>Copyright © 2020. Elicia Au Duong</footer>
    </div>
  )
}
