import * as React from "react"
import { Link } from "gatsby"


import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Hi people</h1>
    <h2>Welcome to my  Gatsby Blog site.</h2>
    <p>Now go build something great.</p>
   
    <p>
    <Link to="/blog/">Visit the Blog Page</Link>
      
    </p>
  </Layout>
)

export default IndexPage
