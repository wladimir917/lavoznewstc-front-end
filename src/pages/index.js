import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Banner from "../components/banner"
import SEO from "../components/seo"
import banner from "../images/banners/banner.jpg"
import portada from "../images/banners/portada.jpg"


const IndexPage = () => (
  <StaticQuery
    query={graphql`
      query LaVozEditionsQuery {
        allEditionsJson {
          edges {
            node {
              title
              content
            }
          }
        }
      }
    `}
    render={data => (
      // <header>
      //   <h1>{data.allEditionsJson.edges[0].node.title}</h1>
      // </header>
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
      <h1>{data.allEditionsJson.edges[0].node.title}</h1>
      {/* <h3>Reich&Mancini P.A.</h3> */}
      <p>{data.allEditionsJson.edges[0].node.content}
    <a href='/past-editions/'> leer mas...</a>
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
    )}
  />
//   <Layout>
//     <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
//     <div>
//       <img
//         src={banner}
//         alt="Your add here"
//       />
//     </div>
//     {/* <div> */}
//     <div style={{ width: `100%`, display: `inline-block`, float: `left` }}>
//       <h1>¿Por qué es tan preocupante para
// inmigrantes latinos la pregunta de
// “ciudadanía” en el censo 2020?</h1>
//       {/* <h3>Reich&Mancini P.A.</h3> */}
//       <p>Crece la incertidumbre sobre ls decisión final de la Corte Suprema sobre la
// intención del gobierno del presidente Donald Trump de incluir la controversial
// pregunta de si las personas son ciudadanos o no en el próximo censo en 2020.
//     <a href='http://www.lavoznewstc.com/past-editions/'> leer mas...</a>
//     </p>
//     </div>
//     <div>
//       <img
//         src={portada}
//         alt="Andrew Reich y David Mancini"
//       />
//     </div>
//     {/* <div>
//       <img
//         src="https://images.pexels.com/photos/452738/pexels-photo-452738.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
//         alt="Group of pandas eating bamboo"
//       />
//     </div> */}
//     <Link to="/past-editions/">Past Edition</Link>
//   </Layout>
)

export default IndexPage
