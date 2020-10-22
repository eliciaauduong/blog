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
import Contact from "../../static/contact.jpg"

export default function Home() {
  return (
    <Layout>
      <main class="sub-page">
        <section>
          <h1>Contact</h1>
          <img src={Contact} alt="desk layout" id="contact-header" />
          <div id="contact-info">
            <p>
              Thank you for checking out my blog. If you're interested in what I
              do or have any questions, the best way to connect with me is on{" "}
              <a
                href="https://twitter.com/eliciaauduong"
                target="_blank"
                rel="noreferrer"
                class="link"
              >
                Twitter
              </a>
              !
            </p>
          </div>
          <div id="socials">
            <h2>Follow me on social media!</h2>
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
        </section>
      </main>
    </Layout>
  )
}
