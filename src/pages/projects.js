import React from "react"
import Layout from "../components/layout"

export default function Home() {
  return (
    <Layout>
      <h1>Projects</h1>
      <div id="projects">
        <div class="project-tile">
          <h3>
            <a
              href="https://codepen.io/eliciaauduong/full/zYqmeZg"
              class="project-title"
            >
              <span role="img" aria-label="rocket">
                🚀
              </span>{" "}
              freeCodeCamp: Personal Portfolio
            </a>
          </h3>
          <p id="project-desc">
            <span class="project-date">September 21, 2020</span> Project 5/5 for
            Responsive Web Design Certification from freeCodeCamp: Personal
            Portfolio showcasing projects I designed and built
          </p>
        </div>
        <div class="project-tile">
          <h3>
            <a
              href="https://codepen.io/eliciaauduong/full/KKzxrqz"
              class="project-title"
            >
              <span role="img" aria-label="snake">
                🐍
              </span>{" "}
              freeCodeCamp: Technical Documentation Page
            </a>
          </h3>
          <p id="project-desc">
            <span class="project-date">September 18, 2020</span> Project 4/5 for
            Responsive Web Design Certification from freeCodeCamp: Technical
            Documentation Page for basic Python concepts
          </p>
        </div>
        <div class="project-tile">
          <h3>
            <a
              href="https://codepen.io/eliciaauduong/full/QWNMbze"
              class="project-title"
            >
              <span role="img" aria-label="doughnut">
                🍩
              </span>{" "}
              freeCodeCamp: Product Landing Page
            </a>
          </h3>
          <p id="project-desc">
            <span class="project-date">August 31, 2020</span> Project 3/5 for
            Responsive Web Design Certification from freeCodeCamp: Product
            Landing Page for an imaginary donut subscription service
          </p>
        </div>
        <div class="project-tile">
          <h3>
            <a
              href="https://codepen.io/eliciaauduong/full/poywRpw"
              class="project-title"
            >
              <span role="img" aria-label="check mark button">
                ✅
              </span>{" "}
              freeCodeCamp: Survey Form
            </a>
          </h3>
          <p id="project-desc">
            <span class="project-date">August 29, 2020</span> Project 2/5 for
            Responsive Web Design Certification from freeCodeCamp: A Feedback
            Survey Form for Baymax (inspired by Big Hero 6)
          </p>
        </div>
        <div class="project-tile">
          <h3>
            <a
              href="https://codepen.io/eliciaauduong/full/gOrgXGW"
              class="project-title"
            >
              <span role="img" aria-label="airplane departure">
                🛫
              </span>{" "}
              freeCodeCamp: Tribute Page
            </a>
          </h3>
          <p id="project-desc">
            <span class="project-date">August 27, 2020</span> Project 1/5 for
            Responsive Web Design Certification from freeCodeCamp: A Tribute
            Page for Amelia Earhart
          </p>
        </div>
        <div class="project-tile">
          <h3>
            <a
              href="https://eliciaauduong.github.io/digital-garden/"
              class="project-title"
            >
              <span role="img" aria-label="seedling">
                🌱
              </span>{" "}
              Digital Garden
            </a>
          </h3>
          <p id="project-desc">
            <span class="project-date">August 7, 2020</span> An ongoing work in
            progress of all my thoughts and notes
          </p>
        </div>
      </div>
    </Layout>
  )
}
