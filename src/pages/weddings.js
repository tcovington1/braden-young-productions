import React from 'react';
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"


const Weddings = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Braden Young Productions</h1>
    <h1>Weddings</h1>
    <Link to="/" style={{marginRight: '1em'}}>Go to Home</Link>
    <Link to="/commercials">Go to Commercials</Link>
  </Layout>
)

export default Weddings