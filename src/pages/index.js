import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <h1>Hello.</h1>
      <h2>I'm Manny, a manatee sitting next to Ryan's computer... :D</h2>
      <p>
        Need a manatee for your next project?{" "}
        <Link to="/contact">Contact Me</Link>
      </p>
    </Layout>
  )
}

export default IndexPage
