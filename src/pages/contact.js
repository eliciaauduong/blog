import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faTwitter,
  faInstagram,
  faPinterest,
  faLinkedin,
  faGithub,
  faCodepen,
  faDev,
} from "@fortawesome/free-brands-svg-icons"
import Layout from "../components/layout"

export default function Home() {
  return (
    <Layout>
      <h1 class="heading">Contact</h1>
      <div id="socials">
        <h2>
          Let's stay connected!{" "}
          <span role="img" aria-label="sparkles">
            ✨
          </span>
        </h2>
        <div>
          <a
            href="https://twitter.com/eliciaauduong"
            target="_blank"
            rel="noreferrer"
            class="social-link"
          >
            <FontAwesomeIcon icon={faTwitter} />
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
        </div>
      </div>
    </Layout>
  )
}
