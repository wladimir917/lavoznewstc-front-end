import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Banner from "../components/banner"
import SEO from "../components/seo"
import banner from "../images/banners/lawson.jpg"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div style={{ width: `60%`, display: `inline-block`, float: `left` }}>
      <h1>Hi people</h1>
      <p>Welcome to your new La Voz News site.</p>
      <p>We are building something great.</p>
    </div>
    <div>
      <img
        src="https://images.pexels.com/photos/452738/pexels-photo-452738.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
        alt="Group of pandas eating bamboo"
      />
    </div>
    <div>
      <img
        src={banner}
        alt="Your add here"
      />
    </div>
    <Link to="/past-editions/">Past Editions</Link>
  </Layout>
)

export default IndexPage
