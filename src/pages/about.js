import React from "react"
import Layout from "../components/layout"
import Enactus from "../../static/enactus.png"
import Redback from "../../static/redback.png"

export default function About() {
  return (
    <Layout>
      <h1>About</h1>
      <p class="about-desc">
        Hi! I'm Elicia, a second-year Commerce/ Computer Science student @ UNSW,
        majoring in International Business and Business Economics.
      </p>
      <p class="about-desc">
        I'm interested in areas such as design, web development, data analysis
        and international business.
      </p>
      <h2>Teams</h2>
      <div id="groups">
        <img src={Enactus} alt="Enactus" class="group-logo" />
        <img src={Redback} alt="Redback" class="group-logo" />
      </div>
      <p class="about-desc">
        Have any questions? <a href="/contact/">Get in touch</a>!
      </p>
    </Layout>
  )
}
