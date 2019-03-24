import React from "react"

import Container from "../components/container"
import Header from "../components/header";
import Layout from "../components/layout";

import banner from "../images/banners/rumba-latina.jpg"


export default () => (
  <Layout>
    <Container>
      <h1>Past Issues</h1>
      <p>La Voz Newspaper</p>
      <div>
      <img
        src={banner}
        alt="Your add here"
      />
    </div>
    </Container>
  </Layout>
)