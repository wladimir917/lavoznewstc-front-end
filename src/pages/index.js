import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Banner from "../components/banner"
import SEO from "../components/seo"
import banner from "../images/banners/banner.jpg"
import portada from "../images/banners/portada.jpg"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div>
      <img
        src={banner}
        alt="Your add here"
      />
    </div>
    {/* <div> */}
    <div style={{ width: `100%`, display: `inline-block`, float: `left` }}>
      <h1>ESTADOS UNIDOS pierde $2 mil
millones por desastres naturales
en lo que va de 2019</h1>
      {/* <h3>Reich&Mancini P.A.</h3> */}
      <p>La llamada bomba ciclónica que trajo fuertes nevadas,
condiciones de ventisca e inundaciones importantes en el Medio Oeste de Estados Unidos en
marzo llegó con un rotundo récord meteorológico y se convirtió en uno de los dos mil millones
de dólares de pérdidas por desastres climáticos en lo que va de año.
    <a href='http://www.lavoznewstc.com/past-editions/'> leer mas...</a>
    </p>
    </div>
    <div>
      <img
        src={portada}
        alt="Andrew Reich y David Mancini"
      />
    </div>
    {/* <div>
      <img
        src="https://images.pexels.com/photos/452738/pexels-photo-452738.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
        alt="Group of pandas eating bamboo"
      />
    </div> */}
    <Link to="/past-editions/">Past Edition</Link>
  </Layout>
)

export default IndexPage
