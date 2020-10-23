import React from "react"
import Layout from "../components/layout"
import Project from "../../static/project.png"
import FCC4 from "../../static/fcc4.png"
import FCC3 from "../../static/fcc3.png"
import FCC2 from "../../static/fcc2.png"
import FCC1 from "../../static/fcc1.png"
import digital from "../../static/dg.png"

export default function Home() {
  return (
    <Layout>
      <main class="sub-page">
        <h1>Projects</h1>
        <section id="projects">
          <div class="project-tiles">
            <div class="project-box">
              <a
                href="https://codepen.io/eliciaauduong/full/zYqmeZg"
                target="_blank"
                rel="noreferrer"
              >
                <h2>
                  <span role="img" aria-label="rocket">
                    🚀
                  </span>{" "}
                  freeCodeCamp: Personal Portfolio
                </h2>
              </a>
              <p class="project-date">21 September 2020</p>
              <p id="project-desc">
                Project 5/5 for Responsive Web Design Certification from
                freeCodeCamp: Personal Portfolio showcasing projects I designed
                and built
              </p>
            </div>
            <div class="project-box">
              <a
                href="https://codepen.io/eliciaauduong/full/zYqmeZg"
                target="_blank"
                rel="noreferrer"
              >
                <img src={Project} alt="Personal Portfolio" id="project-img" />
              </a>
            </div>
          </div>
          <div class="project-tiles">
            <div class="project-box">
              <a
                href="https://codepen.io/eliciaauduong/full/KKzxrqz"
                target="_blank"
                rel="noreferrer"
              >
                <h2>
                  <span role="img" aria-label="snake">
                    🐍
                  </span>{" "}
                  freeCodeCamp: Technical Documentation Page
                </h2>
              </a>
              <p class="project-date">18 September 2020</p>
              <p id="project-desc">
                Project 4/5 for Responsive Web Design Certification from
                freeCodeCamp: Technical Documentation Page for basic Python
                concepts
              </p>
            </div>
            <div class="project-box">
              <a
                href="https://codepen.io/eliciaauduong/full/KKzxrqz"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={FCC4}
                  alt="Technical Documentation Page"
                  id="project-img"
                />
              </a>
            </div>
          </div>
          <div class="project-tiles">
            <div class="project-box">
              <a
                href="https://codepen.io/eliciaauduong/full/QWNMbze"
                target="_blank"
                rel="noreferrer"
              >
                <h2>
                  <span role="img" aria-label="doughnut">
                    🍩
                  </span>{" "}
                  freeCodeCamp: Product Landing Page
                </h2>
              </a>
              <p class="project-date">31 August 2020</p>
              <p id="project-desc">
                Project 3/5 for Responsive Web Design Certification from
                freeCodeCamp: Product Landing Page for an imaginary donut
                subscription service
              </p>
            </div>
            <div class="project-box">
              <a
                href="https://codepen.io/eliciaauduong/full/QWNMbze"
                target="_blank"
                rel="noreferrer"
              >
                <img src={FCC3} alt="Product Landing Page" id="project-img" />
              </a>
            </div>
          </div>
          <div class="project-tiles">
            <div class="project-box">
              <a
                href="https://codepen.io/eliciaauduong/full/poywRpw"
                target="_blank"
                rel="noreferrer"
              >
                <h2>
                  <span role="img" aria-label="check mark button">
                    ✅
                  </span>{" "}
                  freeCodeCamp: Survey Form
                </h2>
              </a>
              <p class="project-date">29 August 2020</p>
              <p id="project-desc">
                Project 2/5 for Responsive Web Design Certification from
                freeCodeCamp: A Feedback Survey Form for Baymax (inspired by Big
                Hero 6)
              </p>
            </div>
            <div class="project-box">
              <a
                href="https://codepen.io/eliciaauduong/full/poywRpw"
                target="_blank"
                rel="noreferrer"
              >
                <img src={FCC2} alt="Survey Form" id="project-img" />
              </a>
            </div>
          </div>
          <div class="project-tiles">
            <div class="project-box">
              <a
                href="https://codepen.io/eliciaauduong/full/gOrgXGW"
                target="_blank"
                rel="noreferrer"
              >
                <h2>
                  <span role="img" aria-label="airplane departure">
                    🛫
                  </span>{" "}
                  freeCodeCamp: Tribute Page
                </h2>
              </a>
              <p class="project-date">27 August 2020</p>
              <p id="project-desc">
                Project 1/5 for Responsive Web Design Certification from
                freeCodeCamp: A Tribute Page for Amelia Earhart
              </p>
            </div>
            <div class="project-box">
              <a
                href="https://codepen.io/eliciaauduong/full/gOrgXGW"
                target="_blank"
                rel="noreferrer"
              >
                <img src={FCC1} alt="Tribute Page" id="project-img" />
              </a>
            </div>
          </div>
          <div class="project-tiles">
            <div class="project-box">
              <a
                href="https://eliciaauduong.github.io/digital-garden/"
                target="_blank"
                rel="noreferrer"
              >
                <h2>
                  <span role="img" aria-label="seedling">
                    🌱
                  </span>{" "}
                  Digital Garden
                </h2>
              </a>
              <p class="project-date">7 August 2020</p>
              <p id="project-desc">
                An ongoing work in progress of all my thoughts and notes
              </p>
            </div>
            <div class="project-box">
              <a
                href="https://eliciaauduong.github.io/digital-garden/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={digital} alt="Digital Garden" id="project-img" />
              </a>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}
