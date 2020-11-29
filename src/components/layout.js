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
          BLOG
        </Link> */}
        {/* <Link to="/shop" class="nav-link">
          SHOP
        </Link> */}
        {/* <Link to="/resources" class="nav-link">
          RESOURCES
        </Link> */}
        <Link to="/projects" class="nav-link">
          PROJECTS
        </Link>
        <Link to="/about" class="nav-link">
          ABOUT
        </Link>
        <Link to="/contact" class="nav-link">
          CONTACT
        </Link>
      </header>
      <main>{children}</main>
      <footer>Copyright © 2020. Elicia Au Duong</footer>
    </div>
  )
}
