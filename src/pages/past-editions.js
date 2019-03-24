import React from "react"
import { Document, Page } from 'react-pdf';

import Container from "../components/container"
import Header from "../components/header";
import Layout from "../components/layout";

import banner from "../images/banners/rumba-latina.jpg"
import Pdf from "../components/Pdf";


export default () => (
  <Layout>
    <Container>
      <h1>Past Edition</h1>
      <Pdf/>
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