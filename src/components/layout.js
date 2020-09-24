import React from "react"
import { Link } from "gatsby"
import "../styles/navbar.css"

// const ListLink = props => (
//   <li style={{ display: `inline-block` }}>
//     <Link to={props.to}>{props.children}</Link>
//   </li>
// )

export default function Layout({ children }) {
  return (
    <div>
      {/* <header>
        <ul style={{ listStyle: `none`, textAlign: `center` }}>
          <ListLink to="/">Home</ListLink>
          <ListLink to="/blog">Blog</ListLink>
          <ListLink to="/resources">Resources</ListLink>
          <ListLink to="/about/">About</ListLink>
          <ListLink to="/contact/">Contact</ListLink>
        </ul>
      </header> */}
      <main>{children}</main>
      <footer>Copyright © 2020. Elicia Au Duong</footer>
    </div>
  )
}
