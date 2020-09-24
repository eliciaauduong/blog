import React from "react"
import Layout from "../components/layout"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faTwitter,
  faInstagram,
  faPinterest,
  faLinkedin,
  faGithub,
  faCodepen,
} from "@fortawesome/free-brands-svg-icons"

export default function Home() {
  return (
    <Layout>
      <div id="header">
        <div class="header-item" id="header-left">
          <h1>
            <span role="img" aria-label="waving hand">
              👋
            </span>
            Hi, I'm Elicia!
          </h1>
          <p class="about">
            Welcome to my website! I'm a second-year Commerce/Computer Science
            student @ UNSW. I'm interested in areas such as design, web
            development, data analysis and international business.
          </p>
        </div>

        <div class="header-item" id="header-right">
          <img
            src={"../../elicia-home.jpg"}
            alt="Elicia Au Duong"
            id="home-profile"
          />
        </div>
      </div>
      <div id="projects">
        <h1>Recent projects</h1>
        <div class="project-tile">
          <h2>
            <a
              href="https://codepen.io/eliciaauduong/full/zYqmeZg"
              class="project-title"
            >
              <span role="img" aria-label="rocket">
                🚀
              </span>{" "}
              freeCodeCamp: Personal Portfolio
            </a>
          </h2>
          <p id="project-desc">
            <span class="project-date">September 21, 2020</span> Project 5/5 for
            Responsive Web Design Certification from freeCodeCamp: Personal
            Portfolio showcasing projects I designed and built
          </p>
        </div>
        <div class="project-tile">
          <h2>
            <a
              href="https://codepen.io/eliciaauduong/full/KKzxrqz"
              class="project-title"
            >
              <span role="img" aria-label="snake">
                🐍
              </span>{" "}
              freeCodeCamp: Technical Documentation Page
            </a>
          </h2>
          <p id="project-desc">
            <span class="project-date">September 18, 2020</span> Project 4/5 for
            Responsive Web Design Certification from freeCodeCamp: Technical
            Documentation Page for basic Python concepts
          </p>
        </div>
        <div class="project-tile">
          <h2>
            <a
              href="https://codepen.io/eliciaauduong/full/QWNMbze"
              class="project-title"
            >
              <span role="img" aria-label="doughnut">
                🍩
              </span>{" "}
              freeCodeCamp: Product Landing Page
            </a>
          </h2>
          <p id="project-desc">
            <span class="project-date">August 31, 2020</span> Project 3/5 for
            Responsive Web Design Certification from freeCodeCamp: Product
            Landing Page for an imaginary donut subscription service
          </p>
        </div>
        <div class="project-tile">
          <h2>
            <a
              href="https://codepen.io/eliciaauduong/full/poywRpw"
              class="project-title"
            >
              <span role="img" aria-label="check mark button">
                ✅
              </span>{" "}
              freeCodeCamp: Survey Form
            </a>
          </h2>
          <p id="project-desc">
            <span class="project-date">August 29, 2020</span> Project 2/5 for
            Responsive Web Design Certification from freeCodeCamp: A Feedback
            Survey Form for Baymax (inspired by Big Hero 6)
          </p>
        </div>
        <div class="project-tile">
          <h2>
            <a
              href="https://codepen.io/eliciaauduong/full/gOrgXGW"
              class="project-title"
            >
              <span role="img" aria-label="airplane departure">
                🛫
              </span>{" "}
              freeCodeCamp: Tribute Page
            </a>
          </h2>
          <p id="project-desc">
            <span class="project-date">August 27, 2020</span> Project 1/5 for
            Responsive Web Design Certification from freeCodeCamp: A Tribute
            Page for Amelia Earhart
          </p>
        </div>
        <div class="project-tile">
          <h2>
            <a
              href="https://eliciaauduong.github.io/digital-garden/"
              class="project-title"
            >
              <span role="img" aria-label="seedling">
                🌱
              </span>{" "}
              Digital Garden
            </a>
          </h2>
          <p id="project-desc">
            <span class="project-date">August 7, 2020</span> An ongoing work in
            progress of all my thoughts and notes
          </p>
        </div>
      </div>
      <div id="socials">
        <h1>
          Let's stay connected!{" "}
          <span role="img" aria-label="sparkles">
            ✨
          </span>
        </h1>
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
        </div>
      </div>
    </Layout>
  )
}
