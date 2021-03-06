import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Braden Young Productions</h1>
    <Link to="/weddings" style={{marginRight: '1em'}}>Go to Weddings</Link>
    <Link to="/commercials">Go to Commercials</Link>
  </Layout>
)

export default IndexPage
