import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"

import Logo from "./logo";
import logo from "../images/la-voz-logo.jpg"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

const Header = ({ siteTitle }) => (
  <header>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1rem 1.0875rem`
      }}
    >
      <div>
        <img
          src={logo}
          alt="La Voz Logo"
        />
        <Link to="/" >
          <h3>{siteTitle}</h3>
        </Link>
      </div>
      <div style={{height: `50px`}}>
        <ul style={{float: `right` }}>
          <ListLink to="/">Home</ListLink>
          <ListLink to="/about/">About</ListLink>
          <ListLink to="/contact/">Contact</ListLink>
          <ListLink to="/past-editions/">Past Editions</ListLink>
        </ul>
      </div>
    </div>
    <div
      style={{
        height: '0.9rem',
        background: `gray`,
        opacity: 0.1,
        marginBottom: `1.45rem`,
      }}
    >
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
