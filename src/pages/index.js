import React from "react"
import Layout from "../components/layout"
import { Link, graphql } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faTwitter,
  faInstagram,
  faPinterest,
  faLinkedin,
  faGithub,
  faCodepen,
  faDev,
  faDribbble,
} from "@fortawesome/free-brands-svg-icons"
import Profile from "../../static/elicia-home.jpg"
import Enactus from "../../static/enactus.png"
import Redback from "../../static/redback.png"
import PowerApp from "../../static/powerapp.gif"

export default function Home({ data }) {
  return (
    <Layout>
      <section id="hello">
        <div class="hello-box">
          <div id="hello-text">
            <p id="title">Hi, I'm Elicia!</p>
            <p id="subtitle">university student | content creator</p>
          </div>
          <Link to="/contact" class="button-link">
            <button>Contact Me</button>
          </Link>
        </div>
        <div class="hello-box">
          <img src={Profile} alt="Elicia Au Duong" id="home-profile" />
        </div>
      </section>
      <section id="blog-posts">
        <h1>Coming Soon: Blog Posts</h1>
        <p id="more-blogs">
          Keep a look out for upcoming content on university life, design,
          technology, and business!
        </p>
        {/* <div id="posts">
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
          <div id="more-blogs">
            <a href="/blog-archive/">
              <button>Read more →</button>
            </a>
          </div>
        </div> */}
      </section>
      <section id="groups">
        <div id="group-logos">
          <div>
            <img src={Enactus} alt="Enactus" class="group-logo" />
          </div>
          <div>
            <img src={Redback} alt="Redback" class="group-logo" />
          </div>
        </div>
      </section>
      <section id="home-projects">
        <div class="project-box">
          <h1 id="project-title">Projects</h1>
          <p id="project-desc">
            Outside of my studies, I enjoy designing and creating projects. Here
            is my most recent project from a workshop at Microsoft Codess: an
            Introduction to Power Apps.
          </p>
          <Link to="/projects" class="button-link">
            <button>View all projects →</button>
          </Link>
        </div>
        <div class="project-box" id="power-box">
          <img src={PowerApp} alt="Personal Portfolio" id="project-gif" />
        </div>
      </section>
      {/* <section id="subscribe">
        <h1>Get news about my blogs + projects</h1>
        <p>Subscribe to my newsletter</p>
      </section> */}
      <section>
        <h1>Let's stay connected!</h1>
        <div class="socials">
          <a
            href="https://twitter.com/eliciaauduong"
            target="_blank"
            rel="noreferrer"
            class="social-link"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a
            href="https://www.linkedin.com/in/eliciaauduong/"
            target="_blank"
            rel="noreferrer"
            class="social-link"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="https://github.com/eliciaauduong"
            target="_blank"
            rel="noreferrer"
            class="social-link"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://dribbble.com/eliciaauduong"
            target="_blank"
            rel="noreferrer"
            class="social-link"
          >
            <FontAwesomeIcon icon={faDribbble} />
          </a>
          <a
            href="https://codepen.io/eliciaauduong"
            target="_blank"
            rel="noreferrer"
            class="social-link"
          >
            <FontAwesomeIcon icon={faCodepen} />
          </a>
          <a
            href="https://dev.to/eliciaauduong"
            target="_blank"
            rel="noreferrer"
            class="social-link"
          >
            <FontAwesomeIcon icon={faDev} />
          </a>
          <a
            href="https://www.instagram.com/eliciaauduong/"
            target="_blank"
            rel="noreferrer"
            class="social-link"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            href="https://www.pinterest.com.au/eliciaauduong"
            target="_blank"
            rel="noreferrer"
            class="social-link"
          >
            <FontAwesomeIcon icon={faPinterest} />
          </a>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 3
    ) {
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
