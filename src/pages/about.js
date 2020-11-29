import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import City from "../../static/city.jpg"
import Qudos from "../../static/qudos.jpg"
import Sunblock from "../../static/sunblock.jpg"

export default function About() {
  return (
    <Layout>
      <main class="sub-page">
        <h1>About</h1>
        <section>
          <p class="about-desc">
            Hi! I'm Elicia, a second-year Commerce/ Computer Science student @
            the University of New South Wales (UNSW), majoring in International
            Business.
          </p>
          <p class="about-desc">
            I'm passionate about design, web development, data analysis and
            international business. Want a sneak peek at my thoughts and notes?
            Check out{" "}
            <a
              href="https://eliciaauduong.github.io/digital-garden/"
              target="_blank"
              rel="noreferrer"
              class="link"
            >
              my digital garden
            </a>
            .
          </p>
          <p class="about-desc">
            This website was made with{" "}
            <span role="img" aria-label="red heart">
              ❤️
            </span>{" "}
            and {"</>"} using Gatsby.
          </p>
          <p class="about-desc">
            Have any questions?{" "}
            <Link to="/contact" class="link">
              Get in touch
            </Link>
            !
          </p>
        </section>
        <section id="about-photos">
          <img src={Qudos} alt="Elicia Au Duong at Qudos" class="about-photo" />
          <img
            src={Sunblock}
            alt="Elicia Au Duong at Qudos"
            class="about-photo"
          />
          <img
            src={City}
            alt="Elicia Au Duong at the city"
            class="about-photo"
          />
        </section>
      </main>
    </Layout>
  )
}
