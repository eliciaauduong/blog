import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default function BlogPost({ data }) {
  const post = data.markdownRemark
  return (
    <Layout>
      <main class="sub-page">
        <h1>{post.frontmatter.title}</h1>
        <div id="post-about">
          {post.frontmatter.tags.map(tag => (
            <p key={tag + `tag`} class="tag">
              {tag}
            </p>
          ))}
          <p class="details">
            {post.frontmatter.date} | {post.timeToRead} minutes
          </p>
        </div>
        <section>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      frontmatter {
        title
        date(formatString: "DD MMMM YYYY")
        tags
      }
    }
  }
`
