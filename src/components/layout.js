import React from "react"
// import { Link } from "gatsby"
import "../styles/navbar.css"

// const ListLink = props => (
//   <li style={{ display: `inline-block` }}>
//     <Link to={props.to}>{props.children}</Link>
//   </li>
// )

export default function Layout({ children }) {
  return (
    <div>
      <head>
        <title>Elicia Au Duong</title>
      </head>
      {/* <header>
        <ul style={{ listStyle: `none`, textAlign: `center` }}>
          <ListLink to="/">Home</ListLink>
          <ListLink to="/blog">Blog</ListLink>
          <ListLink to="/resources">Resources</ListLink>
          <ListLink to="/about/">About</ListLink>
          <ListLink to="/contact/">Contact</ListLink>
        </ul>
      </header> */}
      <header>
        <a href="/" class="nav-link">
          Home
        </a>
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
