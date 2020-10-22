import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

export default function Home({ data }) {
  console.log(data)
  return (
    <Layout>
      <main class="sub-page">
        <h1>Blog Posts</h1>
        <section>
          <div id="posts">
            {data.allMarkdownRemark.edges.map(({ node }) => (
              <article key={node.id} class="post">
                <div class="about-post">
                  <h2>{node.frontmatter.title}</h2>
                  <p class="details">
                    in{" "}
                    {node.frontmatter.tags.map(tag => (
                      <p key={tag + `tag`} class="tag">
                        {tag}
                      </p>
                    ))}{" "}
                    on {node.frontmatter.date} | {node.timeToRead} minutes
                  </p>
                  <p>{node.excerpt}</p>
                </div>
                <Link to={node.fields.slug} class="blog-link">
                  View Post →
                </Link>
              </article>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          timeToRead
          frontmatter {
            title
            date(formatString: "DD MMMM YYYY")
            tags
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
