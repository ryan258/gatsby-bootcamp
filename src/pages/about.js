import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const AboutPage = () => {
  return (
    <Layout>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam
        veritatis suscipit dignissimos ullam blanditiis odit? Quos, eaque!
        Explicabo voluptatem inventore iusto sit. Suscipit impedit inventore
        autem officia. Facilis, consequatur nesciunt?
      </p>
      <p>
        <Link to="/contact">Contact Manny!</Link>
      </p>
    </Layout>
  )
}

export default AboutPage
